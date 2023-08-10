
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import nodemailer from 'nodemailer'


export function Payment(price){
    
  const config = {
    public_key: 'FLWPUBK_TEST-831785520d91c4132b0997dda1a0d8ec-X',
    tx_ref: Date.now(),
    amount: price,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: 'adeniran@gmail.com',
      phone_number: '08146283237',
      name: 'Adeniran Yaqub',
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
          try{
            const transporter= nodemailer.createTransport({
              service:'Gmail',
              auth:{
                user: 'adeniranyaqub565@gmail.com',
                pass: 'adeniran8146283237'
              }
            })
            const mailOptions ={
              from:'adeniranyaqub565@gmail.com',
              to:'adeniranajibade2014@gmail.com',
              subject:'Payment Successful',
              text: `u have successfully paid ${price} we wil get your good delivered soon`
            }

            await transporter.sendMail(mailOptions)
            window.location.href = "/";
          }catch(err){
            console.error("Error sending email:", err);
            alert("Transaction successful, but email could not be sent.")
          }

         
        } else {
          alert("Transaction fail");
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };
return handlePayment
}