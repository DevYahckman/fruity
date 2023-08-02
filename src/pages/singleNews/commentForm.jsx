import React from "react";
// import { InputForm, TextArea } from "../../utils/form";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CommonButton } from "../../utils/buttons";

function CommentForm(props) {
  const validateComment = () => {
    return Yup.object({
      name: Yup.string().required("Enter ur name please"),
      email: Yup.string().required("Enter ur email please").email(),
      message: Yup.string().required("Tell us something"),
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: validateComment(),

    onSubmit: (values) => {
      console.log(values);
      formik.handleReset();
    },
  });

  return (
    <div className="mt-12">
      <p className="text-4xl font-semibold">Leave a comment</p>
      {/* < InputForm placeholder='Username' row='7'/> */}

      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-8 w-full">
            <div>
              <input
                className={` h-7 
        shadow appearance-none
          border rounded w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none 
        focus:shadow-outline`}
                name="name"
                type="text"
                placeholder={"placeholder"}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.name && formik.errors.name && (
                <p className={""}>{formik.errors.name}</p>
              )}
            </div>
            <div>
              <input
                className={` h-7 
       
        shadow appearance-none
      border rounded w-full py-2 px-3
        text-gray-700 leading-tight focus:outline-none 
        focus:shadow-outline`}
                name="email"
                type="text"
                placeholder={"placeholder"}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className={""}>{formik.errors.email}</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <textarea
              name="message"
              id="message"
              rows="7"
              className="block p-2.5 w-full 
        text-sm text-gray-900
        shadow appearance-none
         rounded-lg border focus:outline-none 
         focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className={""}>{formik.errors.message}</p>
            )}
          </div>

          {/* <CommonButton name="Send" /> */}

          <button
            type="submit"
            className="hover:bg-black mt-5 hover:text-primary font-semibold mr-10 rounded-full bg-primary text-white py-3 px-7 no-underline "
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
