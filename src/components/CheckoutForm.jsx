import {
    useStripe,
    useElements,
    PaymentElement,
    CardElement,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { setRegister } from "../store/index";
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";

const CheckoutForm = ({ clientSecret, stripePromise, paymentID }) => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isRegistered = () => {
        localStorage.setItem("isRegistered", true);
    };

    const submitSpinner = () => {
        setIsSubmitted((prevState) => !prevState);
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        submitSpinner();

        try {
            const stripe = await stripePromise;

            if (!stripe || !elements) {
                // Stripe.js hasn't yet loaded.
                // Make sure to disable form submission until Stripe.js has loaded.
                return;
            }

            isRegistered();

            const result = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
                    // return_url: "http://localhost:5173/success",
                    return_url:
                        "https://mastermind-website-project.vercel.app/success",
                },
            });

            if (result.error) {
                // Show error to your customer (for example, payment details incomplete)
                console.log(result.error.message);
            } else {
                submitSpinner();
            }
        } catch (error) {
            // Handle errors here
            console.error("Mutation error:", error);
        }
    };

    return (
        <form
            className="w-8/12 rounded-lg bg-white/90 p-20 shadow-md lg:rounded-none lg:shadow-none"
            onSubmit={handlePayment}
        >
            <PaymentElement />
            <div className="mt-6 text-sm text-gray-500">
                <p>Demo</p>
                <p>Card Number: 4242 4242 4242 4242</p>
                <p>Expiration: 12/25</p>
                <p>CVC: 242</p>
                <p>Country: Any</p>
            </div>
            <button
                className="mt-10 flex h-12 w-full items-center justify-center rounded-[8px] border-2 bg-secondary-1 px-16 text-white hover:cursor-pointer"
                disabled={!stripe}
            >
                {isSubmitted ? (
                    <ImSpinner3 className="animate-spin text-2xl"></ImSpinner3>
                ) : (
                    "Submit"
                )}
            </button>
        </form>
    );
};

export default CheckoutForm;
