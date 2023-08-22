import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

import axios from 'axios'; 


export async function sendEmail(email) {
  const apiKey = process.env.REACT_APP_SENDMAIL_API_KEY; 
  const apiBaseUrl = 'https://api.sendinblue.com/v3';

  const emailData = {
    sender: { email: 'adeniranyaqubtest@gmail.com', name: 'Yahckman' },
    to: [{ email: email }],
    subject: 'Payment Successful',
    htmlContent: '<p>Your payment was successful. We will process your order and deliver your goods to you soon. Thank you for your purchase!</p>'
  };

  try {
    const response = await axios.post(`${apiBaseUrl}/smtp/email`, emailData, {
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json'
      }
    });

    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error.response.data);
  }
}

export function Payment(price,email,phone,name) {
  const config = {
    public_key: process.env.REACT_APP_FLUTTER_API_KEY,
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
          await sendEmail(email);
          window.location.href = "/";
       
        } else {
          alert("Transaction fail");
        }
        closePaymentModal(); 
      },
      onClose: () => {},
    });
  };
  return handlePayment;
}
