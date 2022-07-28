import React from "react";
import { VectorMap } from "react-jvectormap";
import {mapData} from './mapData';
import { Row } from "react-bootstrap";

const Map = () => {
  return (
    <Row style={{marginTop: '20px', height:'400px'}}>
      <VectorMap
        map={"world_mill"}
        backgroundColor="#fafafa"
        zoomOnScroll={true}
        containerStyle={{
          width: "100%",
          zoom: "150%",
          minHeight: "400px",
          maxHeight: "400px",
          boxShadow: "0 10px 50px 0 rgba(0, 0, 0, 0.25)"
        }}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#cccccc",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
            "transition": '0.3s',
          },
          hover: {
            "fill-opacity": 0.6,
            cursor: "pointer"
          }
        }}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#0b4b93", "#0b4b94"], //your color game's here
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
    </Row>
  );
};
export default Map;