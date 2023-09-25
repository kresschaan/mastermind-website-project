import {
    useStripe,
    useElements,
    PaymentElement,
    CardElement,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { setRegister } from "../store/index";

const CheckoutForm = ({ clientSecret, stripePromise, paymentID }) => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();

    const isRegistered = () => {
        localStorage.setItem("isRegistered", true);
    };

    const handlePayment = async (e) => {
        e.preventDefault();

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
                    return_url: "http://localhost:5173/success",
                    // return_url:
                    //     "https://mastermind-website-project.vercel.app/success",
                },
            });

            if (result.error) {
                // Show error to your customer (for example, payment details incomplete)
                console.log(result.error.message);
            } else {
                // Your customer will be redirected to your `return_url`. For some payment
                // methods like iDEAL, your customer will be redirected to an intermediate
                // site first to authorize the payment, then redirected to the `return_url`.
            }
        } catch (error) {
            // Handle errors here
            console.error("Mutation error:", error);
        }
    };

    return (
        <form
            className="w-8/12 p-20 bg-white/90 rounded-lg shadow-md lg:rounded-none lg:shadow-none"
            onSubmit={handlePayment}
        >
            <PaymentElement />
            <button
                className="bg-secondary-1 text-white rounded-[8px] border-2 h-12 px-16 mt-10 w-full hover:cursor-pointer"
                disabled={!stripe}
            >
                Submit
            </button>
        </form>
    );
};

export default CheckoutForm;
