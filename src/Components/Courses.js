import React from "react";
import "../Styles/Courses.css";
import Course from "./Course.js";

const data = [
   {
      id: 1,
      image: "https://www.kindpng.com/picc/m/20-208191_spain-flag-graphic-spanish-symbol-icon-banner-spain.png",
      title: "Spanish B2",
      author: "by Alejandro Velazquez",
      duration: "3h 15min",
      rating: "4.7",
   },
   {
      id: 2,
      image: "https://www.kindpng.com/picc/m/20-208191_spain-flag-graphic-spanish-symbol-icon-banner-spain.png",
      title: "Spanish B2",
      author: "by Alejandro Velazquez",
      duration: "3h 15min",
      rating: "4.7",
   },
   {
      id: 3,
      image: "https://www.kindpng.com/picc/m/20-208191_spain-flag-graphic-spanish-symbol-icon-banner-spain.png",
      title: "Spanish B2",
      author: "by Alejandro Velazquez",
      duration: "3h 15min",
      rating: "4.7",
   },
   {
      id: 4,
      image: "https://www.kindpng.com/picc/m/20-208191_spain-flag-graphic-spanish-symbol-icon-banner-spain.png",
      title: "Spanish B2",
      author: "by Alejandro Velazquez",
      duration: "3h 15min",
      rating: "4.7",
   },
];

const Courses = () => {
   return (
      <div className="courses-container">
         <h2>Courses</h2>
         <div className="courses-category">
            <h3>All courses</h3>
            <h3>The Newest</h3>
            <h3>Top Rated</h3>
            <h3>Most Popular</h3>
         </div>
         <div>
            {data.map((item) => (
               <Course key={item.id} item={item} />
            ))}
         </div>
      </div>
   );
};

export default Courses;
