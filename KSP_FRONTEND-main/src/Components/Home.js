import React from "react";
import Navbar from "./Navbar";
import police_meet from "../assests/22040.jpg";
import tech from "../assests/18383.jpg";
import analytics from "../assests/3659193.jpg";
import future_scope from "../assests/12083370_Wavy_Bus-19_Single-09.jpg";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
// import 'aos/dist/aos.css'; // Add this line to import the AOS CSS

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // values from 0 to 3000, with step 50ms
    });
  }, []);
  // const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-3 pt-10">
        <div
          className="flex flex-row"
          style={{ justifyContent: "space-evenly", alignItems: "center" }}
        >
          <div className="flex flex-row items-center " style={{ width: "40%" }}>
            <img
              src={police_meet}
              alt=""
              style={{ width: "80%" }}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            />
          </div>
          <div
            style={{
              height: "12rem",
              width: "0.3rem",
              borderRadius: "10px",
              boxShadow: "0px 0px 8px 1px #7f7f7fbf",
              background: "gray",
            }}
          ></div>
          <div
            className="flex flex-col"
            style={{ justifyContent: "flex-start", width: "40%" }}
          >
            <span style={{ fontSize: "32px", fontWeight: "500" }}>
              About Crime Patrol
            </span>
            <span>
              Crime Patrol helps police stop crimes before they happen by
              looking at data to know where they need to be and what to do to
              keep everyone safe.
            </span>
          </div>
        </div>
        <div
          className="flex flex-row"
          style={{ justifyContent: "space-evenly", alignItems: "center" }}
        >
          <div
            className="flex flex-col"
            style={{ justifyContent: "flex-start", width: "40%" }}
          >
            <span style={{ fontSize: "32px", fontWeight: "500" }}>
              How Will it help
            </span>
            <span>
              Crime Patrol is a proactive approach to combat crime by analyzing
              data to predict and prevent unlawful activities effectively. It
              helps in optimizing police patrols and ensuring community safety.
            </span>
          </div>
          <div
            style={{
              height: "12rem",
              width: "0.3rem",
              borderRadius: "10px",
              boxShadow: "0px 0px 8px 1px #7f7f7fbf",
              background: "gray",
            }}
          ></div>
          <div className="flex flex-row items-center " style={{ width: "40%" }}>
            <img
              src={analytics}
              alt=""
              style={{ width: "75%" }}
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            />
          </div>
        </div>
        <div
          className="flex flex-row"
          style={{ justifyContent: "space-evenly", alignItems: "center" }}
        >
          <div className="flex flex-row items-center " style={{ width: "40%" }}>
            <img
              src={tech}
              alt=""
              style={{ width: "70%" }}
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            />
          </div>
          <div
            style={{
              height: "12rem",
              width: "0.3rem",
              borderRadius: "10px",
              boxShadow: "0px 0px 8px 1px #7f7f7fbf",
              background: "gray",
            }}
          ></div>
          <div
            className="flex flex-col"
            style={{ justifyContent: "flex-start", width: "40%" }}
          >
            <span style={{ fontSize: "32px", fontWeight: "500" }}>
              Technologies Used
            </span>
            <span>
              We have used python and it's libraries such as pandas and numpy
              for our data analysis and preprocessing. We have used Power BI for
              advanced data visualization and insights. We have developed the
              prototype using web technologies like React.js and backend with
              Python Flask Server
            </span>
          </div>
        </div>
        <div
          className="flex flex-row"
          style={{ justifyContent: "space-evenly", alignItems: "center" }}
        >
          <div
            className="flex flex-col"
            style={{ justifyContent: "flex-start", width: "40%" }}
          >
            <span style={{ fontSize: "32px", fontWeight: "500" }}>
              Future Scope
            </span>
            <span>
              In the future, our model could evolve to integrate real-time data,
              enhance predictive accuracy, and expand to various crime types,
              offering a more dynamic and comprehensive tool for law
              enforcement, ultimately fostering safer and more resilient
              communities worldwide.
            </span>
          </div>
          <div
            style={{
              height: "12rem",
              width: "0.3rem",
              borderRadius: "10px",
              boxShadow: "0px 0px 8px 1px #7f7f7fbf",
              background: "gray",
            }}
          ></div>
          <div
            className="flex flex-row items-center "
            style={{ width: "40%", justifyContent: "center" }}
          >
            <img
              src={future_scope}
              alt=""
              style={{ width: "65%" }}
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center py-10 my-5"
        data-aos="fade-up"
        data-aos-duration="800"
        style={{
          background:
            "linear-gradient(to right, rgb(255 255 255) 0%, rgb(203 201 200) 100%)",
          borderRadius: "15px",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          margin: "0 auto",
          maxWidth: "600px",
          color: "rgb(4 4 4)",
          marginBottom: "10px",
        }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6">
          Team Information
        </h2>
        <div
          className="text-xl text-center mb-4"
          style={{  }}
        >
          Team Name - Jan Rakshak
        </div>
        <div
          className="flex flex-col items-center justify-center p-4"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "10px",
          }}
        >
          <ul className="list-disc">
            <li
              style={{
              
                listStyle: "none",
              }}
            >
              Abhinav Singh - IIEST SHIBPUR
            </li>
            <li
              style={{
               
                listStyle: "none",
              }}
            >
              Apratim Dutta - IIEST SHIBPUR
            </li>
            <li
              style={{
               
                listStyle: "none",
              }}
            >
              Shreyash Pandey - IIEST SHIBPUR
            </li>
            <li
              style={{
              
                listStyle: "none",
              }}
            >
              Neha Kumari - IGDTUW DELHI
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
