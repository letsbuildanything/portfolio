import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "@/components";
import Image from "next/image";

const App = () => {

  // console.log(bgImage)
  return (
    <div className="relative z-0 bg-primary" >

      <div className='relative'>
        <Image src='/../public/assets/herobg.png' fill={true} style = {{ objectFit:'cover' }} alt='hero-backround-image' />
        <Navbar />
        <Hero />        
      </div>
      
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;