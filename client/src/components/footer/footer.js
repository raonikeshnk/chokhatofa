import React, { useContext, useState } from "react";
import "./footer.css";

import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";
import Icon4 from "../../assets/images/icon-4.svg";
import Icon5 from "../../assets/images/icon-5.svg";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import { Button } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Newsletter from "../../components/newsletter/index";
import NewsletterImg from "../../assets/images/newsletter.png";
import { MyContext } from "../../App";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Footer = () => {

  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const context = useContext(MyContext);

  const openFilter = () => {
    context?.setIsOpenFilters(!context?.isOpenFilters);
  };

  const openSearch = () => {
    setIsOpenSearch(!isOpenSearch);
  };

  return (
    <>
      <section className="newsLetterSection">
        <div className="container-fluid">
          <div className="box d-flex align-items-center">
            <div className="info">
              <h2>
                Stay home & get your daily <br />
                needs from our shop
              </h2>
              <p>Start You'r Daily Shopping with Nest Mart</p>
              <br />
              <Newsletter />
            </div>

            <div className="img">
              <img src={NewsletterImg} className="w-100" />
            </div>
          </div>
        </div>
      </section>

      <div className="footerWrapper">
        <div className="footerBoxes">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon1} />
                  </span>
                  <div className="info">
                    <h4>Best prices & offers</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon2} />
                  </span>
                  <div className="info">
                    <h4>Free delivery</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon3} />
                  </span>
                  <div className="info">
                    <h4>Great daily deal</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon4} />
                  </span>
                  <div className="info">
                    <h4>Wide assortment</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="box d-flex align-items-center w-100">
                  <span>
                    <img src={Icon5} />
                  </span>
                  <div className="info">
                    <h4>Easy returns</h4>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1">
                <Link to="/">
                  <img src={Logo} />
                </Link>
                <br />
                <br />
                <p>Awesome grocery store website template</p>
                <br />

                <p>
                  <LocationOnOutlinedIcon /> <strong>Address</strong>: 5171 W
                  Campbell Ave undefined Kent, Utah 53127 United States
                </p>
                <p>
                  <HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+91) -
                  540-025-124553{" "}
                </p>
                <p>
                  <EmailOutlinedIcon /> <strong>Email:</strong> sale@Nest.com
                </p>
                <p>
                  <WatchLaterOutlinedIcon /> <strong>Hours:</strong> 10:00 -
                  18:00, Mon - Sat
                </p>
              </div>

              <div className="col-md-9 part2">
                <div className="row">
                  <div className="col">
                    <h3>Company</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Company</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="#">Account</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Corporate</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Popular</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Delivery Information</Link>
                      </li>
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="#">Support Center</Link>
                      </li>
                      <li>
                        <Link to="#">Careers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="row lastStrip">
              <div className="col-md-6 part_1 d-flex align-items-center">
                <p className="mb-0">
                  © 2024, Ecommerce Template All rights reserved
                </p>
              </div>

              <div className="col-md-6 part3 d-flex align-items-center justify-content-end  part_3">
                <div className="d-flex align-items-center">
                  <h5>Follow Us</h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to={""}>
                        <FacebookOutlinedIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <InstagramIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <YouTubeIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {context.windowWidth < 992 && context?.isBottomShow === true && (
        <div className="fixed-bottom-menu d-flex align-self-center justify-content-between">
          <Link to="/" onClick={() => context?.closeSearch()}>
            <Button className="circle">
              <div className="d-flex align-items-center justify-content-center flex-column">
                <IoHomeOutline />
                <span className="title">Home</span>
              </div>
            </Button>
          </Link>

          {context.enableFilterTab === true && (
            <Button className="circle" onClick={() => {
              openFilter();
              context?.closeSearch()
            }}>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <CiFilter />
                <span className="title">Filters</span>
              </div>
            </Button>
          )}

          <Button className="circle" onClick={()=>context?.openSearch(true) }>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <IoIosSearch />
              <span className="title">Search</span>
            </div>
          </Button>

          <Link to="/myList"  onClick={() => context?.closeSearch()}>
            <Button className="circle">
              <div className="d-flex align-items-center justify-content-center flex-column">
                <IoMdHeartEmpty />
                <span className="title">Wishlist</span>
              </div>
            </Button>
          </Link>

          <Link to="/orders"  onClick={() => context?.closeSearch()}>
          <Button className="circle">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <IoBagCheckOutline />
              <span className="title">Orders</span>
            </div>
          </Button>
        </Link>
          

          <Link to="/my-account"  onClick={() => context?.closeSearch()}>
            <Button className="circle">
              <div className="d-flex align-items-center justify-content-center flex-column">
                <FaRegUser />
                <span className="title">Account</span>
              </div>
            </Button>
          </Link>
        </div>
      )}


    </>
  );
};

export default Footer;
