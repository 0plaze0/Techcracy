import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./WorkshopCarousel.scss";

interface WorkshopCarouselProps {
    images: string[];
}

const WorkshopCarousel: React.FC<WorkshopCarouselProps> = ({ images }) => {
    return (
        <div className="carousel">
            <Splide
                options={{
                    type: "loop",
                    perPage: 4,
                    focus: "center",
                    pagination: false,
                    arrows: true,
                    breakpoints: {
                        768: {
                            perPage: 1,
                        },
                    },
                }}
            >
                {images.map((image, index) => (
                    <SplideSlide key={index}>
                        <div className="carousel-item">
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default WorkshopCarousel;
