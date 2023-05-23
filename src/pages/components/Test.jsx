import React from "react";
import Card from "@/components/ui/Card.jsx";
import Dropdown from "@/components/ui/Dropdown.jsx";
import Button from "@/components/ui/Button.jsx";
import SplitDropdown from "@/components/ui/Split-dropdown.jsx";
import GroupChart2 from "@/components/partials/widget/chart/group-chart-2.jsx";
import VidgetCounters from "@/pages/components/redisignedComponents/vidgetCounters.jsx";
import Traffic from "@/pages/components/Traffic.jsx";

const TestComponent = () => {
  return (
    <>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <GroupChart2 />
        </div>

        <VidgetCounters />
      </div>
      <Traffic />
    </>
  );
};

export default TestComponent;
