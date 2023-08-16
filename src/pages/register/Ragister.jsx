import React from "react";
import img from "../../assets/news-bg-1.jpg";
import styles from "./register.module.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import http from "../../services/httpService";
import config from "../../config.json";

function Ragister(props) {
  const validateUser = () => {
    name: Yup.object({
      name: Yup.string().required("Enter ur full name"),
      email: Yup.string().required("Supply ur mail").email(),
      phone: Yup.number().required("Enter ur valid phone number"),
      password: Yup.string().required("Enter ur password"),
      address: Yup.string().required("enter ur shipping address"),
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      address: "",
    },
    validationSchema: validateUser(),

    onSubmit: async (values) => {
      try {
        const res = await http.post(`${config.apiUrl}/users`, values);
        localStorage.setItem("token", res.headers["x-auth-token"]);
        window.location = "/";
    

        formik.handleReset();
      } catch (error) {
        if (error.response && error.response.status === 400) {
          formik.errors.email = error.response.data;
        }
      }
    },
  });

  return (
    <div className={`${styles.reg} px-7 py-5 mb-8 md:px-20 lg:px-56 `}>
      <div className="">
        <p className="px-2 py-4 md:px-4  bg-lightWhite text-deepBlack font-bold text-xl w-full">
          SignUp
        </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className={`${styles.input} mb-5 px-2 py-4 md:px-4 text-lightColor w-full text-xl rounded`}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className={"text-sm text-red-500"}>{formik.errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className={`${styles.input} mb-5 px-2 py-4 md:px-4 text-lightColor w-full text-xl rounded`}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className={"text-sm text-red-500"}>{formik.errors.email}</p>
            )}
          </div>
          <div>
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className={`${styles.input} mb-5 px-2 py-4 md:px-4 text-lightColor w-full text-xl rounded`}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className={"text-sm text-red-500"}>{formik.errors.phone}</p>
            )}
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className={`${styles.input} mb-5 px-2 py-4 md:px-4 text-lightColor w-full text-xl rounded`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className={"text-sm text-red-500"}>{formik.errors.password}</p>
            )}
          </div>
          <div>
            <textarea
              id=""
              name="address"
              rows="4"
              cols="50"
              placeholder="Shipping Address"
              className={`${styles.input} mb-5 px-2 py-4 md:px-4 text-lightColor w-full text-xl rounded`}
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.address && formik.errors.address && (
              <p className={"text-sm text-red-500"}>{formik.errors.address}</p>
            )}
          </div>
          <div className="text-center ">
            <button
              type="submit"
              className=" bg-primary px-4 py-3 rounded-lg hover:bg-deepBlack   border-none cursor-pointer text-xl text-white no-underline font-bold"
            >
              {" "}
              Sihnup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Ragister;
