import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import checkoutImg from "../assets/images/mastermind-checkout.jpg";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import axios from "axios";

function Checkout() {
    // const baseURL = "http://localhost:3010/";
    const baseURL = "https://mastermind-server.onrender.com/";
    const navigate = useNavigate();
    const [clientSecret, setClientSecret] = useState("");
    const [paymentID, setPaymentID] = useState("");

    const stripePromise = loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    );

    const handleConfirm = () => {
        navigate("/success");
    };

    useEffect(() => {
        const fetchClientSecret = async () => {
            try {
                axios
                    .post(`${baseURL}create-payment-intent`, {
                        amount: 50,
                    })
                    .then((response) => {
                        setClientSecret(response.data.client_secret);
                        setPaymentID(response.data.id);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchClientSecret();
    }, []);

    const getAmount = useSelector((state) => {
        return state.checkout;
    });

    const options = {
        // passing the client secret obtained from the server
        clientSecret: clientSecret,
    };

    return (
        <div>
            {clientSecret && (
                <div className="flex h-screen flex-col md:flex-row">
                    <div className="flex flex-1 items-center">
                        <img
                            className="relative h-full w-full object-cover"
                            src={checkoutImg}
                            alt="Checkout - Mastermind"
                            draggable="false"
                            loading="lazy"
                        />
                    </div>

                    <div className="absolute flex h-screen w-full flex-1 flex-col items-center justify-center lg:relative">
                        <Elements stripe={stripePromise} options={options}>
                            <CheckoutForm
                                clientSecret={clientSecret}
                                stripePromise={stripePromise}
                                paymentID={paymentID}
                            ></CheckoutForm>
                        </Elements>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;
