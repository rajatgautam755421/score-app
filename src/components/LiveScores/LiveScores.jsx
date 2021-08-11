import React from "react";
import "./LiveScores.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Fade } from "react-reveal";
const LiveScores = () => {
  return (
    <>
      <h3 className="live__score__text__main">LIVE SCORES</h3>
      <div className="container">
        <div className="row">
          <div
            className="col-md-4 col-sm-12 scorecard"
            style={{
              width: "400px",
              height: "200px",
              borderBottom: "2px solid lightgrey",
              borderRight: "2px solid lightgrey",
              borderRadius: "4px",
              marginLeft: "auto",
              marginRight: "auto",
              marginButtom: "20px",
              marginTop: "20px",
            }}
          >
            <Fade left>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingTop: "10px",
                }}
              >
                <h4 style={{ fontSize: "20px", color: "white" }}>
                  Live Scoreboard
                </h4>
                <FiberManualRecordIcon
                  style={{
                    color: "red",
                    marginLeft: "100px",
                    marginBottom: "4px",
                  }}
                />
                <h6
                  style={{
                    color: "red",
                    marginLeft: "5px",
                    fontSize: "19px",
                    alignItems: "center",
                  }}
                >
                  LIVE
                </h6>
              </div>
            </Fade>
          </div>

          {/* second Column */}

          <div className="col-md-6 col-12" style={{ marginTop: "20px" }}>
            <Fade right>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmPjCBZtAP6boAADQOMv4vNgpZfQhZGD9Cw&usqp=CAU"
                style={{ width: "100%", height: "400px" }}
              />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveScores;
