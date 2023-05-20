import React from "react";
import world from "@svg-maps/world";
import { CheckboxSVGMap } from "react-svg-map";

const VMap = () => {
  return (
    <div className="  w-full ">
      <CheckboxSVGMap map={world} className="h-[350px] w-full dash-codevmap" />
    </div>
  );
};

export default VMap;
