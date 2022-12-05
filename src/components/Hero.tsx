import { Button } from "./Button";

import heroImg from "../assets/hero-image.png";
import { Container } from "./Container";

export function Hero() {
  return (
    <div className="justify-cente bg-gradient-to-t from-blue-100 to-yellow-50 pt-8">
      <Container className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-center lg:text-left text-4xl text-stone-700 mb-4">
            Discover the beast beachs near you
          </h2>
          <Button>See the best beachs</Button>
        </div>
        <img className="mt-4 max-h-full max-w-full" src={heroImg} />
      </Container>
    </div>
  );
}
