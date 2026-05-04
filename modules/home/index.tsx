import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/home/hero"));
// const Menu = dynamic(() => import("@/components/home/Menu"));
const Features = dynamic(() => import("@/components/home/features"));
const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"));
const Plans = dynamic(() => import("@/components/home/Plans"));
// const FAQ = dynamic(() => import("@/components/home/FAQ"));
const CTA = dynamic(() => import("@/components/home/CTA"));

// const Brands = dynamic(() => import("@/components/home/Brands"));
// const Community = dynamic(() => import("@/components/home/Community"));
// const FindYourPLan = dynamic(() => import("@/components/home/FindYourPLan"));
// const Testimonial = dynamic(() => import("@/components/home/Testimonial"));


function Home() {
  return (
    <div
      className="min-h-screen "
    >
      <Hero /> 
      {/* <Menu/> */}
      <Features/>
      <HowItWorks />
     
      {/* <Testimonial /> */}
      {/* <FindYourPLan />  */}
      <Plans/>
      {/* <FAQ /> */}
      {/* <Community /> */}
       <CTA />
    </div>
  );
}

export default Home;
