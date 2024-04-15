import React, { useState } from "react";
import Navbar from "./Navbar";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
// import { Report } from "powerbi-client-react";
import { accessToken } from "../constant";
function Analytics() {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <Navbar />
      <div
        className="flex flex-row p-2 gap-5"
        style={{
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          /* margin-top: 10px; */
          /* display: block; */
          top: "49px",
          // margin:"auto"
        }}
      >
        <div
          className={`flex flex-row px-4 py-2 items-center ${
            selected === 0 ? "bg-gray-200" : null
          } hover:bg-gray-300 hover:bg-opacity-55 cursor-pointer`}
          style={{
            boxShadow: "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
            borderRadius: "5px",
          }}
          onClick={() => {
            setSelected(0);
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "500" }}>
            Accused Data Analysis
          </span>
        </div>
        <div
          className={`flex flex-row px-4 py-2 items-center ${
            selected === 1 ? "bg-gray-200" : null
          } hover:bg-gray-300 hover:bg-opacity-55 cursor-pointer`}
          style={{
            boxShadow: "inset #d9d1d1 0px 0px 2px 1px, #949494 2px 2px 5px 0px",
            borderRadius: "5px",
          }}
          onClick={() => {
            setSelected(1);
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "500" }}>
            Victim Data Analysis
          </span>
        </div>
      </div>
      {selected === 0 && (
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: "52f1662b-e2d6-456d-b8da-68ed99e33ad0",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=52f1662b-e2d6-456d-b8da-68ed99e33ad0&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwiZGlzYWJsZUFuZ3VsYXJKU0Jvb3RzdHJhcFJlcG9ydEVtYmVkIjp0cnVlfX0%3d",
            accessToken: accessToken,
            tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              background: models.BackgroundType.Transparent,
              navContentPaneEnabled: false,
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event.detail);
                },
              ],
              ["visualClicked", () => console.log("visual clicked")],
              ["pageChanged", (event) => console.log(event)],
            ])
          }
          cssClassName={"embed-class-1"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      )}
      {selected === 1 && (
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: "e7044eb7-4ab9-4b9a-97e2-bc717e5f40e1",
            embedUrl:
              "https://app.powerbi.com/reportEmbed?reportId=e7044eb7-4ab9-4b9a-97e2-bc717e5f40e1&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwiZGlzYWJsZUFuZ3VsYXJKU0Jvb3RzdHJhcFJlcG9ydEVtYmVkIjp0cnVlfX0%3d",
            accessToken: accessToken,
            tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              background: models.BackgroundType.Transparent,
              navContentPaneEnabled: false,
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event.detail);
                },
              ],
              ["visualClicked", () => console.log("visual clicked")],
              ["pageChanged", (event) => console.log(event)],
            ])
          }
          cssClassName={"embed-class"}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      )}
    </div>
  );
}

export default Analytics;
