import Brands from "@/components/Home/Brands";
import HeaderH from "@/components/Home/Header";
import HowItBegan from "@/components/Home/HowItBegan";
import WhyIsItFor from "@/components/Home/WhyIsItFor";

export default function Home() {
  return (
    <main className="mb-60">
      <HeaderH />
      <Brands />
      <WhyIsItFor />
      <HowItBegan />
    </main>
  );
}
