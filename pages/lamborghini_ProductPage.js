import Link from "next/link";
import classes from "../components/ProductPage2.module.css";
import Navbar1 from "../components/navbar";
import Image from "next/image";
import Navbar2 from "../components/navbar2";
import { db } from "@/firebase/firebase";
import { collection, addDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/AuthContext";

export default function LamborghiniProductPage({ data }) {
  // const [productName, setProductName] = useState("");
  // const orders = collection(db, "Order_Details");
  // const cartRef = user ? collection(db, 'users', user.uid, 'cart') : null;
  // const date = new Date();
  // const showTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  // const datenow = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const router = useRouter();
  
  const { user } = useAuth();

  const [bigImage, setBigImage] = useState("/carcarousel3.jpg");

  // const addToCart = async () => {
  //   if (user) {
  //     await addDoc(cartRef, {
  //       productId: "lamborghini_aventador",
  //       productName: "Lamborghini Aventador",
  //       productPrice: 19999,
  //       quantity: 1,
  //       Time: showTime,
  //       Date: datenow
  //     });
  //     alert("Added to cart successfully");
  //   } else {
  //     alert('You need to be logged in to add items to your cart');
  //   }
  // };
  const addToCart = async () => {
    if (!user) {
      alert("You need to be logged in to add items to your cart");
      return;
    }

    // setLoading(true);
    const productId = "lamborghini_aventador";
    const productRef = doc(db, 'users', user.uid, 'cart', productId);
    const productSnap = await getDoc(productRef);

    if (productSnap.exists()) {
      await setDoc(productRef, {
        quantity: productSnap.data().quantity + 1
      }, { merge: true });
    } else {
      await setDoc(productRef, {
        productName: "Lamborghini Aventador",
        productOwner: "Milind Palaria",
        productPrice: 19999,
        quantity: 1,
      });
    }

    // setLoading(false);
    // alert("Added to cart successfully");
  };
  const pusher = () => {
    router.push("/components/History");
  };

    // Handler to update the big image when a small image is clicked
    const handleImageClick = (imageUrl) => {
      setBigImage(imageUrl);
    };

  return (
    <div>
      <div className={classes.first}>
        <h1>lamborghini aventador</h1>
        <h3>~ Milind Palaria</h3>
        <div>
          <div className={classes.big_image_div}>
            <Image
              className={classes.big_image}
              src={bigImage}
              width={1920}
              height={1080}
              alt="Main Product"
            />
            <div className={classes.overlay_big}></div>
            <div className={classes.small_image_div}>
              <Image
                className={classes.small_image}
                src="/carcarousel4.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"
                onClick={() => handleImageClick("/carcarousel4.jpg")}
              />
              <Image
                className={classes.small_image}
                src="/carcarousel5.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"
                onClick={() => handleImageClick("/carcarousel5.jpg")}
              />
              <Image
                className={classes.small_image}
                src="/carcarousel7.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"
                onClick={() => handleImageClick("/carcarousel7.jpg")}
              />
              <Image
                className={classes.small_image}
                src="/carcarousel6.jpg"
                width={1920}
                height={1080}
                alt="Small Product Image"
                onClick={() => handleImageClick("/carcarousel6.jpg")}
              />
              <div className={classes.more_div}>
                <h3>more photos</h3>
              </div>
            </div>
          </div>
          <div className={classes.price_and_others}>
            <h1>
              <span>&#8377; </span> 19,999 . 00 /day
            </h1>
            <div className={classes.currencies}>
              <p>inr</p>
              <p>usd</p>
              <p>eur</p>
            </div>
            <button onClick={addToCart}>rent now</button>
            <button onClick={pusher}>View History</button>
            <h3>add to wishlist</h3>
            <div className={classes.icons2_div}>
              <div>
                <Image
                  className={classes.icons2}
                  src="/location-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"
                />
                <p>visit</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/call-phone-heart-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"
                />
                <p>call</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/chat-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"
                />
                <p>chat</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/live-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"
                />
                <p>live view</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/meeting-of-a-couple-of-men-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="small icons"
                />
                <p>meet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.agent_card}>
        <div>
          <Image
            className={classes.agent_card_img}
            src="/carcarousel3.jpg"
            width={1920}
            height={1080}
            alt="Agent Cover"
          />
          <div className={classes.agent_card_overlay}></div>
          <div className={classes.agent_profile}>
            <Image
              className={classes.agent_card_profile}
              src="/carcarousel3.jpg"
              width={500}
              height={500}
              alt="Agent Image"
            />
          </div>
          <div className={classes.agent_detail}>
            <div className={classes.agent_name_and_functions}>
              <h1>Milind Palaria</h1>
              <div className={classes.agent_functions}>
                <div>
                  <Image
                    className={classes.icons2}
                    src="/call-phone-heart-svgrepo-com.svg"
                    width={50}
                    height={50}
                    alt="Contact Image"
                  />
                  <p>call</p>
                </div>
                <div>
                  <Image
                    className={classes.icons2}
                    src="/chat-svgrepo-com.svg"
                    width={50}
                    height={50}
                    alt="Contact Image"
                  />
                  <p>chat</p>
                </div>
                {/* <div>
                  <Image
                    className={classes.icons2}
                    src="/meeting-of-a-couple-of-men-svgrepo-com.svg"
                    width={50}
                    height={50}
                    alt="Contact Image"
                  />
                  <p>meet</p>
                </div> */}
              </div>
            </div>
            <p>Direct owner / broker at sunseeker</p>
            <div>
              <div>
                <span>• </span>
                <span>Location : </span>
                <span>Chennai</span>
              </div>
              <div>
                <span>• </span>
                <span>Listings : </span>
                <span>21</span>
              </div>
              <div>
                <span>• </span>
                <span>Sold : </span>
                <span>5</span>
              </div>
              <div>
                <span>• </span>
                <span>Role : </span>
                <span>Owner</span>
              </div>
              <div>
                <span>• </span>
                <span>Reviews : </span>
                <span>19</span>
              </div>
            </div>
            <div className={classes.company_details}>
              <Image
                className={classes.company_logo}
                src="/company.png"
                width={200}
                height={200}
                alt="Company Logo"
              />
              <div>
                <h2>Company Name</h2>
                <p>direct owner / broker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
