import React from "react";
import "./WhyYouChooseUs.css";
import redShirtImg from "../../hot-onion-restaurent-resources/Image/adult-blur-blurred-background-687824.png";
import chefImg from "../../hot-onion-restaurent-resources/Image/chef-cook-food-33614.png";
import guyWithStuff from "../../hot-onion-restaurent-resources/Image/architecture-building-city-2047397.png";
import carIcon from "../../hot-onion-restaurent-resources/ICON/Group 245.png";
import busIcon from "../../hot-onion-restaurent-resources/ICON/Group 204.png";
import bellIcon from "../../hot-onion-restaurent-resources/ICON/Group 1133.png";
import { FcAdvance } from "react-icons/fc";
import Footer from "./Footer";

const WhyYouChooseUs = () => {
  return (
    <div>
      {" "}
      <div className="WhyYouChooseUs">
        <h3>Why You Choose Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          sequi ut quo aperiam voluptatibus totam sed quibusdam ex velit
          laudantium illum, corrupti vero veritatis asperiores! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Vero dolore non, sequi
          unde at aspernatur totam ex voluptas itaque minima earum, ut nobis
          tenetur impedit odit officiis mollitia provident quam!
        </p>
        <div className="card-group main-card">
          <div className="card">
            <div className="img-div">
              <img
                src={redShirtImg}
                className="card-img-top people-img"
                alt="..."
              />
            </div>

            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <img src={carIcon} alt="" /> Fast Delivery
              </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <a href="/">See more</a> <FcAdvance size="20px" />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img-div">
              <img
                src={chefImg}
                className="card-img-top people-img"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <img src={bellIcon} alt="" /> A Good Auto Responder
              </h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <a href="/">See more</a> <FcAdvance size="20px" />
              </p>
            </div>
          </div>
          <div className="card">
            <div className="img-div">
              <img
                src={guyWithStuff}
                className="card-img-top people-img"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <img src={busIcon} alt="" /> Home Delivery
              </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                .
              </p>
              <p className="card-text">
                <a href="/">See more</a> <FcAdvance size="20px" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhyYouChooseUs;
