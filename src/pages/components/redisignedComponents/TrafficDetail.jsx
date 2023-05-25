import React from "react";

import { useNavigate, useParams } from "react-router-dom";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button.jsx";
import { openModal } from "@/pages/app/projects/store.js";
import { useDispatch, useSelector } from "react-redux";
import Modal from "@/components/ui/Modal.jsx";
import "./style.scss";
import flagRu from "@/assets/images/icons-smile/ru.png";
import flagGi from "@/assets/images/icons-smile/ind.png";

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
            title="Создано для Test"
            className="xl:col-span-5 col-span-12 lg:col-span-7 h-full"
          >
            <div className="traffic-detail-icons">
              <img src={flagRu} alt="ru" />
              <img src={flagGi} alt="gi" />
            </div>

            <div>
              <div className="text-base font-medium text-slate-800 dark:text-slate-100 mb-3">
                Test Dev Link
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                https://t.me/+x0q6LjYD4BxjYWMy
              </p>
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
              <div className="traffic-btn">
                <Button onClick={handleChangeRoute}>ПОДРОБНЕЕ</Button>
                <Button
                  icon="heroicons-outline:plus"
                  text="Add Project"
                  className="btn-dark dark:bg-slate-800  h-min text-sm font-normal"
                  iconClass=" text-lg"
                  onClick={() => dispatch(openModal(true))}
                >
                  OPEN MODAL
                </Button>
              </div>

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
