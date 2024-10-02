import { Carousel3D } from "../../components";
import { Hero, Events, Slider, Merchandise } from "../../components/home";

export default function HomePage() {
    return (
        <main className="main_back_1">
            <Hero />
            <Events />
            <Carousel3D />
            <Merchandise />
            <Slider />
            {/* <Slider /> */}
        </main>
    );
}
