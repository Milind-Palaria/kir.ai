import React, { useEffect } from "react";
import CarouselPage from "../../components/Carousel";
import ProductCard from "../../components/ProductCards";
import classes from "../../styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button";

import { Unica_One, Quicksand, Bebas_Neue, Raleway } from "next/font/google";
import motorYachts from "@/CategoryData/motorYachts";
import sailBoats from "@/CategoryData/sailBoats";
import jets from "@/CategoryData/jets";
import solarYachts from "@/CategoryData/solarYachts";
import tenderYachts from "@/CategoryData/tenderYachts";
import yachtCarousel from "@/CarouselImageData/yachtCarousel";
import estateCarousel from "@/CarouselImageData/estateCarousel";
import jetCarousel from "@/CarouselImageData/jetCarousel";
import bikeCarousel from "@/CarouselImageData/bikeCarousel";
import carCarousel from "@/CarouselImageData/carCarousel";
import submarineCarousel from "@/CarouselImageData/submarineCarousel";
import atvCarousel from "@/CarouselImageData/atvCarousel";
import rvCarousel from "@/CarouselImageData/rvCarousel";
import amphibiousCarousel from "@/CarouselImageData/amphibiousCarousel";
import Filter from "../../components/Filter/filter";
import Topfilter from "../../components/Filter/topfilter";
import Sidenav from "../../components/sidenav";
import Navbar1 from "../../components/navbar";
import Navbar2 from "../../components/navbar2";
import RelatedtagsEstate from "../../Check/Relatedtags/relatedtagsestate";
import RelatedtagsYachts from "@/Check/Relatedtags/relatedtagsyachts";
import RelatedMotorcycle from "@/Check/Relatedtags/relatedMotorcycle";
import RelatedtagsCars from "@/Check/Relatedtags/relatedCars";
import iotCarousel from "@/CarouselImageData/iotCarousel";
import MainNav from "@/components/MainNav";
import Head from "next/head";
const fontBebas = Bebas_Neue({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false, weight: '400'
});
const fontUnica = Unica_One({
  subsets: ["latin"],
  display: 'swap',
  adjustFontFallback: false, weight: '400'
});

