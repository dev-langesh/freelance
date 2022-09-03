import LandingSection from "../components/Home/LandingSection";
import FundingNeeds from "../components/Home/FundingNeeds";
import CardGroup from "../components/Home/CardGroup";
import Section3 from "../components/Home/Section3";
import QualifyOnline from "../components/Home/QualifyOnline";

export default function Home() {
  return (
    <div className="font-roboto">
      <LandingSection />
      <FundingNeeds />
      <CardGroup />
      <Section3 />
      <QualifyOnline />
    </div>
  );
}
