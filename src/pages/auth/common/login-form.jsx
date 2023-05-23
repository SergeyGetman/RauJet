import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/ui/Checkbox";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleLogin } from "./store";
import { toast } from "react-toastify";
import { rest } from "../../../rest.js";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
const LoginForm = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);
  const {
    register,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
    //
    mode: "all",
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (user) {
      dispatch(handleLogin(true));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      toast.error("Invalid credentials", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const [getDataUserForm, setGetDataUserForm] = useState({
    login: "",
    pass: "",
  });

  const handleChangeEmailForm = (e) => {
    setGetDataUserForm({ ...getDataUserForm, login: e.target.value });
  };

  const handleChangePasswordForm = (e) => {
    setGetDataUserForm({ ...getDataUserForm, pass: e.target.value });
  };

  const [answerFromServer, setAnswerFromServer] = useState(
    localStorage.answerFromServer || null
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const checkAnswerDataServer = (dataResponse) => {
    if (dataResponse.result === "ok") {
      alert("Register successfully");
      dispatch(handleLogin(true));
      navigate("/panel-dashboard");
    }
  };

  const handleSubmit = async (event) => {
    event?.preventDefault();

    setFormSubmitted(true);

    try {
      const response = await rest.getAuthAvtorized(getDataUserForm);
      checkAnswerDataServer(response);
      localStorage.setItem("answerFromServer", JSON.stringify(response));
    } catch (error) {
      console.error(error);
    }
  };

  const [checked, setChecked] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <Textinput
        name="email"
        label="email"
        defaultValue={getDataUserForm.login}
        type="text"
        register={register}
        onChange={handleChangeEmailForm}
      />
      <Textinput
        name="password"
        label="passwrod"
        type="password"
        defaultValue={getDataUserForm.pass}
        register={register}
        onChange={handleChangePasswordForm}
      />
      <div className="flex justify-between">
        {/*<Checkbox*/}
        {/*  value={checked}*/}
        {/*  onChange={() => setChecked(!checked)}*/}
        {/*  label="Keep me signed in"*/}
        {/*/>*/}
        {/*<Link*/}
        {/*  to="/forgot-password"*/}
        {/*  className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"*/}
        {/*>*/}
        {/*  Forgot Password?{" "}*/}
        {/*</Link>*/}
      </div>

      <button className="btn btn-dark block w-full text-center">Sign in</button>
    </form>
  );
};

export default LoginForm;
