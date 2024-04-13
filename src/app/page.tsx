import Brands from "@/components/Home/Brands";
import HeaderH from "@/components/Home/Header";
import HowItBegan from "@/components/Home/HowItBegan";
import RecentEpisodes from "@/components/Home/RecentEpisodes";
import Subscribe from "@/components/Home/Subscribe";
import Testimonials from "@/components/Home/Testimonials";
import WhyIsItFor from "@/components/Home/WhyIsItFor";

export default function Home() {
  return (
    <main className="mb-60">
      <HeaderH />
      <Brands />
      <WhyIsItFor />
      <HowItBegan />
      <RecentEpisodes />
      <Testimonials />
      <Subscribe />
    </main>
  );
}
