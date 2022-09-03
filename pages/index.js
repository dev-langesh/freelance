import LandingSection from "../components/Home/LandingSection";
import FundingNeeds from "../components/Home/FundingNeeds";
import CardGroup from "../components/Home/CardGroup";

export default function Home() {
  return (
    <div className="font-roboto">
      <LandingSection />
      <FundingNeeds />
      <CardGroup />
    </div>
  );
}
