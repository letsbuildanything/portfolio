import { About, Contact,  Hero, Navbar, Tech, Works } from "@/components";
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
      
      <div><About /></div>
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact />
      </div>
    </div>
  );
}

export default App;