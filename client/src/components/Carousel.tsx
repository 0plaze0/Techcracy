import React, { useEffect, useRef, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px dashed red;
`;

const Viewport = styled.div`
  perspective: 300px;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
`;

const InstructionsOverlay = styled.div<{ visible: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.visible ? 1 : -1)};
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Frame = styled.div<{ zIndex: number; opacity: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: translateZ(${(props) => props.zIndex}px);
  opacity: ${(props) => props.opacity};
  display: ${(props) => (props.zIndex > 300 ? "none" : "block")};

  &.text {
    text-align: center;
    h1 {
      color: white;
      padding: 2em;
    }
  }

  &.image {
    text-align: center;
  }

  &.box {
    border-radius: 0.5em;
    background-color: white;
    padding: 2em;
  }
`;

interface FrameData {
  type: "box" | "text" | "image";
  content: React.ReactNode;
}

const frames: FrameData[] = [
  { type: "box", content: <h1>Frame 10 (Box)</h1> },
  { type: "text", content: <h1>Frame 9 (Text)</h1> },
  {
    type: "image",
    content: (
      <>
        <h1>Frame 8 (Image)</h1>
        <img src="/api/placeholder/1000/400" alt="placeholder" />
      </>
    ),
  },
  { type: "text", content: <h1>Frame 7 (Text)</h1> },
  { type: "box", content: <h1>Frame 6 (Box)</h1> },
  { type: "text", content: <h1>Frame 5 (Text)</h1> },
  {
    type: "image",
    content: (
      <>
        <h1>Frame 4 (Image)</h1>
        <img src="/api/placeholder/1000/200" alt="placeholder" />
        <p>Lorem ipsum</p>
      </>
    ),
  },
  { type: "text", content: <h1>Frame 3 (Text)</h1> },
  { type: "box", content: <h1>Frame 2 (Box)</h1> },
  { type: "box", content: <h1>Frame 1 (Box)</h1> },
];

const ScrollingFrames: React.FC = () => {
  const [zVals, setZVals] = useState<number[]>([]);
  const [showInstructions, setShowInstructions] = useState(true);
  const lastPosRef = useRef(0);

  useEffect(() => {
    const zSpacing = -1000;
    const initialZVals = frames.map((_, i) => (frames.length - i) * zSpacing);
    setZVals(initialZVals);

    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      const delta = lastPosRef.current - top;
      lastPosRef.current = top;

      setZVals((prevZVals) =>
        prevZVals.map((zVal) => {
          const newZVal = zVal + delta * -1.5;
          if (newZVal > -9000 && showInstructions) {
            setShowInstructions(false);
          }
          return newZVal;
        })
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showInstructions]);

  return (
    <>
      <Content>
        <Viewport>
          <InstructionsOverlay visible={showInstructions}>
            <h1>Initial Instructions Overlay</h1>
            <p>This will go away after you scroll</p>
            <p>
              Orig Source Code From{" "}
              <a href="http://eng.wealthfront.com/2012/03/22/scrolling-z-axis-with-css-3d-transforms/">
                Matt Baker
              </a>
            </p>
          </InstructionsOverlay>
          {frames.map((frame, index) => (
            <Frame
              key={index}
              className={frame.type}
              zIndex={zVals[index]}
              opacity={
                zVals[index] < 200
                  ? 1
                  : 1 - Math.min(1, (zVals[index] - 200) / 100)
              }
            >
              {frame.content}
            </Frame>
          ))}
        </Viewport>
      </Content>
    </>
  );
};

export default ScrollingFrames;
