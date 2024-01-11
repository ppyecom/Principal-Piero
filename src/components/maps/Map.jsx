import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [65.0, 6.0, 0],
        center: [-2, -3],
        scale: 1100
      }}
      style={{width:"100%",height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-77.0428, -12.0464]}
        dx={-50}
        dy={-50}
        connectorProps={{
          stroke: "#693a8d",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#3D1C56">
          {"Lima, Perú"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
