import { Carousel3D } from "../../components";
import { Hero, Events, Slider, Merchandise } from "../../components/home";
import Sponsor from "../../components/home/sponsor/sponsor";
import Navbar from "../../components/navbar/navbar";

export default function HomePage() {

  return (
    <main className="main_back_1">
      <Navbar/>
      <Hero />
      <Events />
      <Carousel3D />
      <Merchandise />
      <Slider />
      <Sponsor/>
    </main>
  );

}
