import React from "react";
// import { Ionicons,MaterialCommunityIcons,MaterialIcons,AntDesign } from '@expo/vector-icons'
import { FaChartPie } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { GiAbstract044 } from "react-icons/gi";
import { FaRobot } from "react-icons/fa6";
import { IoMdLocate } from "react-icons/io";
import { GiAges } from "react-icons/gi";
// import { FaCircleInfo } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const getFormattedDateTime = () => {
    const now = new Date();
    const datePart = now.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const timePart = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${datePart} ${timePart}`;
  };

  const [currentTime, setCurrentTime] = useState(getFormattedDateTime());

  // Effect to update the time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getFormattedDateTime());
    }, 1000 * 60); // Update every minute

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);
  return (
    <nav
      className="flex p-1 flex-row gap-2 items-center mb-2"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "100",
        background: "white",
      }}
    >
      <div
        className="flex p-2 flex-row mr-3 hover:bg-gray-300 hover:bg-opacity-55 cursor-pointer"
        style={{
          width: "max-content",
          borderRadius: "5px",
          gap: "5px",
          boxShadow: "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
          alignItems: "center",
        }}
        onClick={() => {
          navigate("/analytics");
        }}
      >
        <FaChartPie />
        <span>CRIME DATA ANALYTICS</span>
      </div>
      <div
        className="flex p-2 flex-row hover:bg-gray-300 hover:bg-opacity-55 cursor-pointer"
        style={{
          width: "max-content",
          borderRadius: "5px",
          gap: "5px",
          boxShadow: "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
          alignItems: "center",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        <FaHome />
        <span>Home</span>
      </div>
      <div
        className="flex p-2 flex-row hover:bg-gray-300 hover:bg-opacity-55 cursor-pointer"
        style={{
          width: "max-content",
          borderRadius: "5px",
          gap: "5px",
          boxShadow: "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
          alignItems: "center",
        }}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        <IoBarChartSharp />
        <span>CRIME CHARTS</span>
      </div>
      <div
        className="flex p-2 flex-row hover:bg-gray-300 hover:bg-opacity-55 cursor-pointer"
        style={{
          width: "max-content",
          borderRadius: "5px",
          gap: "5px",
          boxShadow: "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
          alignItems: "center",
        }}
        onClick={() => {
          navigate("/predict");
        }}
      >
        <FaRobot />
        <span>CRIME PREDICTOR</span>
      </div>
      <div
        className="flex p-2 flex-row hover:bg-gray-300 hover:bg-opacity-55 cursor-pointer"
        style={{
          width: "max-content",
          borderRadius: "5px",
          gap: "5px",
          boxShadow: "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
          alignItems: "center",
        }}
        onClick={() => {
          navigate("/maps");
        }}
      >
        <IoMdLocate />
        <span>CRIME LOCATOR</span>
      </div>
      <div
        className="flex p-2 flex-row mr-3 hover:bg-gray-300 hover:bg-opacity-55 cursor-pointer"
        style={{
          width: "max-content",
          borderRadius: "5px",
          gap: "5px",
          boxShadow: "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
          alignItems: "center",
        }}
        onClick={() => {
          navigate("/beats");
        }}
      >
        <GiAbstract044 />
        <span>BEAT DEPLOYMENT PREDICTOR </span>
      </div>
      <div
        className="flex p-2 flex-row hover:bg-gray-300 hover:bg-opacity-55 cursor-pointer"
        style={{
          width: "max-content",
          borderRadius: "5px",
          gap: "5px",
          boxShadow: "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
          alignItems: "center",
        }}
        onClick={() => {
          navigate("/reportbeat");
        }}
      >
        <GiAges />
        <span>BEAT ANALYTICS</span>
      </div>
      <div
        className="flex flex-row items-center"
        style={{ position: "absolute", right: "20px" }}
      >
        <span
          style={{
            textShadow: "rgb(108, 93, 93) 0px 0px 0px",
            fontSize: "1.25rem",
            fontWeight: "500",
          }}
        >
          {currentTime}
        </span>
      </div>
    </nav>
  );
}
