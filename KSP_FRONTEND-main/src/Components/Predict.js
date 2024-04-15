import React, { useState, useEffect } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import mappingDict from "../utils/mapping_dict.json";
import Navbar from "./Navbar";

const Predict = () => {
  const [date, setDate] = useState("");
  const [policeUnit, setPoliceUnit] = useState("");
  const [policeUnitName, setPoliceUnitName] = useState("");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Prediction Output",
        data: [],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  });

  // Invert mapping dictionary to map names to IDs
  const [unitOptions, setUnitOptions] = useState({});
  useEffect(() => {
    const invertedMapping = Object.entries(mappingDict).reduce(
      (acc, [key, value]) => {
        acc[value] = key;
        return acc;
      },
      {}
    );
    setUnitOptions(invertedMapping);
  }, []);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleUnitChange = (e) => {
    setPoliceUnitName(e.target.value);
    setPoliceUnit(unitOptions[e.target.value]);
  };

  const prepareDataAndPredict = () => {
    const payload = {
      date,
      policeUnit: policeUnit,
    };

    fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedChartData = {
          labels: data.map((item) => `${item.hour}:00`),
          datasets: [
            {
              label: "Prediction Output",
              data: data.map((item) => item.value),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        };
        setChartData(updatedChartData);
      })
      .catch((error) => {
        console.error("Error during prediction:", error);
      });
  };

  // Define chart size here
  const chartStyles = {
    width: "1000px",
    height: "100vh",
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "absolute",
          marginTop: "70px",
          left: "293px",
        }}
      >
        <div
          className="flex flex-row gap-2"
          style={{ justifyContent: "center" }}
        >
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            style={{
              // background: "gray",
              padding: "4px",
              borderRadius: "5px",
              width: "max-content",
              gap: "5px",
              boxShadow:
                "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
            }}
          />
          <select
            value={policeUnitName}
            onChange={handleUnitChange}
            style={{
              width: "max-content",
              borderRadius: "5px",
              gap: "5px",
              boxShadow:
                "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
            }}
          >
            <option value="">Select Police Unit</option>
            {Object.keys(unitOptions).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
          <button
            onClick={prepareDataAndPredict}
            style={{
              width: "max-content",
              borderRadius: "5px",
              gap: "5px",
              padding:"4px",
              boxShadow:
                "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
            }}
          >
            Predict
          </button>
        </div>
        <div style={chartStyles}>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Predict;
