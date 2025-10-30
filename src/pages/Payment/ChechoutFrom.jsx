import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from "react-router";
const ChechoutFrom = () => {
  const [error,setError] = useState('');
  const navigate = useNavigate();
  const[clientSecret,setClientSecret] = useState('');
  const [transactionId,setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxios();
  const {user} = useAuth();
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((total,item) => total + item.price ,0)
  useEffect(() => {
    if(totalPrice > 0){
      axiosSecure.post('/create-payment-intent',{price: totalPrice})
    .then(res => {
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
    }

  },[axiosSecure,totalPrice])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }
    const {paymentIntent,error : confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method : {
        card: card,
        billing_details: {
          email : user?.email || 'anonymous',
          name : user?.displayName
        }
      }
    })
    if(confirmError){
      console.log('confirm error')
    }
    else{
      console.log('payment intent', paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);
        console.log('transaction id', transactionId);
        const payment = {
          email: user.email,
          price : totalPrice,
          date: new Date(), // utc date convert use moment js
          cartIds: cart.map(item => item._id),
          menuItemIds: cart.map(item => item.menuId),
          status : 'pending',
          transactionId: `${paymentIntent.id}`
        }
        const res = await axiosSecure.post('/payment', payment);
        console.log('payment',res.data)
        refetch();
        if(res.data?.paymentResult?.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/paymentHistory');
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#000",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red">{error}</p>
    </form>
  );
};

export default ChechoutFrom;
