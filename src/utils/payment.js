import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";


export function Payment(price,email,phone,name) {
  const config = {
    public_key: "FLWPUBK_TEST-831785520d91c4132b0997dda1a0d8ec-X",
    tx_ref: Date.now(),
    amount: price,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    text: "Book Now",
    customizations: {
      title: "Fruity",
      description: "Payment for therapy",
      logo: "https://res.cloudinary.com/duoepyh8c/image/upload/v1691543394/grn8opzmzaqvwpzyctpe.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = () => {
    handleFlutterPayment({
      callback: async (response) => {
        console.log(response);
        if (response.status === "successful") {
          window.location.href = "/";
       
        } else {
          alert("Transaction fail");
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };
  return handlePayment;
}
