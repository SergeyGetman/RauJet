import React from "react";
import Chart from "react-apexcharts";
import logo from "@/assets/images/all-img/widget-bg-1.png";

const shapeLine1 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#00EBFF"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
const shapeLine2 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#FB8F65"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};
const shapeLine3 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#5743BE"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};

const shapeLine4 = {
  series: [
    {
      data: [800, 600, 1000, 800, 600, 1000, 800, 900],
    },
  ],
  options: {
    chart: {
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
      offsetX: 0,
      offsetY: 0,
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#7253e5"],
    tooltip: {
      theme: "light",
    },
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      type: "solid",
      opacity: [0.1],
    },
    legend: {
      show: false,
    },
    xaxis: {
      low: 0,
      offsetX: 0,
      offsetY: 0,
      show: false,
      labels: {
        low: 0,
        offsetX: 0,
        show: false,
      },
      axisBorder: {
        low: 0,
        offsetX: 0,
        show: false,
      },
    },
  },
};

const statistics = [
  {
    name: shapeLine1,
    title: "Пользователи",
    count: "3,564",
    bg: "bg-[#E5F9FF] dark:bg-slate-900	",
    backgroundImage: `url(${logo})`,
  },
  {
    name: shapeLine2,
    title: "Регистрации",
    count: "564",
    bg: "bg-[#FFEDE5] dark:bg-slate-900	",
    backgroundImage: `url(${logo})`,
  },
  {
    name: shapeLine3,
    title: "Депозиты",
    count: "+5.0%",
    bg: "bg-[#EAE5FF] dark:bg-slate-900	",
    backgroundImage: `url(${logo})`,
  },
  {
    name: shapeLine4,
    title: "CPA",
    count: "12",
    bg: "bg-[#E5F9FF] dark:bg-slate-900	",
    backgroundImage: `url(${logo})`,
  },
];
const GroupChart1 = () => {
  return (
    <>
      {statistics.map((item, i) => (
        <div
          className={`py-[18px] px-4 grid rounded-[6px] md:grid-cols-3 grid-cols-1 gap-4 ${item.bg} m-3`}
          key={i}
        >
          <div className="flex items-center space-x-6 rtl:space-x-reverse ">
            <div className="flex-none">
              <Chart
                options={item.name.options}
                series={item.name.series}
                type="area"
                height={48}
                width={48}
              />
            </div>
            <div className="flex-1">
              <div className="text-slate-800 dark:text-slate-300 text-sm mb-1 font-medium text-black-800">
                {item.title}
              </div>
              <div className="text-slate-900 dark:text-white text-lg font-medium ">
                {item.count}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default GroupChart1;
