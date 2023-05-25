import React, { useEffect, useState } from "react";
import useWidth from "@/hooks/useWidth.js";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Button from "@/components/ui/Button.jsx";
import { openModal, toggleAddModal } from "@/pages/app/projects/store.js";
import GridLoading from "@/components/skeleton/Grid.jsx";
import TableLoading from "@/components/skeleton/Table.jsx";
import ProjectGrid from "@/pages/app/projects/ProjectGrid.jsx";
import ProjectList from "@/pages/app/projects/ProjectList.jsx";
import AddProject from "@/pages/app/projects/AddProject.jsx";
import EditProject from "@/pages/app/projects/EditProject.jsx";
import "./style.scss";
import { ModalOpenTrafficWindow } from "@/pages/components/redisignedComponents/TrafficDetail.jsx";

const Traffic = () => {
  const [filler, setfiller] = useState("grid");
  const { width, breakpoints } = useWidth();
  const [isLoaded, setIsLoaded] = useState(false);

  const { projects } = useSelector((state) => state.project);
  const isOpen = useSelector((state) => state.project.openProjectModal);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => {
      setIsLoaded(false);
    }, 1500);
  }, [filler]);

  return (
    <div className="traffic">
      {`Список активных типов трафика ${projects?.length}`}
      <div className="traffic__btn">
        <Button
          icon="heroicons-outline:plus"
          text="Add Project"
          className="btn-dark dark:bg-slate-800  h-min text-sm font-normal"
          iconClass=" text-lg"
          onClick={() => dispatch(openModal(true))}
        >
          добавить новый
        </Button>
      </div>

      <ModalOpenTrafficWindow text="добавить новый" labelText="new">
        <div>
          <input type="text" placeholder="Название трафика:" />
        </div>{" "}
        <div>
          <input type="text" placeholder="Создания типа трафика для:" />
        </div>
        <div>
          <Button text="создать" changeColor="#4a9dd5" />
        </div>{" "}
        <div>
          <Button text="назад" changeColor="#c34736" />
        </div>
      </ModalOpenTrafficWindow>

      <ToastContainer />
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div
          className={`${
            width < breakpoints.md ? "space-x-rb" : ""
          } md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse`}
        ></div>
      </div>
      {isLoaded && filler === "grid" && (
        <GridLoading count={projects?.length} />
      )}
      {isLoaded && filler === "list" && (
        <TableLoading count={projects?.length} />
      )}
      {filler === "grid" && !isLoaded && (
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {projects.map((project, projectIndex) => (
            <ProjectGrid project={project} key={projectIndex} />
          ))}
        </div>
      )}

      {filler === "list" && !isLoaded && (
        <div>
          <ProjectList projects={projects} />
        </div>
      )}
      {/*<AddProject />*/}
      <EditProject />
    </div>
  );
};

export default Traffic;
