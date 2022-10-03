import React from "react";
import propTypes from "prop-types";
import { useState, useEffect } from "react";

export function TrafficLight() {


    const [ color, setColor] = useState("");
   

  return (

     <div className = "container">
       <div className="trafficLightHolder"></div>
       <div className="stopLight">
      <div className="redLight">
       <svg width="100" height="100"  className={"red light" + (color === "red" ? " glow" : "")}>
           <circle onClick={() => setColor("red")}
            cx="50"
            cy="50"
            r="40"
            fill="red"
           />
         </svg>
      </div> 
       <div className="yellowLight">
        <svg width="100" height="100" className={"yellow light" + (color === "yellow" ? " glow" : "")}>
          <circle onClick={() => setColor("yellow")}
            cx="50"
            cy="50"
            r="40"
            fill="yellow"
          />
      </svg>
      </div>
       <div className="greenLight">
         <svg width="100" height="100" className={"green light" + (color === "green" ? " glow" : "")}>
           <circle onClick={() => setColor("green")}
             cx="50"
             cy="50"
             r="40"
             fill="green"
           />
         </svg>
       </div>
     </div>
     </div>
   );
}
