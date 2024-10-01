import { useEffect, useRef } from "react";

const Main_back = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      videoRef.current?.play().catch((error: Error) => {
        console.error("Autoplay was prevented:", error);
      });
    };

    playVideo();
    window.addEventListener("load", playVideo);
    return () => window.removeEventListener("load", playVideo);
  }, []);
  return (
    <main className="main_back">
      <div className="main_back_1">
        <div className="section1">
          <video className="tech_video" autoPlay muted loop playsInline>
            <source src="./src/assets/techcracyVideo.mp4" type="video/mp4" />
          </video>
          <img
            className="techcracy"
            src="src/assets/Full_logo_with_tag_black-removebg-preview.png"
            alt="image loading"
          />
        </div>
        <div className="section1_bottom"></div>
        <div className="section2">
          <img
            className="mario"
            src="./src/assets/marioRun.gif"
            alt="image loading"
          />
          <img
            className="soil"
            src="src/assets/underground.png"
            alt="image loading"
          />
          <a href="">
            <img
              className="insomnia"
              src="src/assets/INSOMNIA.png"
              alt="image loading"
            />
          </a>
          <a href="">
            <img
              className="exhibition"
              src="src/assets/exhibition.png"
              alt="image loading"
            />
          </a>
          <a href="">
            <img
              className="compition"
              src="src/assets/compition.png"
              alt="image loading"
            />
          </a>
        </div>
        <div className="section2_bottom">
        <div className="strap-slide">
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
          </div>
          <div className="strap-slide">
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
            <img src="src/assets/strap.png" alt="strap" />
          </div>
        </div>
        <div className="sp"></div>
        <div className="section3">
          <h1 className="merchandise"></h1>
        </div>
        <div className="section4">
          <video className="merchandise" autoPlay muted loop playsInline>
            <source src="./src/assets/merchandise.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="section4_bottom"></div>
        <div className="section5"></div>
      </div>
    </main>
  );
};

export default Main_back;
