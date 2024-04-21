import AboutTeam from "@/components/About/AboutTeam";
import HeaderAbout from "@/components/About/Header";
import Items from "@/components/About/Items";
import OurSponsors from "@/components/About/OurSponsors";
import OurTeam from "@/components/About/OurTeam";
import RecentEpisodes from "@/components/Home/RecentEpisodes";

export default function About() {
  return (
    <main className="mb-60">
      <HeaderAbout />
      <Items />
      <AboutTeam />
      <OurTeam />
      <OurSponsors />
      <RecentEpisodes />
    </main>
  );
}
