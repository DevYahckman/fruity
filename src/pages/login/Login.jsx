import React, { useState } from "react";
// import styles from './login.module.scss'
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
      <div className="bg-white w-10/12 md:w-3/6 rounded-lg shadow-xl h-1/2 p-5 ">
        <form action="" onSubmit={formik.handleSubmit}>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className={` 
               mb-5 px-2 py-4 md:px-4 text-lightColor md:w-[22rem] lg:w-[40rem]  w-full text-xl rounded 
                border-lightWhite 
                focus:border-primary focus:outline-none border-[1px]`}
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
              className={` 
               mb-5 px-2 py-4 md:px-4 text-lightColor md:w-[22rem] lg:w-[40rem]  w-full text-xl rounded 
                border-lightWhite 
                focus:border-primary focus:outline-none border-[1px]`}
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
