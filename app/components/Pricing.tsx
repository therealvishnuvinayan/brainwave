import Image from "next/image";
import { smallSphere, stars } from "@/public/assets";
import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container z-2 relative">
        <div className="hidden lg:flex relative justify-center mb-[6.5rem]">
          <Image
            src={smallSphere}
            width={255}
            height={255}
            alt="sphere"
            className="relative z-1"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image src={stars} width={950} height={400} alt="stars" />
          </div>
        </div>
        <Heading
          title="Pay once, use forever"
          tag="GET STARTED WITH BRAINWAVE"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
