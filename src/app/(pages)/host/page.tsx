import Brands from "@/components/Home/Brands";
import RecentEpisodes from "@/components/Home/RecentEpisodes";
import Achievements from "@/components/Host/Achievements";
import CTA from "@/components/Host/CTA";
import DreamSection from "@/components/Host/DreamSection";
import HeaderHost from "@/components/Host/Header";
import Journey from "@/components/Host/Journet";

export default function Host() {
  return (
    <main className="mb-64">
      <HeaderHost />
      <Brands />
      <DreamSection />
      <Journey />
      <Achievements />
      <CTA/>
      <RecentEpisodes />
    </main>
  );
}
