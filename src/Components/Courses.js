import React from "react";
import "../Styles/Courses.css";
import Course from "./Course.js";

const data = [
   {
      id: 1,
      image: "https://img.favpng.com/25/14/4/figma-user-interface-design-designer-logo-png-favpng-dtBqP6sV3PhEQ2AfU73dHpCwR.jpg",
      title: "Learn Figma",
      author: "by Christopher Norman",
      duration: "3h 15min",
      rating: "4.7",
   },
   {
      id: 2,
      image: "https://png.pngtree.com/element_our/png/20181011/instagram-social-media-icon-design-template-vector-png_126996.jpg",
      title: "Learn Instagram",
      author: "by Sophie Gill",
      duration: "3h 15min",
      rating: "4.7",
   },
   {
      id: 3,
      image: "https://img.favpng.com/25/14/4/figma-user-interface-design-designer-logo-png-favpng-dtBqP6sV3PhEQ2AfU73dHpCwR.jpg",
      title: "Learn Figma",
      author: "by Christopher Norman",
      duration: "3h 15min",
      rating: "4.7",
   },
   {
      id: 4,
      image: "https://png.pngtree.com/element_our/png/20181011/instagram-social-media-icon-design-template-vector-png_126996.jpg",
      title: "Learn Instagram",
      author: "by Sophie Gill",
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
