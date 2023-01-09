import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "./userMailValidations";

export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const intialValues = {
    user_name: "",
    subject: "",
    email: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: intialValues,
    mode: "all",
  });

  const onSubmit = (valores) => {
    setIsSending(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        valores,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Thanks for your email!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSending(false);
          reset();
        },
        (err) => {
          toast.error("Ups.. There is a problem :)", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
          });
          console.log("FAILED...", err);
          setIsSending(false);
        }
      );
  };

  return (
    <div className=" justisfy-between f-full flex w-full flex-col  items-start">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <form
        className="mx-auto flex w-[75%] flex-col rounded-2xl bg-myYellow-300 p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flexB">
          <label htmlFor="user_name" className="inline-block min-w-[70px] ">
            Nombre:
          </label>
          <input
            {...register("user_name")}
            placeholder="Nombre:"
            className=" flex-1 rounded-lg border-b-4 border-transparent bg-myYellow-100 py-[.3rem] px-2 outline-none transition duration-500 ease-in-out focus:border-myYellow-500 "
          />
        </div>
        <p className="mb-4 pt-0 pl-[70px] text-sm text-error">
          {errors.user_name?.message}
        </p>
        <div className="flexB">
          <label htmlFor="user_name" className="inline-block min-w-[70px] ">
            Asunto:
          </label>
          <input
            {...register("subject")}
            placeholder="Asunto:"
            className="flex-1 rounded-lg border-b-4 border-transparent bg-myYellow-100 py-[.3rem] px-2 outline-none transition duration-500 ease-in-out focus:border-myYellow-500 "
          />
        </div>
        <p className="mb-4 pt-0 pl-[70px] text-sm text-error">
          {errors.subject?.message}
        </p>
        <div className="flexB">
          <label htmlFor="user_name" className="inline-block min-w-[70px] ">
            Email:
          </label>
          <input
            {...register("email")}
            placeholder="Email:"
            className="flex-1 rounded-lg border-b-4 border-transparent bg-myYellow-100 py-[.3rem] px-2 outline-none transition duration-500 ease-in-out focus:border-myYellow-500 "
          />
        </div>
        <p className="mb-4 pt-0 pl-[70px] text-sm text-error">
          {errors.email?.message}
        </p>
        <div className="flexB">
          <label htmlFor="user_name" className="inline-block min-w-[70px] ">
            Mensaje:
          </label>
          <textarea
            {...register("message")}
            placeholder="Mensage"
            className="flex-1 rounded-lg border-b-4 border-transparent bg-myYellow-100 py-[.3rem] px-2 outline-none transition duration-500 ease-in-out focus:border-myYellow-500 "
          ></textarea>
        </div>
        <p className="mb-4 pt-0 pl-[70px] text-sm text-error">
          {errors.message?.message}
        </p>
        {!isSending && (
          <button
            className=" mx-auto mt-8 block cursor-pointer rounded border border-myBlack bg-myBlack py-2 px-6 text-myWhite hover:bg-myWhite  hover:text-myBlack"
            type="submit"
          >
            Enviar
          </button>
        )}
      </form>
    </div>
  );
};
