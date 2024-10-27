"use client";

import React, {
  createContext,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
// import alanBtn from '@alan-ai/alan-sdk-web';
import iotChangeHandler from "./HomeGradient";
// import addClass from "../pages/context/context";
import { addClass } from "@/contexts/context";
import { useRouter } from "next/router";

const AlanContainer = ({ yo, setYo }) => {
  const router = useRouter();
  const [email, setEmail] = useState("ashish");
  const rootElRef = useRef(null);
  // const classData = useContext(addClass);
  const classData= useContext(addClass);
  // const outlineData = useContext(addOutline);

  useEffect(() => {
    // console.log(window);
    const alanBtn = require("@alan-ai/alan-sdk-web");
    alanBtn({
      key: "1cdedfed4a33db4bcf480ab8d6e5cfd92e956eca572e1d8b807a3e2338fdd0dc/stage",
      rootEl: document.getElementById("alan-btn"),
      onCommand: (commandData) => {
        if (commandData.command === "navigation") {
          let val = commandData.route;
          // console.log(val);
          if (val === "product") {
            router.push("/components/ProductPage");
          }else if(val==="home"){
            router.push("/");
          } 
          else if (val === "login") {
            router.push("/login");
          } else if (val === "Superbike") {
            router.push(`/components/ProductsList/Super%20Bikes`);
          } else if (val === "naked") {
            router.push(`/components/ProductsList/Naked%20Bikes`);
          } else if (val === "electric") {
            router.push(`/components/ProductsList/Electric%20Bikes`);
          } else if (val === "Cruiser") {
            router.push(`/components/ProductsList/Cruiser%20Bikes`);
          } else if (val === "classic") {
            router.push(`/components/ProductsList/Classic%20Bikes`);
          } else if (val === "moped") {
            router.push(`/components/ProductsList/EV%20Mopads`);
          } else if (val === "vintage cars") {
            router.push(`/components/ProductsList/Vintage%20Cars`);
          } else if (val === "sedan") {
            router.push(`/components/ProductsList/Sedan%20Cars`);
          } else if (val === "SUV") {
            router.push(`/components/ProductsList/SUV%20Cars`);
          } else if (val === "hatchback") {
            router.push("/components/ProductsList/HatchBacks");
          } else if (val === "luxury cars") {
            router.push(`/components/ProductsList/Luxury%20Cars`);
          } else if (val === "EV cars") {
            router.push("/components/ProductsList/EV%20Cars");
          } else if (val === "television") {
            router.push("/components/ProductsList/Televisions");
          } else if (val === "washing machine") {
            router.push(`/components/ProductsList/Washing%20Machines`);
          } else if (val === "game console") {
            router.push(`/components/ProductsList/Gaming%20Consoles`);
          } else if (val === "microwave ovens") {
            router.push(`/components/ProductsList/Microwave%20Ovens`);
          } else if (val === "air conditioner") {
            router.push(`/components/ProductsList/Air%20Conditioning`);
          } else if (val === "refrigerator") {
            router.push("/components/ProductsList/Refrigerators");
          } else if (val === "Villas") {
            router.push("/components/ProductsList/villas");
          } else if (val === "Apartments") {
            router.push("/components/ProductsList/Apartments");
          } else if (val === "office space") {
            router.push(`/components/ProductsList/Office%20Spaces`);
          } else if (val === "house") {
            router.push("/components/ProductsList/Houses");
          } else if (val === "studio") {
            router.push(`/components/ProductsList/Studio%20Spaces`);
          }
        } else if (commandData.command === "filter") {
          let val = commandData.fltr;
          if (val === "blue") {
          } else if (val === "150") {
          }
        } else if (commandData.commmand === "logemail") {
          let fld = commandData.vlu;
        } else if (commandData.command === "name") {
          let fld = commandData.vlu;
        } else if (commandData.command === "locs") {
          let fld = commandData.vlu;
        } else if (commandData.command === "email") {
          let fld = commandData.vlu;
        } else if (commandData.command === "confirm") {
          let fld = commandData.vlu;
        } else if (commandData.command === "avlctg") {
          let dt = commandData.dta;
          if (dt === "bikes") {
            // console.log(classData.setclassAdder)
            // const xxx=false;
            classData.setbikeclassAdder(true);
            // console.log(`bhgg ${classData.classAdder}`);
          } else if (dt === "cars") {
            classData.setcarclassAdder(true);
          } else if (dt === "plot") {
            classData.setplotclassAdder(true);
          } else if (dt === "appliances") {
            classData.setiotclassAdder(true);
          }
        } else if (commandData.command === "highlight") {
          // outlineData.setOutline(true);
         
          let vlu = commandData.vlu;
          if (vlu === "bikes") {
          } else if (vlu === "cars") {
          } else if (vlu === "appliances") {
          } else if (vlu === "real estates") {
          }
        }
      },
    });
  }, []);
  return (
    <div className="alan-btn-container">
      <div ref={rootElRef}></div>
    </div>
  );
};
export default AlanContainer;
