import React from "react";
import GroupChart2 from "@/components/partials/widget/chart/group-chart-2.jsx";
import VidgetCounters from "@/pages/components/redisignedComponents/vidgetCounters.jsx";
import Traffic from "@/pages/components/Traffic.jsx";
import Calendar from "@/pages/components/redisignedComponents/Calendar.jsx";
import ProjectPostPage from "@/pages/app/projects/index.jsx";

const TestComponent = () => {
  return (
    <>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <GroupChart2 />
        </div>

        {/*<VidgetCounters />*/}
      </div>
      {/*<ProjectPostPage />*/}
      <Traffic />
      {/*<Calendar />*/}
    </>
  );
};

export default TestComponent;
