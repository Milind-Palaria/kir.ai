import Link from "next/link";
import classes from "./ProductPage2.module.css";
import Navbar1 from "../components/navbar";
import Image from "next/image";
import Navbar2 from "../components/navbar2";

export default function ProductPage2() {
  return (
    <div>
      <Navbar2 />
      <div className={classes.first}>
        <h1>product name</h1>
        <h3>~ seller name</h3>
        <div>
          <div className={classes.big_image_div}>
            <div className={classes.share_and_like}>
              <Image
                className={classes.icons}
                src="/share_4.png"
                width={30}
                height={30}
              />
              <Image
                className={classes.icons}
                src="/heart3.png"
                width={35}
                height={35}
              />
            </div>
            <Image
              className={classes.big_image}
              src="/yachtcarousel4.jpg"
              width={1920}
              height={1080}
            />
            <div className={classes.overlay_big}></div>
            <div className={classes.small_image_div}>
              <Image
                className={classes.small_image}
                src="/yachtcarousel1.jpg"
                width={1920}
                height={1080}
              />
              <Image
                className={classes.small_image}
                src="/yachtcarousel3.jpg"
                width={1920}
                height={1080}
              />
              <Image
                className={classes.small_image}
                src="/yachtcarousel7.jpg"
                width={1920}
                height={1080}
              />
              <Image
                className={classes.small_image}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
              <div className={classes.more_div}>
                <h3>more photos</h3>
              </div>
            </div>
          </div>
          <div className={classes.price_and_others}>
            <h1>
              <span>$</span>500,000,000
            </h1>
            <div className={classes.currencies}>
              <p>usd</p>
              <p>inr</p>
              <p>eur</p>
            </div>
            <button>buy now</button>
            <button>add to cart</button>
            <h3>add to wishlist</h3>
            <div className={classes.icons2_div}>
              <div>
                <Image
                  className={classes.icons2}
                  src="/location-svgrepo-com.svg"
                  width={50}
                  height={50}
                />
                <p>visit</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/call-phone-heart-svgrepo-com.svg"
                  width={50}
                  height={50}
                />
                <p>call</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/chat-svgrepo-com.svg"
                  width={50}
                  height={50}
                />
                <p>chat</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/live-svgrepo-com.svg"
                  width={50}
                  height={50}
                />
                <p>live view</p>
              </div>
              <div>
                <Image
                  className={classes.icons2}
                  src="/meeting-of-a-couple-of-men-svgrepo-com.svg"
                  width={50}
                  height={50}
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
            src="/yachtcarousel4.jpg"
            width={1920}
            height={1080}
          />
          <div className={classes.agent_card_overlay}></div>
          <div className={classes.agent_profile}>
            <Image
              className={classes.agent_card_profile}
              src="/yachtcarousel4.jpg"
              width={500}
              height={500}
            />
            <Image
              className={classes.agent_card_membership}
              src="/diamond_1.png"
              width={80}
              height={80}
            />
          </div>
          <div className={classes.agent_detail}>
            <div className={classes.agent_name_and_functions}>
              <h1>Agent Name</h1>
              <div className={classes.agent_functions}>
                <div>
                  <Image
                    className={classes.icons2}
                    src="/call-phone-heart-svgrepo-com.svg"
                    width={50}
                    height={50}
                  />
                  <p>call</p>
                </div>
                <div>
                  <Image
                    className={classes.icons2}
                    src="/chat-svgrepo-com.svg"
                    width={50}
                    height={50}
                  />
                  <p>chat</p>
                </div>
                <div>
                  <Image
                    className={classes.icons2}
                    src="/meeting-of-a-couple-of-men-svgrepo-com.svg"
                    width={50}
                    height={50}
                  />
                  <p>meet</p>
                </div>
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
