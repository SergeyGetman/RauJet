import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { toast } from "react-toastify";
import avatar1 from "@/assets/images/avatar/av-1.svg";
import avatar2 from "@/assets/images/avatar/av-2.svg";
import avatar3 from "@/assets/images/avatar/av-3.svg";
import avatar4 from "@/assets/images/avatar/av-4.svg";
import iconCry from "@/assets/images/icons-smile/minus.png";
import iconOk from "@/assets/images/icons-smile/okup.png";
import iconMoney from "@/assets/images/icons-smile/money.png";

export const appProjectSlice = createSlice({
  name: "approject",
  initialState: {
    openProjectModal: false,
    isLoading: null,
    editItem: {},
    editModal: false,
    projects: [
      {
        id: uuidv4(),
        assignee: [
          {
            image: iconCry,
            label: "Mahedi Amin",
          },
          {
            image: iconOk,
            label: "Sovo Haldar",
          },
          {
            image: iconMoney,
            label: "Rakibul Islam",
          },
        ],
        iconTitle: iconCry,
        name: "Test Dev #69",
        surname: "Сергей",
        groupName: "Депозиты",
        spend: "495$",
        des: "Подписок : 6",
        undescribe: "3",
        startDate: "2022-10-03",
        count: "0.12$",
        countLinks: "2",
        registerCount: "1",
        color: "#f1595c",
        endDate: "2022-10-06",
        progress: 75,
        category: [
          {
            value: "team",
            label: "team",
          },
          {
            value: "low",
            label: "low",
          },
        ],
      },
      {
        id: uuidv4(),
        assignee: [
          {
            image: avatar1,
            label: "Mahedi Amin",
          },
          {
            image: avatar2,
            label: "Sovo Haldar",
          },
          {
            image: avatar3,
            label: "Rakibul Islam",
          },
        ],
        iconTitle: iconOk,
        name: "Test Dev #70 ",
        surname: "Олег",
        groupName: "Депозиты",
        spend: "38$",
        des: "Подписок : 2",
        undescribe: "1",
        startDate: "2022-10-03",
        count: "22.12$",
        countLinks: "3",
        registerCount: "4",
        color: "#fa916b",
        endDate: "2022-10-10",
        progress: 50,

        category: [
          {
            value: "team",
            label: "team",
          },
          {
            value: "low",
            label: "low",
          },
        ],
      },
      {
        id: uuidv4(),
        iconTitle: iconMoney,
        assignee: [
          {
            image: avatar1,
            label: "Mahedi Amin",
          },
          {
            image: avatar2,
            label: "Sovo Haldar",
          },
          {
            image: avatar3,
            label: "Rakibul Islam",
          },
        ],
        name: "Test Dev #71",
        surname: "Стелла",
        groupName: "Депозиты",
        spend: "125$",
        des: "Подписок : 0",
        undescribe: "0",
        startDate: "2022-10-03",
        count: "123.00$",
        countLinks: "1",
        registerCount: "3",
        color: "#50c793",
        endDate: "2022-10-10",
        progress: 50,

        category: [
          {
            value: "team",
            label: "team",
          },
          {
            value: "low",
            label: "low",
          },
        ],
      },
    ],
  },
  reducers: {
    openModal: (state, action) => {
      state.openProjectModal = action.payload;
    },
    editCardModal: (state, action) => {
      const updateName = action.payload;

      return {
        ...state,
        projects: state.projects.map((project) => {
          return {
            ...project,
            name: updateName,
          };
        }),
      };
    },

    toggleAddModal: (state, action) => {
      state.openProjectModal = action.payload;
    },
    toggleEditModal: (state, action) => {
      state.editModal = action.payload;
    },
    pushProject: (state, action) => {
      state.projects.unshift(action.payload);

      toast.success("Add Successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    removeProject: (state, action) => {
      state.projects = state.projects.filter(
        (item) => item.id !== action.payload
      );
      toast.warning("Remove Successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
    updateProject: (state, action) => {
      // update project and  store it into editItem when click edit button

      state.editItem = action.payload;
      // toggle edit modal
      state.editModal = !state.editModal;
      // find index
      let index = state.projects.findIndex(
        (item) => item.id === action.payload.id
      );
      // update project
      state.projects.splice(index, 1, {
        id: action.payload.id,
        name: action.payload.name,
        des: action.payload.des,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        assignee: action.payload.assignee,
        progress: action.payload.progress,
        category: action.payload.category,
      });
    },
  },
});

export const {
  openModal,
  editCardModal,
  pushProject,
  toggleAddModal,
  removeProject,
  toggleEditModal,
  updateProject,
} = appProjectSlice.actions;
export default appProjectSlice.reducer;
