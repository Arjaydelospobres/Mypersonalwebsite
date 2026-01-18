import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { banner } from "../assets";
import { useEffect, useState } from "react";


export const mediaQuery = window.matchMedia("(min-width: 750px)");
 export const handleChanges = (setValue) => {
   if (mediaQuery.matches) {
    setValue(false);
     console.log("a");
     //  setIsMobile(false);
   } else {
    setValue(true);
     console.log("b");
     //  setIsMobile(true);
   }
 };

const Hero = () => {
const [isMobile, setIsMobile] = useState(mediaQuery.matches ? false : true);

 useEffect(() => {
   handleChanges(setIsMobile);

   const handleChangeWithSet = () => handleChanges(setIsMobile);
   mediaQuery.addEventListener("change", handleChangeWithSet);
    return () => {
      mediaQuery.removeEventListener("change", handleChanges);
    };
 }, []);


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Arjay Delos Pobres</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack Web and App Developer{" "}
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>
      {!isMobile ? (
        <ComputersCanvas />
      ) : (
        <img
          src={banner}
          alt="mobile"
          className="absolute  bottom-10 px-10 flex justify-center items-center h-1/3 w-full"
        />
      )}
    </section>
  );
};

export default Hero;
