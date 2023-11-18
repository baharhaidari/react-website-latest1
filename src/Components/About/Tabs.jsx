// import React, { useState } from "react";
// import AboutMe from "./AboutMe";
// import Timeline from "./Timeline";
// import Certificates from "./Certificate";
// import "./Tabs.css";
// import { useTranslation } from "react-i18next";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("aboutMe");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const { t } = useTranslation();

//   return (
//     <div className="tabs-container">
//       <div className="button-container">
//         <button
//           onClick={() => handleTabChange("aboutMe")}
//           className={`tab ${
//             activeTab === "aboutMe" ? "active-tab" : "unactive"
//           }`}
//         >
//           {t("ABOUT.fisrt-tab")}
//         </button>

//         <button
//           onClick={() => handleTabChange("timeline")}
//           className={`tab ${
//             activeTab === "timeline" ? "active-tab" : "unactive"
//           }`}
//         >
//           {t("ABOUT.second-tab")}
//         </button>

//         <button
//           onClick={() => handleTabChange("certificate")}
//           className={`tab ${
//             activeTab === "certificate" ? "active-tab" : "unactive"
//           }`}
//         >
//           {t("ABOUT.third-tab")}
//         </button>
//       </div>

//       <div className="content-container">
//         {activeTab === "aboutMe" && <AboutMe />}
//         {activeTab === "timeline" && <Timeline />}
//         {activeTab === "certificate" && <Certificates />}
//       </div>
//     </div>
//   );
// };

// export default Tabs;

// import React, { useState } from "react";
// import AboutMe from "./AboutMe";
// import Timeline from "./Timeline";
// import Certificates from "./Certificate";
// import "./Tabs.css";
// import { useTranslation } from "react-i18next";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("aboutMe");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const { t } = useTranslation();

//   return (
//     <div className="tabs-container">
//       <div className="button-container">
//         <button
//           onClick={() => handleTabChange("aboutMe")}
//           className={`tab ${
//             activeTab === "aboutMe" ? "active-tab" : "unactive"
//           }`}
//         >
//           {t("ABOUT.fisrt-tab")}
//         </button>

//         <button
//           onClick={() => handleTabChange("timeline")}
//           className={`tab ${
//             activeTab === "timeline" ? "active-tab" : "unactive"
//           }`}
//         >
//           {t("ABOUT.second-tab")}
//         </button>

//         <button
//           onClick={() => handleTabChange("certificate")}
//           className={`tab ${
//             activeTab === "certificate" ? "active-tab" : "unactive"
//           }`}
//         >
//           {t("ABOUT.third-tab")}
//         </button>
//       </div>

//       <div
//         className="content-slider"
//         style={{
//           transform: `translateX(${
//             activeTab === "aboutMe"
//               ? 0
//               : activeTab === "timeline"
//               ? "-100%"
//               : "-200%"
//           })`,
//         }}
//       >
//         <div className="data">
//           <AboutMe />
//         </div>
//         <div className="data">
//           <Timeline />
//         </div>
//         <div className="data">
//           <Certificates />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tabs;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import AboutMe from "./AboutMe";
// import Timeline from "./Timeline";
// import Certificates from "./Certificate";
// import "./Tabs.css";
// import { useTranslation } from "react-i18next";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (tabIndex) => {
//     setActiveTab(tabIndex);
//   };

//   const { t } = useTranslation();

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: activeTab,
//     beforeChange: (_, nextIndex) => handleTabChange(nextIndex),
//   };

//   return (
//     <div className="tabs-container">
//       <div className="button-container">
//         <button
//           onClick={() => handleTabChange(0)}
//           className={`tab ${activeTab === 0 ? "active-tab" : ""}`}
//         >
//           {t("ABOUT.fisrt-tab")}
//         </button>

//         <button
//           onClick={() => handleTabChange(1)}
//           className={`tab ${activeTab === 1 ? "active-tab" : ""}`}
//         >
//           {t("ABOUT.second-tab")}
//         </button>

//         <button
//           onClick={() => handleTabChange(2)}
//           className={`tab ${activeTab === 2 ? "active-tab" : ""}`}
//         >
//           {t("ABOUT.third-tab")}
//         </button>
//       </div>

//       <Slider {...sliderSettings}>
//         <div>
//           <AboutMe />
//         </div>
//         <div>
//           <Timeline />
//         </div>
//         <div>
//           <Certificates />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Tabs;

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import AboutMe from "./AboutMe";
import Timeline from "./Timeline";
import Certificates from "./Certificate";
import "./Tabs.css";
import { useTranslation } from "react-i18next";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sliderRef = useRef(null);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    sliderRef.current.slickGoTo(tabIndex);
  };

  const { t } = useTranslation();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 15000,
    initialSlide: activeTab,

    beforeChange: (_, nextIndex) => setActiveTab(nextIndex),
  };

  return (
    <div className="tabs-container">
      <div className="button-container">
        <button
          onClick={() => handleTabChange(0)}
          className={`tab ${activeTab === 0 ? "active-tab" : ""}`}
        >
          {t("ABOUT.fisrt-tab")}
        </button>

        <button
          onClick={() => handleTabChange(1)}
          className={`tab ${activeTab === 1 ? "active-tab" : ""}`}
        >
          {t("ABOUT.second-tab")}
        </button>

        <button
          onClick={() => handleTabChange(2)}
          className={`tab ${activeTab === 2 ? "active-tab" : ""}`}
        >
          {t("ABOUT.third-tab")}
        </button>
      </div>

      <Slider {...sliderSettings} ref={sliderRef}>
        <div>
          <AboutMe />
        </div>
        <div>
          <Timeline />
        </div>
        <div>
          <Certificates />
        </div>
      </Slider>
    </div>
  );
};

export default Tabs;
