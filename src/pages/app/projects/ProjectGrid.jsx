import React, { useEffect, useId, useState } from "react";
import Card from "@/components/ui/Card";
import Dropdown from "@/components/ui/Dropdown";
import { Icon } from "@iconify/react";
// import menu form headless ui
import { Menu } from "@headlessui/react";

import ProgressBar from "@/components/ui/ProgressBar";
import {
  editCardModal,
  openModal,
  removeProject,
  updateProject,
} from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button.jsx";
import "./style.scss";
import { ModalOpenTrafficWindow } from "@/pages/components/redisignedComponents/TrafficDetail.jsx";
import Icons from "@/pages/icons.jsx";

const ProjectGrid = ({ project }) => {
  const {
    name,
    progress,
    status,
    members,
    assignee,
    des,
    startDate,
    endDate,
    iconTitle,
    count,
    registerCount,
    color,
    spend,
    surname,
    undescribe,
    countLinks,
    groupName,
  } = project;

  const nameOLD = useSelector((state) => state.project.projects[0].name);

  const dispatch = useDispatch();

  const [start, setStart] = useState(new Date(startDate));
  const [end, setEnd] = useState(new Date(endDate));
  const [totaldays, setTotaldays] = useState(0);

  useEffect(() => {
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setTotaldays(diffDays);
  }, [start, end]);

  const id = useId();

  const navigate = useNavigate();
  // handleClick to view project single page
  const handleClick = (project) => {
    navigate(`/traffic/${project.id}`);
  };

  const handleChangeInputForm = (e) => {
    const updatedName = e.target.value;
    dispatch(editCardModal(updatedName));
  };

  const handleChangeRoute = () => {
    navigate(`/traffic/${project.id}`);
  };

  const openModalChangeData = () => {
    dispatch(openModal(true));
  };

  return (
    <div className="card-body p-4">
      <Card>
        <header className="flex justify-between items-end">
          <div className="flex space-x-4 items-center rtl:space-x-reverse">
            <div className="flex-none">
              <div className="h-10 w-10 flex items-center justify-center">
                {/*{name.charAt(0) + name.charAt(1)}*/}
                <img
                  src={iconTitle}
                  alt=""
                  className="object-cover rounded-full"
                />
              </div>
            </div>

            <div className="font-medium text-base leading-6">
              <div className="dark:text-slate-200 text-slate-900 max-w-[160px] truncate">
                {name}
              </div>
            </div>
          </div>
          <div>
            <Dropdown
              classMenuItems=" w-[130px]"
              label={
                <span className="text-lg inline-flex flex-col items-center justify-center h-8 w-8 rounded-full bg-gray-500-f7 dark:bg-slate-900 dark:text-slate-400">
                  <Icon icon="heroicons-outline:dots-vertical" />
                </span>
              }
            >
              <div>
                <Menu.Item onClick={() => handleClick(project)}>
                  <div
                    className="hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center
                     capitalize rtl:space-x-reverse"
                  >
                    <span className="text-base">
                      <Icon icon="heroicons:eye" />
                    </span>
                    <span>View</span>
                  </div>
                </Menu.Item>
                <Menu.Item onClick={() => dispatch(updateProject(project))}>
                  <div
                    className="hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center
                     capitalize rtl:space-x-reverse"
                  >
                    <span className="text-base">
                      <Icon icon="heroicons-outline:pencil-alt" />
                    </span>
                    <span>Edit</span>
                  </div>
                </Menu.Item>
                <Menu.Item onClick={() => dispatch(removeProject(project.id))}>
                  <div
                    className="hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                   w-full border-b border-b-gray-500 border-opacity-10   px-4 py-2 text-sm dark:text-slate-300  last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex  space-x-2 items-center
                     capitalize rtl:space-x-reverse"
                  >
                    <span className="text-base">
                      <Icon icon="heroicons-outline:trash" />
                    </span>
                    <span>Delete</span>
                  </div>
                </Menu.Item>
              </div>
            </Dropdown>
          </div>
        </header>
        {/* description */}
        <div className="flex flex-row justify-between">
          <div className="text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8 font-semibold mt-[-10]">
            {des}
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8 justify-end font-semibold">
            {`отписок: ${undescribe}`}
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8 font-bold text-xl">
            {count}
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8 absolute">
            <br />
            Чистая прибыль
          </div>

          <div className=" text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8 justify-end font-semibold text-xl relative">
            {count}
            <div className="text-sm pt-4 pb-8 justify-end absolute top-5 ">
              {groupName}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8 font-semibold">
            {`Регистраций: ${registerCount}`}
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8 justify-end ">
            {`CPA : ${count}`}
          </div>
        </div>
        <ProgressBar
          value={progress}
          className="bg-primary-500"
          gamma={color}
        />
        <div className="flex flex-row justify-between">
          <div className="relative m-1 p-6">
            {/* assignee */}
            <div className="flex flex-row justify-between">
              <div className="text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8 font-semibold">
                {`Количество ссылок: ${countLinks}`}
              </div>
              <div className="flex text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8 justify-end rounded-lg text-orange-700 mx-5 font-bold">
                <Icon
                  style={{ marginTop: "2px" }}
                  icon="heroicons-outline:credit-card"
                />
                {`Потрачено: ${spend}`}
              </div>
              <div className="traffic-details__cards">
                <Button
                  text="изменить"
                  changeColor="#feefe9"
                  onClick={openModalChangeData}
                  color={"black"}
                />
                <Button
                  text="ссылки"
                  onClick={handleChangeRoute}
                  changeColor="#4669fa"
                />
              </div>

              <ModalOpenTrafficWindow text="изменить">
                <div>
                  <input
                    type="text"
                    placeholder="вы пытаетесь изменить name"
                    value={nameOLD}
                    onChange={handleChangeInputForm}
                  />
                </div>
              </ModalOpenTrafficWindow>
              {/*<div className="flex justify-start -space-x-1.5 rtl:space-x-reverse">*/}
              {/*  {assignee?.map((user, userIndex) => (*/}
              {/*    <div*/}
              {/*      className="h-6 w-6 rounded-full ring-1 ring-slate-100"*/}
              {/*      key={userIndex}*/}
              {/*    >*/}
              {/*      <img*/}
              {/*        src={user.image}*/}
              {/*        alt={user.label}*/}
              {/*        className="w-full h-full rounded-full"*/}
              {/*      />*/}
              {/*    </div>*/}
              {/*  ))}*/}
              {/*  <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center">*/}
              {/*    +2*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>

            {/* total date */}
            {/*<div className="ltr:text-right rtl:text-left">*/}
            {/*  <span className="inline-flex items-center space-x-1 bg-danger-500 bg-opacity-[0.16] text-danger-500 text-xs font-normal px-2 py-1 rounded-full rtl:space-x-reverse">*/}
            {/*    <span>*/}
            {/*      {" "}*/}
            {/*      <Icon icon="heroicons-outline:clock" />*/}
            {/*    </span>*/}
            {/*    <span>{totaldays}</span>*/}
            {/*  </span>*/}
            {/*</div>*/}
          </div>
        </div>

        {/* assignee */}
        {/*<div className="table-info">*/}
        {/*  /!* start date *!/*/}
        {/*  <div className="flex">*/}
        {/*    <span className="block date-text">{count}</span>*/}
        {/*    <span className="block date-label">Чистая прибыль</span>*/}
        {/*  </div>*/}
        {/*  /!* end date *!/*/}
        {/*  <div>*/}
        {/*    /!*<span className="block date-text">{registerCount}</span>*!/*/}
        {/*    <span className="block date-label">{`CPA:${count}`}</span>*/}
        {/*  </div>*/}
        {/*  <div>*/}
        {/*    <span className="block date-text">{`регистраций: ${registerCount}`}</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/* progress bar */}

        {/* assignee and total date */}
      </Card>
    </div>
  );
};

export default ProjectGrid;
