import React from 'react'
// import classes from "../styles/MainNav.module.css"
import classes from "../styles/responsive.module.css";

import { useContext, useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase/firebase";
import { Bebas_Neue, Unica_One } from "next/font/google";


const player = Bebas_Neue({
    subsets: ["latin"],
    display: 'swap',
    adjustFontFallback: false, weight: '400'
});
const unica = Unica_One({
    subsets: ["latin"],
    display: 'swap', 
    adjustFontFallback: false, weight: '400'
  });
const MainNav = (props) => {
    const [userName, setUserName] = useState("");
    const [show, setShow] = useState(false);
    const [isUser, setisUser] = useState(true);
    const [color, setColor] = useState(false);

    const auth = getAuth(app);

    const [nav2, setNav2] = useState(false);
    const [searchbar, setSearchbar] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const handleChange = () => {
        if (window.scrollY >= 50) {
            setColor(true);
        } else {
            setColor(false);
        }
        if (window.scrollY >= 400) {
            setNav2(false);
            setSearchbar(false);
        } else {
            setNav2(true);
            setSearchbar(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleChange);
    }, []);

    const router = useRouter();

    const signInClick = () => {
        router.push("/login");
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserName(auth.currentUser.displayName);
                setisUser(false);
                setbtnDisable(true);
                console.log(auth.currentUser.displayName);
            } else {
                console.log("User Not Found");
            }
        });
    }, []);

    const sign_Out = () => {
        signOut(auth)
            .then(() => {
                toast.success("Signed Out Successfully ", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                // setisUser(true);
            })
            .catch((error) => {
                toast.error("Some Error Occured ", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    };

    return (
        <div className='w-screen z-[200] fixed'>
            <Navbar
                className={color ? "navbar black-nav" : "navbar transparent-nav"}
            >
                <Container fluid className='nav-container'>
                    <div className="left-nav">
                        <Button
                            variant="primary"
                            onClick={handleShow}
                            className="me-2 nav-btn"
                        >
                            <svg
                                className="-ml-0 scale-125 "
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="white"
                                //class="bi bi-list"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                        </Button>
                        <h1
                            style={{ fontSize: "1.5rem", fontWeight: "bold", letterSpacing: "2px",cursor:"pointer" }}
                            className={player.className} onClick={() => {
                                router.push("/");
                            }}
                        >
                            KIR.AI
                        </h1>
                        {/* <h3>{data.emailbyvoice}</h3> */}
                    </div>

                    {/* <div
                        className={
                            searchbar ? "hidden fadeout" : "flex justify-end fadein"
                        }
                    >
                        <div className={`${classes.smallnav} carousel-search`}>
                            <input
                                style={{ maxWidth: "500px", minWidth: "400px" }}
                                type="text"
                                className={player.className}
                            />
                            <button type="submit">
                                <span
                                    style={{
                                        padding: "9px",
                                        position: "relative",
                                        marginLeft: "-60px",
                                    }}
                                    className="material-symbols-outlined "
                                >
                                    search
                                </span>
                            </button>
                        </div>
                    </div> */}
                    <div className={`${classes.small} all-nav-btns`}>
                        <Button className="me-2 nav-btn">
                            <span className={`${unica.className} nav-btns`}>
                                Just For You
                            </span>
                        </Button>
                        <Button className="me-2 nav-btn">
                            <span className={`${unica.className} nav-btns`} onClick={
                                () => {
                                    // {data.setEmailbyvoice("Asyush")}
                                }
                            } >List With Us</span>
                        </Button>
                        <Button
                            className="me-2 nav-btn login-name-button translate-y-[1.5px]"
                        // disabled={btnDisable}
                        >
                            {isUser ? (
                                <span
                                    id="signin"
                                    onClick={() => {
                                        router.push("/login");
                                    }}
                                    className={`${unica.className} nav-btns`}
                                >
                                    Login
                                </span>
                            ) : (
                                <span>
                                    <Dropdown className="mt-3.5">
                                        <Dropdown.Toggle
                                            variant="transparent"
                                            id="dropdown-basic"
                                        >
                                            <p className="inline-flex  text-neutral-50">
                                                <span className="material-symbols-outlined py-3">
                                                    person
                                                </span>
                                                <span className="py-3">{userName}</span>
                                            </p>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="hover:bg-slate-100">
                                            <Dropdown.Item
                                                className="focus:bg-slate-100"
                                                href="#/action-1"
                                                onMouseEnter={ShowDetails}
                                                onMouseLeave={HideDetails}
                                            >
                                                Account Details
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                className={`${unica.className} focus:bg-slate-100`}
                                                //href="#/action-2"
                                                onClick={sign_Out}


                                            >
                                                Sign Out
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span>
                            )}
                        </Button>
                    </div>
                        <Button
                            className="me-2 nav-btn login-name-button-2"
                        // disabled={btnDisable}
                        >
                            {isUser ? (
                                <span
                                    id="signin"
                                    onClick={() => {
                                        router.push("/login");
                                    }}
                                    className={`${unica.className} nav-btns`}
                                >
                                    Login
                                </span>
                            ) : (
                                <span>
                                    <Dropdown className="mt-3.5">
                                        <Dropdown.Toggle
                                            variant="transparent"
                                            id="dropdown-basic"
                                        >
                                            <p className="inline-flex  text-neutral-50">
                                                <span className="material-symbols-outlined py-3">
                                                    person
                                                </span>
                                                <span className="py-3">{userName}</span>
                                            </p>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className="hover:bg-slate-100">
                                            <Dropdown.Item
                                                className={`${unica.className} focus:bg-slate-100`}
                                                href="#/action-1"
                                                onMouseEnter={ShowDetails}
                                                onMouseLeave={HideDetails}
                                            >
                                                Account Details
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                className="focus:bg-slate-100"
                                                //href="#/action-2"
                                                onClick={sign_Out}


                                            >
                                                Sign Out
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </span>
                            )}
                        </Button>
                    <div className=" z-[1000000000000000000] absolute">

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header >
                                <Offcanvas.Title className={player.className} onClick={() => {
                                router.push("/");
                            }}>
                                    KIR.AI
                                </Offcanvas.Title>
                                <Button
                                    variant="primary"
                                    onClick={handleClose}
                                    className="me-2 nav-close-btn"
                                >
                                    <span className="material-symbols-outlined">close</span>
                                </Button>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <hr />
                                <div className={`${unica.className} btn-div`}>
                                    <div>
                                        <span className="material-symbols-outlined">
                                            account_circle
                                        </span>
                                        {isUser ? (
                                            <Button
                                                onClick={signInClick}

                                            >
                                                Sign in / Register
                                            </Button>
                                        ) : (
                                            <p style={{ marginLeft: "3rem", marginTop: "-37px" }}>
                                                {userName}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <span className="material-symbols-outlined">recommend</span>
                                        <Button>About us</Button>
                                    </div>
                                    <div>
                                        <span className="material-symbols-outlined">fact_check</span>
                                        <Button>Best Sellers</Button>
                                    </div>
                                </div>
                                <hr />
                                <div className={`${unica.className} btn-div`}>
                                    {/* <div>
                      <span className="material-symbols-outlined">
                        directions_boat
                      </span>
                      <Button>Yachts</Button>
                    </div> */}

                                    {/* <div>
                      <span className="material-symbols-outlined">helicopter</span>
                      <Button>Helicopters</Button>
                    </div>
                    <div>
                      <span className="material-symbols-outlined">
                        flight_takeoff
                      </span>
                      <Button>Jets</Button>
                    </div>*/}
                                    <div>
                                        <span className="material-symbols-outlined">two_wheeler</span>
                                        <Button>Bikes</Button>
                                    </div>
                                    <div>
                                        <span className="material-symbols-outlined">
                                            directions_car
                                        </span>
                                        <Button>Cars</Button>
                                    </div>
                                    <div>
                                        <span className="material-symbols-outlined">Home</span>
                                        <Button>Home</Button>
                                    </div>
                                    <div>
                                        <span className="material-symbols-outlined">home_iot_device</span>
                                        <Button>Home Appliances</Button>
                                    </div>
                                    <div>
                                        <span className="material-symbols-outlined">villa</span>
                                        <Button>Real Estates</Button>
                                    </div>
                                </div>
                                <hr />
                                <div className={`${unica.className} btn-div-2`}>
                                    {/* <Button onClick={dashboardClick}>Dashboard</Button> */}
                                    <Button>List With Us</Button>
                                    <Button>Help & FAQ</Button>
                                    <Button>About</Button>
                                    <Button>Contact</Button>
                                </div>
                                <hr />
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>

                </Container>
            </Navbar>
        </div>
    )
}

export default MainNav