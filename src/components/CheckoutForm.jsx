import {
    useStripe,
    useElements,
    PaymentElement,
    CardElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ clientSecret, stripePromise, paymentID }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (e) => {
        e.preventDefault();

        try {
            const stripe = await stripePromise;

            if (!stripe || !elements) {
                // Stripe.js hasn't yet loaded.
                // Make sure to disable form submission until Stripe.js has loaded.
                return;
            }

            const result = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
                    return_url: "http://localhost:5173/success",
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
        <form onSubmit={handlePayment}>
            <PaymentElement />
            <button disabled={!stripe}>Submit</button>
        </form>
    );
};

export default CheckoutForm;
