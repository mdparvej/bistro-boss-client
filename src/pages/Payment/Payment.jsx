import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

import ChechoutFrom from "./ChechoutFrom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_Pk)
const Payment = () => {
    return (
        <div>
            <SectionTitle titleHead={"Payment"} titleBody={"please pay to eat"}
            ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <ChechoutFrom></ChechoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;