export default function ProductsList() {

  const [showFilter, setShowFilter] = useState(false);
  const [gridOrList, setGridOrList] = useState(false)


  // sample tags 

  const router = useRouter();
  const categoryDetail = router.query.categoryId;
  // console.log(categoryDetail);
  const [subcategory, setSubcategory] = useState([]);
  const [faviURL, setfaviURL] = useState("/favicons/favicon.png");
  const [carouselImages, setCarouselImages] = useState("");
  useEffect(() => {
    if (categoryDetail === "amphibious") {
      setCarouselImages("amphibiousCarousel");
    } else if (
      categoryDetail === "motor yachts" ||
      categoryDetail === "sail boats" ||
      categoryDetail === "solar yachts" ||
      categoryDetail === "tenders"
    ) {
      setCarouselImages("yachtCarousel");
    } else if (
      categoryDetail === "villas" ||
      categoryDetail === "private islands" ||
      categoryDetail === "castle" ||
      categoryDetail === "land" ||
      categoryDetail === "beachside properties" ||
      categoryDetail === "Office Spaces" ||
      categoryDetail === "Apartments" ||
      categoryDetail === "Houses" ||
      categoryDetail === "Studio Spaces"
    ) {
      setCarouselImages("estateCarousel");
    } else if (
      categoryDetail === "jets" ||
      categoryDetail === "helicopters" ||
      categoryDetail === "hovercars" ||
      categoryDetail === "vtols"
    ) {
      setCarouselImages("jetCarousel");
    } else if (
      categoryDetail === "Super Bikes" ||
      categoryDetail === "Naked Bikes" ||
      categoryDetail === "Electric Bikes" ||
      categoryDetail === "Cruiser Bikes" ||
      categoryDetail === "touring & adventure" ||
      categoryDetail === "dual sport" ||
      categoryDetail === "EV Mopads" ||
      categoryDetail === "Classic Bikes"
    ) {
      setCarouselImages("bikeCarousel");
    } else if (
      categoryDetail === "coupe" ||
      categoryDetail === "hyper cars" ||
      categoryDetail === "super cars" ||
      categoryDetail === "Vintage Cars" ||
      categoryDetail === "Sedan Cars" ||
      categoryDetail === "SUV Cars" ||
      categoryDetail === "HatchBacks" ||
      categoryDetail === "convertible" ||
      categoryDetail === "EV Cars" ||
      categoryDetail === "Luxury Cars"
    ) {
      setCarouselImages("carCarousel");
    }
    else if (
      categoryDetail === "Microwave Ovens" ||
      categoryDetail === "Air Conditioning" ||
      categoryDetail === "Washing Machines" ||
      categoryDetail === "Fridges" ||
      categoryDetail === "Gaming Consoles" ||
      categoryDetail === "Televisions"
    ) {
      setCarouselImages("iotCarousel");
    }
    else if (categoryDetail === "submarines") {
      setCarouselImages("submarineCarousel");
    } else if (categoryDetail === "atv") {
      setCarouselImages("atvCarousel");
    } else if (categoryDetail === "rv") {
      setCarouselImages("rvCarousel");
    }
  });
  useEffect(() => {
    if (categoryDetail === "jets") {
      setSubcategory(jets);
    } else if (categoryDetail === "motor yachts") {
      setSubcategory(motorYachts);
    } else if (categoryDetail === "tenders") {
      setSubcategory(tenderYachts);
    } else if (categoryDetail === "solar yachts") {
      setSubcategory(solarYachts);
    } else if (categoryDetail === "sail boats") {
      setSubcategory(sailBoats);
    }
  });
  // useEffect(() => {
  //   if () {
  //     setfaviURL("/favicons/car.png")
  //   }
  //   else if (carouselImages === "bikeCarousel") {
  //     setfaviURL("/favicons/bike.png")
  //   }
  //   else if (carouselImages === "iotCarousel") {
  //     setfaviURL("/favicons/iot.png")
  //   }
  //   else {
  //     setfaviURL("/favicons/villa.png")
  //   }

  // }, []);




  let mainCarousel = [...carouselImages];
  const [yacht, changeYacht] = useState(false);
  return (
    <div>
      <Head>
        <title>{` Kir.ai - ${categoryDetail}`}</title>
        {
          carouselImages === "carCarousel" ? <link rel="icon" href="/favicons/car.png" /> : carouselImages === "bikeCarousel" ? <link rel="icon" href="/favicons/bike2.png" /> : carouselImages === "iotCarousel" ? <link rel="icon" href="/favicons/iot.png" /> : <link rel="icon" href="/favicons/estate.png" />
        }

      </Head>

      {/* <div className="nav2productlist">
      <Navbar2/>
      </div> */}
      {/* <MainNav /> */}
      <div>

        <div>
          <div>
            {carouselImages === "yachtCarousel" ? (
              <CarouselPage CarouselImages={yachtCarousel} />
            ) : carouselImages === "estateCarousel" ? (
              <><CarouselPage CarouselImages={estateCarousel} /></>
            ) : carouselImages === "jetCarousel" ? (
              <CarouselPage CarouselImages={jetCarousel} />
            ) : carouselImages === "bikeCarousel" ? (
              <><CarouselPage CarouselImages={bikeCarousel} /></>
            ) : carouselImages === "carCarousel" ? (
              <><CarouselPage CarouselImages={carCarousel} /></>
            ) : carouselImages === "iotCarousel" ? (
              <><CarouselPage CarouselImages={iotCarousel} /></>
            ) : carouselImages === "amphibiousCarousel" ? (
              <CarouselPage CarouselImages={amphibiousCarousel} />
            ) : carouselImages === "submarineCarousel" ? (
              <CarouselPage CarouselImages={submarineCarousel} />
            ) : carouselImages === "atvCarousel" ? (
              <CarouselPage CarouselImages={atvCarousel} />
            ) : (
              <CarouselPage CarouselImages={rvCarousel} />
            )}
          </div>
          <div>
            <div className="flex flex-col absolute left-[10vw] top-[280px] w-[80%] text-neutral-50 text-opacity-80 max-sm:top-[35vh] max-sm:!w-full max-sm:!left-0">
              <h1 style={{ fontSize: "10rem", letterSpacing: "4px" }} className={`m-auto relative ${fontBebas.className} text-center max-sm:!text-[23vw] max-sm:leading-[1] !break-words`}>{categoryDetail}</h1>
              <div className={`${classes.carousel_search} max-sm:!w-full !w-full`}>
                <div>
                  <input style={{ width: "33vw" }}
                    type="text"
                    placeholder={`search for ${categoryDetail}...`}
                    className={` ${fontUnica.className} max-sm:!text-[3vw] max-sm:!w-[50vw] `}
                  />
                </div>
                <div>
                  <button className="relative" type="submit">
                    <span className="material-symbols-outlined max-sm:!text-[3vw]">search</span>
                  </button>
                </div>
              </div>

              {/* <div className={`   ${classes.carousel_icon_div}`}>
                {subcategory.map((data) => (
                  <div className={classes.subcategory_div}>
                    <div
                      className={
                        yacht
                          ? `${classes.carousel_icons} ${classes.selected}`
                          : `${classes.carousel_icons}`
                      }
                    // onClick={yachtChangeHandler}
                    >
                      <span className="material-symbols-outlined">{data.icon}</span>
                    </div>
                    <h1
                      className={`${classes.subcategory_name} ${fontUnica.className}`}
                    >
                      {data.name}
                    </h1>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          {/* <Topfilter show={showFilter} showFunc={setShowFilter} gridOrList={gridOrList} setGridOrList={setGridOrList} /> */}
          {
            carouselImages === "bikeCarousel" ? (<div className="bg-[#101010] py-11">
              <ProductCard products={bikeCarousel} view={true} /> </div>) : carouselImages === "carCarousel" ? (<div className="bg-[#101010] py-11">
                <ProductCard products={carCarousel} view={true} /> </div>) : carouselImages === "iotCarousel" ? (<div className="bg-[#101010] py-11">
                  <ProductCard products={iotCarousel} view={true} /> </div>) : (<div className="bg-[#101010] py-11">
                    <ProductCard products={estateCarousel} view={true} /> </div>)
          }


        </div>

      </div>
    </div>
  );
}
