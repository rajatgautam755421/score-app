import React from "react";

const SingleSchedule = () => {
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "40px",
          marginBottom: "40px",
          borderRadius: "10px",
        }}
      >
        <div
          className="row"
          style={{
            boxShadow:
              "  0 2px 2px rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.05)",
            height: "150px",
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          {/* 1st col */}
          <div className="col-5">
            <div
              className="match__details"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                style={{
                  fontSize: "18px",
                  marginRight: "2px",
                  boxShadow:
                    "  0 10px 10px rgba(0, 0, 0, 0.25), 0 0 16px rgba(0, 0, 0, 0.05)",
                  height: "7vh",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "5px",
                  paddingRight: "10px",
                }}
              >
                Real Madrid FC
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png"
                style={{
                  width: "80px",
                  height: "100px",
                  boxShadow:
                    "  0 10px 10px rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.05)",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          {/* 2nd col */}
          <div className="col-2" style={{ paddingRight: "10px" }}>
            <div
              className="time"
              //   style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <h6>11 A.M </h6>
              <h6>08/10/2021</h6>
            </div>
            <div>
              <h1
                style={{ border: "1px solid lightgrey", borderRadius: "10px" }}
                className="schedule__h1"
              >
                VS.
              </h1>
            </div>
          </div>

          {/* 3rd col */}
          <div
            className="col-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingLeft: "10px",
            }}
          >
            <div
              className="match__details"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  marginRight: "2px",
                  boxShadow:
                    "  0 10px 10px rgba(0, 0, 0, 0.25), 0 0 16px rgba(0, 0, 0, 0.05)",
                  height: "7vh",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                Real Madrid FC
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png"
                style={{
                  width: "80px",
                  height: "100px",
                  boxShadow:
                    "  0 10px 10px rgba(0, 0, 0, 0.25), 0 0 6px rgba(0, 0, 0, 0.05)",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSchedule;
