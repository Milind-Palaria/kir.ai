import classes from "../styles/Home.module.css";
import { Unica_One, Bebas_Neue, Raleway } from "next/font/google";
import { useState, useContext, useEffect } from "react";
import CarouselPage from "./Carousel";
// import { addClass } from "../context/context";
// import addClass from "../pages/context/context";
import { addClass } from "@/contexts/context";
// import { useEffect } from "react";
const fontUnic = Unica_One({
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false, weight: '400'
});
const fontBebus = Bebas_Neue({
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false, weight: '400'
});
const fontRalewa = Raleway({
  subsets: ["latin"],
  display: 'swap', 
  adjustFontFallback: false, weight: '400'
});

function HomeGradient({
  YachtProps,
  EstateProps,
  AircraftProps,
  HomeProps,
  BikeProps,
  CarProps,
  AmphibiousProps,
  SubmarineProps,
  ATVProps,
  RVProps,
  IotProps,
  YachtPropsFunction,
  EstatePropsFunction,
  AircraftsPropsFunction,
  HomePropsFunction,
  BikePropsFunction,
  CarPropsFunction,
  AmphibiousPropsFunction,
  SubmarinePropsFunction,
  ATVPropsFunction,
  RVPropsFunction,
  IotPropsFunction
}) {
  const [yacht, changeYacht] = useState(false);
  const [estate, changeEstate] = useState(false);
  const [aircrafts, changeAircrafts] = useState(false);
  const [home, changeHome] = useState(true);
  const [bike, changeBike] = useState(false);
  const [car, changeCar] = useState(false);
  const [amphibious, changeAmphibious] = useState(false);
  const [submarine, changeSubmarines] = useState(false);
  const [atv, changeATVs] = useState(false);
  const [rv, changeRVs] = useState(false);
  const [iot, changeIot] = useState(false);

  const scroller = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9,
      behavior: 'smooth',
    });
  }
  const scrollAndChangeEstate = () => {
    if (!estate) {
      scroller();
      estateChangeHandler();
      classAdd.setplotclassAdder(false);
    } else {
      estateChangeHandler();
      classAdd.setplotclassAdder(false);
    }
  };
  const scrollAndChangeBike = () => {
    if (!bike) {
      scroller();
      bikeChangeHandler();
      classAdd.setbikeclassAdder(false);
    }
    else {
      bikeChangeHandler();
      classAdd.setbikeclassAdder(false);

    }
  };
  const scrollAndChangeCar = () => {
    if (!car) {

      scroller();
      carChangeHandler();
      classAdd.setcarclassAdder(false);

    }
    else {
      carChangeHandler();
      classAdd.setcarclassAdder(false);


    }
  };
  const scrollAndChangeIot = () => {
    if (!iot) {
      scroller();
      iotChangeHandler();
      classAdd.setiotclassAdder(false);
    }
    else {
      iotChangeHandler();
      classAdd.setiotclassAdder(false);
    }
  };

  const homeChangeHandler = () => {
    if (HomeProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      YachtPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(true);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      IotPropsFunction(false);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(true);
      BikePropsFunction(false);
      CarPropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const yachtChangeHandler = () => {
    if (YachtProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      YachtPropsFunction(false);
    } else {
      changeYacht(true);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      IotPropsFunction(false);
      YachtPropsFunction(true);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const estateChangeHandler = () => {
    if (EstateProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      EstatePropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(true);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      IotPropsFunction(false);
      EstatePropsFunction(true);
      YachtPropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const aircraftChangeHandler = () => {
    if (AircraftProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      AircraftsPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(true);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      IotPropsFunction(false);
      AircraftsPropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const bikeChangeHandler = () => {
    if (BikeProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      BikePropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(true);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      IotPropsFunction(false);
      BikePropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      CarPropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const carChangeHandler = () => {
    if (CarProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      CarPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(true);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      IotPropsFunction(false);
      CarPropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const amphibiousChangeHandler = () => {
    if (AmphibiousProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      AmphibiousPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(true);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      IotPropsFunction(false);
      AmphibiousPropsFunction(true);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      CarPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const submarineChangeHandler = () => {
    if (SubmarineProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      SubmarinePropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(true);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      IotPropsFunction(false);
      CarPropsFunction(false);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(true);
      ATVPropsFunction(false);
      RVPropsFunction(false);
    }
  };
  const atvChangeHandler = () => {
    if (ATVProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      ATVPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(true);
      changeRVs(false);
      changeIot(false);
      IotPropsFunction(false);
      CarPropsFunction(false);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(true);
      RVPropsFunction(false);
    }
  };
  const rvChangeHandler = () => {
    if (RVProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      RVPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(true);
      changeIot(false);
      IotPropsFunction(false);
      CarPropsFunction(false);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(true);
    }
  };
  const iotChangeHandler = () => {
    if (IotProps) {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(false);
      IotPropsFunction(false);
    } else {
      changeYacht(false);
      changeEstate(false);
      changeAircrafts(false);
      changeHome(false);
      changeBike(false);
      changeCar(false);
      changeAmphibious(false);
      changeSubmarines(false);
      changeATVs(false);
      changeRVs(false);
      changeIot(true);
      CarPropsFunction(false);
      YachtPropsFunction(false);
      EstatePropsFunction(false);
      AircraftsPropsFunction(false);
      HomePropsFunction(false);
      BikePropsFunction(false);
      AmphibiousPropsFunction(false);
      SubmarinePropsFunction(false);
      ATVPropsFunction(false);
      RVPropsFunction(false);
      IotPropsFunction(true);

    }
  };

  const homeCarouselImages = [
    {
      name: "Home Carousel Image 1",
      image: "/c1.jpg",
    },
    {
      name: "Home Carousel Image 7",
      image: "/c4.jpg",
    },
    {
      name: "Home Carousel Image 2",
      image: "/in_estate.jpg",
    },
    {
      name: "Home Carousel Image 4",
      image: "/c6.jpg",
    },
    {
      name: "Home Carousel Image 7",
      image: "/c5.jpg",
    },
    {
      name: "Home Carousel Image 3",
      image: "/in_estate_3.jpg",
    },
    {
      name: "Home Carousel Image 7",
      image: "/c2.jpg",
    },
    {
      name: "Home Carousel Image 5",
      image: "/real_estate_2.jpg",
    },
    {
      name: "Home Carousel Image 6",
      image: "/c3.jpg",
    },


  ];
  const classAdd = useContext(addClass);
  useEffect(() => {
    if (classAdd.bikeclassAdder) {
      scrollAndChangeBike();
      // console.log(classAdd.bikeclassAdder);

    }
    else if (classAdd.carclassAdder) {
      scrollAndChangeCar();
      // console.log(classAdd.carclassAdder);

    }
    else if (classAdd.plotclassAdder) {
      scrollAndChangeEstate();
      // console.log(classAdd.plotclassAdder);

    }
    else if (classAdd.iotclassAdder) {
      scrollAndChangeIot();
      // console.log(classAdd.iotclassAdder);
    }

  }, [classAdd.bikeclassAdder, classAdd.carclassAdder, classAdd.plotclassAdder, classAdd.iotclassAdder]);

  return (
    <>
      <CarouselPage CarouselImages={homeCarouselImages} />
      <div className={classes.overlay_main_title}>
        <h1 className={fontBebus.className}>KIR.AI</h1>
        <div className={classes.carousel_search}>
          <input type="text" className={fontUnic.className} placeholder="search for products..." />
          <button type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className={`${classes.line_span} ${fontUnic.className}`}>
          <span>ONE SEARCH</span>
          <span> • </span>
          <span>200,000+ LISTINGS</span>
          <span> • </span>
          <span>7,000+ TRUSTED SELLERS</span>
          {/* <span> • </span>
          <span>120 COUNTRIES</span> */}
        </div>
        <div className={classes.carousel_icon_div}>
          {/* <div
            className={
              yacht
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={yachtChangeHandler}
          >
            <span className="material-symbols-outlined">directions_boat</span>
          </div> */}

          {/* <div
            className={
              aircrafts
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={aircraftChangeHandler}
          >
            <span className="material-symbols-outlined">helicopter</span>
          </div> */}

          <div
            className={
              bike
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={scrollAndChangeBike}
          >
            <span className="material-symbols-outlined">two_wheeler</span>
          </div>
          <div
            className={
              car
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={scrollAndChangeCar}
          >
            <span className="material-symbols-outlined">directions_car</span>
          </div>
          <div
            className={
              home
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={homeChangeHandler}

          >
            <span className="material-symbols-outlined">Home</span>
          </div>

          <div
            className={
              iot
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={scrollAndChangeIot}
          >
            <span className="material-symbols-outlined">home_iot_device</span>
          </div>
          <div
            className={
              estate
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
            onClick={scrollAndChangeEstate}
          >
            <span className="material-symbols-outlined">villa</span>
          </div>
          {/* <Link
            href="/components/ProductsList/amphibious"
            className={
              amphibious
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
          >
            <span className="material-symbols-outlined">local_car_wash</span>
          </Link> */}
          {/* <Link
            href="/components/ProductsList/submarines"
            className={
              submarine
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
          >
            <span className="material-symbols-outlined">directions_boat</span>
          </Link>
          <Link
            href="/components/ProductsList/atv"
            className={
              atv
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
          >
            <span className="material-symbols-outlined">snowmobile</span>
          </Link> */}
          {/* <Link
            href="/components/ProductsList/rv"
            className={
              rv
                ? `${classes.carousel_icons} ${classes.selected}`
                : `${classes.carousel_icons}`
            }
          >
            <span className="material-symbols-outlined">airport_shuttle</span>
          </Link> */}
        </div>
      </div>
    </>
  );
}

export default HomeGradient;