import Hero from "../conponents/homeComponents/hero/page";
import MyStatements from "../conponents/common/myStatements/page";
import PremiumValue from "../conponents/homeComponents/premiumValue/page";
import FeaturedServices from "../conponents/homeComponents/featuredServices/page";
import FeaturedProjects from "../conponents/homeComponents/featuredProjects/page";
import WhyBusiness from "../conponents/homeComponents/whyBusiness/page";

export default function Home() {
  return (
    <>
      <Hero />
      <PremiumValue />
      <FeaturedServices />
      <FeaturedProjects />
      <WhyBusiness />
      <MyStatements
        titleStatements="Trust Statement"
        descrStatements=" Helping businesses build faster, smarter, and more scalable digital
            products with a focus on quality, performance, and long-term
            success."
      />
    </>
  );
}
