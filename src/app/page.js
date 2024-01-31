import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto min-h-screen bg-[#121212] container px-12 py-4 ">
      <HeroSection />
    </main>
  );
}
