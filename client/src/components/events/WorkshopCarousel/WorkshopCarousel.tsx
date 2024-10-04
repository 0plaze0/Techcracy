import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./WorkshopCarousel.scss";

import { EventProps } from "../../../types/event";
export default function WorkshopCarousel({ events }: { events: EventProps[] }) {
    const image_dir = "/assets/events/";

    return (
        <div className="carousel">
            <Splide
                options={{
                    type: "loop",
                    perPage: 4,
                    focus: "center",
                    pagination: false,
                    arrows: events.length > 1,
                    clones: 0,
                    cloneStatus: false,
                    breakpoints: {
                        768: {
                            perPage: 1,
                        },
                    },
                }}
            >
                {events.map((event, index) => (
                    <SplideSlide key={index}>
                        <div className="carousel-item">
                            <img
                                src={`${image_dir}${event.image}`}
                                alt={`${event.name}`}
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

// export default WorkshopCarousel;
