import dynamic from "next/dynamic";
import Home from "@/components/Home";
const AboutUs = dynamic(() => import("@/components/AboutUs"));
const OurGames = dynamic(() => import("@/components/OurGames"));
const OurPartners = dynamic(() => import("@/components/OurPartners"));

export default function App() {
  return (
    <main className="flex w-full min-h-screen flex-col gap-12 md:gap-[80px] lg:gap-[128px] items-center justify-between">
      <Home />
      <AboutUs />
      <OurGames />
      <OurPartners />
    </main>
  );
}
