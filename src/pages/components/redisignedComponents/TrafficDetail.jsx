import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button.jsx";
import { openModal } from "@/pages/app/projects/store.js";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@/components/ui/Modal.jsx";

export const TrafficDetail = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChangeRoute = () => {
    navigate("/savelink");
  };

  return (
    <div>
      <div className=" space-y-5">
        <div className="grid grid-cols-12 gap-5">
          <Card
            title="About project"
            className="xl:col-span-5 col-span-12 lg:col-span-7 h-full"
          >
            <div>
              <div className="text-base font-medium text-slate-800 dark:text-slate-100 mb-3">
                Background information
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                The Optimistic Website Company - Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercita -tion veniam
                consequat sunt nostrud amet.
              </p>
              <br />
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.The Optimistic Website Company - Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercita -tion veniam
                consequat sunt nostrud amet.
              </p>
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
                <Button onClick={handleChangeRoute}>ПОДРОБНЕЕ</Button>
              </div>
              <Button
                icon="heroicons-outline:plus"
                text="Add Project"
                className="btn-dark dark:bg-slate-800  h-min text-sm font-normal"
                iconClass=" text-lg"
                onClick={() => dispatch(openModal(true))}
              >
                OPEN MODAL
              </Button>
              <ModalOpenTrafficWindow text="Добавить" labelText="новый" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const ModalOpenTrafficWindow = ({ text, labelText, children }) => {
  const isOpen = useSelector((state) => state.project.openProjectModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(openModal(false));
  };

  return (
    <Modal
      activeModal={isOpen}
      onClose={handleClose}
      title={text}
      label={labelText}
      labelClass="btn-outline-dark"
      className="max-w-md"
      footerContent={
        <Button text="добавить" className="btn-dark" onClick={handleClose} />
      }
    >
      {children}
    </Modal>
  );
};
