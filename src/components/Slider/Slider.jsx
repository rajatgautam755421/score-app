import React from "react";
import "./Slider.css";
import { Fade } from "react-reveal";
import ClearIcon from "@material-ui/icons/Clear";
const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={{ height: "86vh" }}>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/1600x2000/?football,football"
              className="d-block w-100"
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/1600x2000/?football,lessi"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/1600x2000/?football,ronaldo"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Second Section */}
      <Fade top>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-10 slider__text">
              <h1 style={{ fontWeight: "700" }}>
                Win Up To <strong style={{ color: "#daa520" }}>$1000</strong>
              </h1>
              <button
                type="button"
                class="btn btn-light slider__button"
                style={{
                  width: "100px",
                  marginTop: "10px",
                  backgroundColor: "#daa520 ",
                  outline: "none",
                }}
              >
                WIN
              </button>
            </div>
            <div className="col-md-5 col-sm-10 slider__images">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmPjCBZtAP6boAADQOMv4vNgpZfQhZGD9Cw&usqp=CAU"
                style={{
                  width: "360px",
                  height: "200px",

                  borderRadius: "10px",
                }}
              />
              <h6
                style={{
                  fontSize: "25px",
                  width: "360px",
                  backgroundColor: "white",
                  color: "black",
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                Watch Match Live
              </h6>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Slider;
