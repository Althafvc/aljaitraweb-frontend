import React from "react";
import banner from '../assets/images/banner.jpg'

import FirstNav from "../Components/FirstNav";
import SecondNav from "../Components/SecondNav";
function HomePage() {
  return (
    <div className="wrapper w-full h-auto">
      {/* Navbar section */}
      <FirstNav />
      <SecondNav/>

      {/* Banner Section  */}
      <section className="w-full h-[400px]">
        <img src={banner} className="w-full h-full object-cover"/>

      </section>


     
     
    </div>  
  );
}

export default HomePage;
