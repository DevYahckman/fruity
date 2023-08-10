import React from "react";
import Banner from "../../components/banner/banner";
import img from "../../assets/product-img-2.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Payment } from "../../utils/payment";
import { CommonButton } from "../../utils/buttons";

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
  });

  const handlePayment = Payment(formik.values.quantity * 7);

  return (
    <div>
      <div>
        <Banner pageName={"STRAW BERRY "} title={"FRESH AND ORGANIC "} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  p-5 lg:p-20 h-auto">
        <div className="">
          <img src={img} className="w-52 md:w-72" alt="" />
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

            <button
              className="hover:bg-black hover:text-primary font-semibold mr-10 rounded-full bg-primary text-white py-3 px-7 no-underline border-none mt-4 "
              type="submit"
              onClick={handlePayment}
            >
              {" "}
              Buy Now
            </button>
          </form>
        </div>
        <div className="">
          <p className="text-3xl font-bold text-primary"> Description</p>
          <p className="md:text-lg text-base text-lightColor font-medium md:font-semibold">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            possimus reiciendis hic enim earum cupiditate deserunt, modi nam
            dolorum officiis, laudantium neque obcaecati tempore? Reprehenderit
            quisquam sed obcaecati ratione natus. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Nostrum possimus reiciendis hic enim
            earum cupiditate deserunt, modi nam dolorum officiis, laudantium
            neque obcaecati tempore? Reprehenderit quisquam sed obcaecati
            ratione natus. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Nostrum possimus reiciendis hic enim earum cupiditate
            deserunt, modi nam dolorum officiis, laudantium neque obcaecati
            tempore? Reprehenderit quisquam sed obcaecati ratione natus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
