import Image from "next/image";
import Hero from "./src/components/Hero";
import Mockup from "./src/components/Mockup";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <div className="pointer-events-none absolute left-1/2 top-20 w-full hidden md:flex justify-center z-30" style={{ transform: 'translateX(-50%)', pointerEvents: 'none' }}>
        <div className="-mb-32 md:-mb-40 lg:-mb-56">
          <Mockup />
        </div>
      </div>
    </div>
  );
}
