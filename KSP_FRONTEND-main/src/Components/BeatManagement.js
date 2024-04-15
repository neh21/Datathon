import React, { useState } from "react";
import mapping_dict from "../utils/mapping_dict.json";
import unit_beat_mappings from "../utils/unit_beat_mappings.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
// import { Chart } from "react-charts";
import Navbar from "./Navbar";

function BeatManagement() {
  const [date, setDate] = useState("");
  const [unit, setUnit] = useState("");
  const [results, setResults] = useState([]);

  const legendItems = [
    { id: 4, text: "High risk, far crime" },
    { id: 3, text: "High risk, nearer crimes" },
    { id: 2, text: "Medium risk, far crime" },
    { id: 1, text: "Medium risk, nearer crime" },
    { id: 0, text: "Low risk" },
  ];

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const fetchData = async (beatCode) => {
    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2];
    const unit_name_encoded = unit;
    const unit_beat_encoded = beatCode;

    try {
      const response = await fetch("http://localhost:5000/predict_beat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          year,
          month,
          day,
          unit_name_encoded,
          unit_beat_encoded,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const handleSubmit = async () => {
    const beats = unit_beat_mappings[unit]?.beats;
    const beatResults = [];

    for (const beatCode in beats) {
      const response = await fetchData(beatCode);
      const result =
        response && response.length > 0
          ? 4 - response[0].patrolling_category
          : null;
      beatResults.push({ beat: beats[beatCode], result: result || 0 }); // Using 0 as a fallback
    }

    setResults(beatResults);
  };

  // Adjusting data for charting: Label should be the beat, and the data needs to reflect categories
  const chartData = results.map((result) => ({
    name: result.beat,
    value: result.result,
  }));



  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col"
        style={{
          position: "absolute",
          marginTop: "67px",
          width: "100%",
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
            value={unit}
            onChange={handleUnitChange}
            style={{
              width: "max-content",
              borderRadius: "5px",
              gap: "5px",
              boxShadow:
                "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
            }}
          >
            {Object.keys(mapping_dict).map((unitKey) => (
              <option key={unitKey} value={unitKey}>
                {mapping_dict[unitKey]}
              </option>
            ))}
          </select>
          <button
            onClick={handleSubmit}
            style={{
              width: "max-content",
              borderRadius: "5px",
              gap: "5px",
              padding: "4px",
              boxShadow:
                "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
            }}
          >
            Fetch Data
          </button>
        </div>
        <div
          className="flex flex-row"
          style={{
            width: "95%",
            height: "80vh",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          <div className="risk-legend" style={{ width: "20%" }}>
            {legendItems.map((item) => (
              <div
                key={item.id}
                className={`legend-item legend-item-${item.id}`}
              >
                {item.id}: {item.text}
              </div>
            ))}
          </div>
          <div style={{ width: "74%" }}>
            {chartData.length > 0 && (
              // <Chart data={data} series={series} axes={axes} tooltip />
              <BarChart width={1100} height={600} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  angle={-90}
                  textAnchor="end"
                  height={80}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeatManagement;
