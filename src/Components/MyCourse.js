import React from "react";
import "../Styles/MyCourse.css";

const MyCourse = () => {
   return (
      <div className="myCourse-container">
         <div className="myCourse">
            <div className="myCourse-logo">
               <img src="https://www.kindpng.com/picc/m/20-208191_spain-flag-graphic-spanish-symbol-icon-banner-spain.png" alt="logo" />
            </div>
            <div className="myCourse-details">
               <h3>Spanish B2</h3>
               <h4>by Alejandro Velazquez</h4>
            </div>
            <div className="myCourse-percentage">83%</div>
            <div className="myCourse-button">
               <button>Continue</button>
            </div>
         </div>
         <div className="myCourse-arrows">
            <i class="fa fa-arrow-circle-o-left fa-3x"></i>
            <i class="fa fa-arrow-circle-o-right fa-3x"></i>
         </div>
      </div>
   );
};

export default MyCourse;
