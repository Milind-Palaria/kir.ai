import { Unica_One, Quicksand, Bebas_Neue } from "next/font/google";
import { addOutline } from "../context/context";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
const player = Unica_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Card() {
  const ouliner = useContext(addOutline);
  const [yess, setYess] = useState(false);
  // const [yess2, setYess2] = useState(false);
  // const [yess3, setYess3] = useState(false);
  // const [yess4, setYess4] = useState(false);
  const router=useRouter();
  const bikepusher=()=>{
      router.push("/components/ProductsList/Classic%20Bikes")
  }
  const iotpusher=()=>{
    router.push("/components/ProductsList/Washing%20Machines")
}
const carpusher=()=>{
  router.push("/components/ProductsList/Sedan%20Cars")
}
const plotpusher=()=>{
  router.push("/components/ProductsList/Office%20Spaces")
}
  const scroller = () => {
    
    window.scrollTo({
      top: 680,
      behavior: 'smooth',
    });
  }
  useEffect(() => {
    // if(ouliner.outline){
    //   scroller();

    // }
      
      setTimeout(()=>{
        setYess(ouliner.outline);
      },2000)
      setTimeout(()=>{

        setYess(false);
        ouliner.setOutline(false);
      },4000)
    
    // setTimeout(() => {
    //   setYess(false);
    // }, 800);

    // console.log("sexxxxxxxxxxxxxxxxxxxxxx");
  }, [ouliner.outline]);
  return (
    <div>
      <div className="card-div">
        <div onClick={plotpusher}
          className={
            yess
              ? `category_cards card_comp_1 outlinerr`
              : `category_cards card_comp_1`
          }
        >
          <div className="category-card-overlay"></div>
          <h1 className={player.className}>Real Estates</h1>
          <span className={player.className}>1000+ Listings</span>
          <p className={player.className}>╰┈➤</p>
        </div>
        <div  onClick={bikepusher} 
          className={
            yess
              ? `category_cards card_comp_2 outlinerr`
              : `category_cards card_comp_2`
          }
        >
          <h1 className={player.className}>Bikes</h1>
          <span className={player.className}>2000+ Listings</span>
          <p className={player.className}>╰┈➤</p>
        </div>
        <div  onClick={carpusher} 
          className={
            yess
              ? `category_cards card_comp_3 outlinerr`
              : `category_cards card_comp_3`
          }
        >
          <h1 className={player.className}>Cars</h1>
          <span className={player.className}>1000+ Listings</span>
          <p className={player.className}>╰┈➤</p>
        </div>
        <div  onClick={iotpusher} 
          className={
            yess
              ? `category_cards card_comp_4 outlinerr`
              : `category_cards card_comp_4`
          }
        >
          <h1 className={player.className}>Appliances</h1>
          <span className={player.className}>10000+ Listings</span>
          <p className={player.className}>╰┈➤</p>
        </div>
      </div>
    </div>
  );
}
