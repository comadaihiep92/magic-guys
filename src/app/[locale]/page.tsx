import AboutUs from "@/components/AboutUs";
import Home from "@/components/Home";
import OurGames from "@/components/OurGames";
import OurPartners from "@/components/OurPartners";

export default function App() {
  return (
    <main className="flex w-full min-h-screen flex-col gap-12 md:gap-[128px] items-center justify-between">
      <Home />
      <AboutUs />
      <OurGames />
      <OurPartners />
    </main>
  );
}
