import React, { useState } from "react";
import styles from "./login.module.scss";
import bg from "../../assets/news-bg-1.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import http from "../../services/httpService";
import config from "../../config.json";
function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const validateUser = () => {
    user: Yup.object({
      email: Yup.string().required("Enter ur mail ").email(),
      password: Yup.string().required("Enter correct password"),
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateUser(),
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const { data: jwt } = await http.post(`${config.apiUrl}/auth`, values);
        localStorage.setItem("token", jwt);

        window.location = "/";
        formik.handleReset();
        console.log(jwt);
        setIsLoading(false);
      } catch (error) {
        formik.errors.email = error.response.data;
        setIsLoading(false);
      }
    },
  });
  return (
    <div className={` h-screen flex justify-center pt-36  md:pt-32 `}>
      <div className="px-7 py-5 mb-8 md:px-20 lg:px-56   ">
        <p className="px-2 py-4 md:px-4  bg-lightWhite text-deepBlack font-bold text-xl w-full">
          Login
        </p>
        <form action="" onSubmit={formik.handleSubmit}>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className={` ${styles.input} focus:border-primary focus:outline-none
              mb-5 px-2 py-4 md:px-4 text-lightColor w-full text-xl rounded`}
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
              name="password"
              type="password"
              placeholder="Password"
              className={`  ${styles.input} focus:border-primary focus:outline-none
              mb-5 px-2 py-4 md:px-4 text-lightColor w-full text-xl rounded`}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className={"text-sm text-red-500"}>{formik.errors.password}</p>
            )}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="bg-primary cursor-pointer hover:bg-deepBlack hover:text-white rounded text-white font-semibold border-none px-10 py-4"
          >
            {" "}
            {isLoading ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
