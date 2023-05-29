import React from "react";
import { useParams } from "react-router-dom";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import GroupChart4 from "@/components/partials/widget/chart/group-chart-4";
import DonutChart from "@/components/partials/widget/chart/donut-chart";
import { meets, files } from "@/constant/data";
import SelectMonth from "@/components/partials/SelectMonth";
import TaskLists from "@/components/partials/widget/task-list";
import MessageList from "@/components/partials/widget/message-list";
import TrackingParcel from "@/components/partials/widget/activity";
import TeamTable from "@/components/partials/Table/team-table";
import CalendarView from "@/components/partials/widget/CalendarView";
import flagRU from "@/assets/images/icons-smile/ru.png";

const statisticsRevrote = [
  {
    title: "Подписчики",
    count: "12",
    bg: "bg-info-500",
    text: "text-info-500",
    percent: "25.67% ",
    icon: "heroicons-outline:menu-alt-1",
  },
  {
    title: "Регистрации ",
    count: "5",

    bg: "bg-warning-500",
    text: "text-warning-500",
    percent: "8.67%",
    icon: "heroicons-outline:chart-pie",
  },
  {
    title: "Депозиты",
    count: "190",
    bg: "bg-primary-500",
    text: "text-primary-500",
    percent: "1.67%  ",
    icon: "heroicons-outline:clock",
  },
  {
    title: "Отписки",
    count: "24",
    bg: "bg-success-500",
    text: "text-success-500",
    percent: "11.67%  ",
    icon: "heroicons-outline:calculator",
  },
  {
    title: "CPA",
    count: "1200",
    bg: "bg-info-500",
    text: "text-info-500",
    percent: "25.67% ",
    icon: "heroicons-outline:menu-alt-1",
  },
  {
    title: "Доход ",
    count: "$1200",

    bg: "bg-warning-500",
    text: "text-warning-500",
    percent: "8.67%",
    icon: "heroicons-outline:chart-pie",
  },
];

const ProdjDetailsTraff = () => {
  const { id } = useParams();

  return (
    <div className="card-traffic_details">
      <div className="grid grid-cols-12 gap-5">
        {/* end single column*/}
        <Card
          title="Test Dev Link"
          className="xl:col-span-5 col-span-12 lg:col-span-7 h-full"
          logo={flagRU}
        >
          <div>
            <div className="text-base font-medium text-slate-800 dark:text-slate-100 mb-3">
              Окупаемость
            </div>
            <div className="text-3xl font-bold">0.02%</div>

            <br />

            <div className="flex flex-wrap mt-8">
              <div className="xl:mr-8 mr-4 mb-3 space-y-1">
                <div className="font-semibold text-slate-500 dark:text-slate-400">
                  Existing website
                </div>
                <div className="flex items-center space-x-2 text-xs font-normal text-primary-600 dark:text-slate-300 rtl:space-x-reverse">
                  <Icon icon="heroicons:link" />
                  <a href="#">www.example.com</a>
                </div>
              </div>
              <div className="xl:mr-8 mr-4 mb-3 space-y-1">
                <div className="font-semibold text-slate-500 dark:text-slate-400">
                  Project brief
                </div>
                <div className="flex items-center space-x-2 text-xs font-normal text-primary-600 dark:text-slate-300 rtl:space-x-reverse">
                  <Icon icon="heroicons:link" />
                  <a href="#">www.example.com</a>
                </div>
              </div>
            </div>
            {/* end flex */}
            <div className="bg-slate-100 dark:bg-slate-700 rounded px-4 pt-4 pb-1 flex flex-wrap justify-between mt-6">
              <div className="mr-3 mb-3 space-y-2">
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Project owner
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  John Doe
                </div>
              </div>
              {/* end single */}
              <div className="mr-3 mb-3 space-y-2">
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Budget
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  $75,800
                </div>
              </div>
              {/* end single */}
              <div className="mr-3 mb-3 space-y-2">
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Start date
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  01/11/2021
                </div>
              </div>
              {/* end single */}
              <div className="mr-3 mb-3 space-y-2">
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Deadline
                </div>
                <div className="text-xs text-warning-500">01/11/2021</div>
              </div>
              {/* end single */}
            </div>
          </div>
        </Card>
        <Card className=" col-span-12 lg:col-span-5 h-full">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <GroupChart4 array={statisticsRevrote} />
          </div>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-md p-4 mt-4">
            <span className="block dark:text-slate-400 text-sm text-slate-600">
              Progress
            </span>
            <DonutChart />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProdjDetailsTraff;
