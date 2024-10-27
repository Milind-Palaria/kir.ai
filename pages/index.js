import Navbar1 from "../components/navbar";
import MidSection from "../components/midSection";
import Corousel from "../components/Carousel";
import ProgressBar from "react-progressbar-on-scroll";
import Footer from "../components/footer";
import HomeGradient from "../components/HomeGradient";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase";
// import { emailContext } from "./context/context";
import HomeBeforelogin from "../components/HomeBeforelogin";
import { useTheme } from "styled-components";
import UserProfile from "../components/UserProfile";
import AlanContainer from "../components/AlanContainer";
import { createConnection } from "net";
import { createContext } from "vm";
// import addClass from "./context/context";
import { addClass } from "@/contexts/context";
import MainNav from "@/components/MainNav";
import { MainFooter } from "@/components/MainFooter";

export default function Home() {
  const [yachts, setYachts] = useState(false);
  const [estates, setEstates] = useState(false);
  const [aircrafts, setAircrafts] = useState(false);
  const [home, setHome] = useState(true);
  const [bikes, setBikes] = useState(false);
  const [cars, setCars] = useState(false);
  const [amphibious, setAmphibious] = useState(false);
  const [submarine, setSubmarines] = useState(false);
  const [atv, setATVs] = useState(false);
  const [rv, setRVs] = useState(false);
  const [iot, setIot] = useState(false);

  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [isUser, setisUser] = useState(false);
  const [toShow, SettoShow] = useState(false);
  const [emailbyvoice, setEmailbyvoice] = useState("hello");


  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(auth.currentUser.displayName);
        setUserEmail(auth.currentUser.email);
        setisUser(true);
        // setbtnDisable(true);
        // console.log(auth.currentUser.displayName);
      } else {
        setisUser(false);
        // console.log("User Not Found");
      }
    });
  }, [isUser]);
  const [bikeclassAdder, setbikeclassAdder] = useState(false);
  const [carclassAdder, setcarclassAdder] = useState(false);

  const [plotclassAdder, setplotclassAdder] = useState(false);

  const [iotclassAdder, setiotclassAdder] = useState(false);

  // const [outline, setOutline] = useState(false);
  // const scroller = () => {
  //   window.scrollTo({
  //     top: 700,
  //     behavior: "smooth",
  //   });
  // };
  const topscroller = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // useEffect(() => {
  //   if (outline) {
  //     scroller();
  //   }
  //   else {
  //     topscroller();
  //   }
  // }, [outline]);
  return (
    // <>
    // {!isUser?
    // <HomeBeforelogin/>:

    // }
    // </><>
    <>
      <addClass.Provider value={{
        bikeclassAdder,
        setbikeclassAdder,
        carclassAdder,
        setcarclassAdder,
        plotclassAdder,
        setplotclassAdder,
        iotclassAdder,
        setiotclassAdder,
      }}
      >
        {/* <emailContext.Provider value={{emailbyvoice,setEmailbyvoice}}>  */}
        {/* <div className="nav1">
          <Navbar1 isShow={toShow} setToshow={SettoShow} />
          {toShow && <UserProfile Name={userName} Email={userEmail} />}
        </div> */}
        {/* <MainNav/> */}
        {/* <AlanContainer /> */}

        <div className="cor1">
          <HomeGradient
            YachtProps={yachts}
            EstateProps={estates}
            AircraftProps={aircrafts}
            HomeProps={home}
            BikeProps={bikes}
            CarProps={cars}
            AmphibiousProps={amphibious}
            SubmarineProps={submarine}
            ATVProps={atv}
            RVProps={rv}
            IotProps={iot}
            YachtPropsFunction={setYachts}
            EstatePropsFunction={setEstates}
            AircraftsPropsFunction={setAircrafts}
            HomePropsFunction={setHome}
            BikePropsFunction={setBikes}
            CarPropsFunction={setCars}
            AmphibiousPropsFunction={setAmphibious}
            SubmarinePropsFunction={setSubmarines}
            ATVPropsFunction={setATVs}
            RVPropsFunction={setRVs}
            IotPropsFunction={setIot}
          />
        </div>
        <MidSection
          YachtProps={yachts}
          EstateProps={estates}
          AircraftProps={aircrafts}
          HomeProps={home}
          BikeProps={bikes}
          CarProps={cars}
          AmphibiousProps={amphibious}
          SubmarineProps={submarine}
          ATVProps={atv}
          RVProps={rv}
          IotProps={iot}
        />
        {/* <Footer /> */}
        {/* <MainFooter/> */}
        {/* <ProgressBar color="#4dffb5" height={10} position="bottom" /> */}
        {/* </emailContext.Provider>  */}
      </addClass.Provider>
    </>
  );
}
  