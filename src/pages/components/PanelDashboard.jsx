import React from "react";
import Card from "@/components/ui/Card.jsx";
import SelectMonth from "@/components/partials/SelectMonth.jsx";
import ImageBlock1 from "@/components/partials/widget/block/image-block-1.jsx";
import GroupChart1 from "@/components/partials/widget/chart/group-chart-1.jsx";
import RadarChart from "@/components/partials/widget/chart/radar-chart.jsx";
import DonutChart from "@/components/partials/widget/chart/donut-chart.jsx";
import BasicArea from "@/pages/chart/appex-chart/BasicArea.jsx";
import Calendar from "@/pages/components/redisignedComponents/Calendar.jsx";
import HomeBredCurbs from "@/pages/dashboard/HomeBredCurbs.jsx";
import imageTitleDashboard from "@/assets/images/all-img/widget-bg-1.png";

const PanelDashboard = () => {
  return (
    <>
      <HomeBredCurbs title="RAU JET" />
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="2xl:col-span-3 lg:col-span-4 col-span-12">
          <ImageBlock1
            text="количество пользователей"
            image={imageTitleDashboard}
          />
        </div>
        <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
          <Card bodyClass="p-4 display: contents">
            <div className="grid md:grid-cols-4 col-span-1 gap-4">
              <GroupChart1 />
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="lg:col-span-8 col-span-12">
          <div className="legend-ring">
            {
              <Card title="график" headerslot={<SelectMonth />}>
                <BasicArea height={310} />
              </Card>
            }
          </div>
        </div>
        <div className="lg:col-span-4 col-span-12">
          <Card title="Финансы">
            <RadarChart />
            <div className="bg-slate-50 dark:bg-slate-900 rounded p-4 mt-8 flex justify-between flex-wrap">
              <div className="space-y-1">
                <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">
                  Общий доход
                </h4>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  $8264.35
                </div>
                <div className="text-slate-500 dark:text-slate-300 text-xs font-normal">
                  +0.001.23 (0.2%)
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">
                  Рассход
                </h4>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  $264.35
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-slate-600 dark:text-slate-200 text-xs font-normal">
                  Invested amount
                </h4>
                <div className="text-sm font-medium text-slate-900 dark:text-white">
                  $8264.35
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/*<div className="space-y-5">*/}
      {/*  <div className="grid grid-cols-12 gap-5">*/}
      {/*    <div className="lg:col-span-8 col-span-12 space-y-5">*/}
      {/*      <Card>*/}
      {/*        <div className="grid grid-cols-12 gap-5">*/}
      {/*          <div className="xl:col-span-4 col-span-12">*/}
      {/*            <div className="bg-slate-50 dark:bg-slate-900 rounded-md p-4">*/}
      {/*              <span className="block dark:text-slate-400 text-sm text-slate-600">*/}
      {/*                Progress*/}
      {/*              </span>*/}
      {/*              <DonutChart />*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </Card>*/}
      {/*    </div>*/}
      {/*    <div className="lg:col-span-4 col-span-12 space-y-5"></div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default PanelDashboard;
