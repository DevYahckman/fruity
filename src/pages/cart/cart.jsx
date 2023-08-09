import React from "react";
import Banner from "../../components/banner/banner";
import img from "../../assets/product-img-2.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";

function Cart(props) {
  const validateNumber = () => {
    return Yup.object({
      quantity: Yup.number().required("supply quantiyi").min(1),
    });
  };

  const formik = useFormik({
    initialValues: {
      quantity: "",
    },
    validationSchema: validateNumber(),
    onSubmit: (values) => {
      console.log(values.quantity *7 );
      console.log(typeof(values.quantity) );
    },
  });
  return (
    <div>
      <div>
        <Banner pageName={"STRAW BERRY "} title={"FRESH AND ORGANIC "} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-20 h-96">
        <div className="">
          <img src={img} className="" width={"400"} alt="" />
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                type="number"
                name="quantity"
                value={formik.values.quantity}
                className="h-10 px-5 text-xl"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.quantity && formik.errors.quantity && (
                <p className={"text-sm text-red-500"}>
                  {formik.errors.quantity}
                </p>
              )}
            </div>

            <button type="submit"> buy now</button>
          </form>
        </div>
        <div>2</div>
      </div>
    </div>
  );
}

export default Cart;
