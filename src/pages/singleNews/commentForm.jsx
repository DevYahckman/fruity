import React from "react";
// import { InputForm, TextArea } from "../../utils/form";
import { useFormik } from "formik";
import * as Yup from "yup";


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
          <div className="lg:grid lg:space-x-6 grid-cols-2 lg:gap-8 w-full">
            <div>
              <input
                className={` focus:border-primary focus:outline-none border-[1px] mb-5 px-2 py-4 md:px-4 text-lightColor w-full text-xl rounded`}
                name="name"
                type="text"
                placeholder={"placeholder"}
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
                className={`focus:border-primary focus:outline-none border-[1px] mb-5 px-2 py-4 md:px-4 text-lightColor w-full text-xl rounded`}
                name="email"
                type="text"
                placeholder={"placeholder"}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className={"text-sm text-red-500"}>{formik.errors.email}</p>
              )}
            </div>
          </div>
          <div className="mt-4">
            <textarea
              name="message"
              id="message"
              rows="7"
              className="focus:border-primary focus:outline-none border-[1px] mb-5 px-2 py-4 md:px-4 text-lightColor w-full text-xl rounded"
              placeholder="Write your thoughts here..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className={"text-sm text-red-500"}>{formik.errors.message}</p>
            )}
          </div>

          {/* <CommonButton name="Send" /> */}

          <button
            type="submit"
            className="hover:bg-black mt-5 hover:text-primary font-semibold mr-10 rounded-full bg-primary text-white py-3 px-7 no-underline border-none"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
