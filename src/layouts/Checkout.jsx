import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import checkoutImg from "../assets/images/mastermind-checkout.jpg";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { usePaymentMutation } from "../store";
import CheckoutForm from "../components/CheckoutForm";
import axios from "axios";

function Checkout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [clientSecret, setClientSecret] = useState("");
    const [paymentID, setPaymentID] = useState("");

    const [payment, { isLoading, isError, error, data }] = usePaymentMutation();

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
                    .post("http://localhost:3010/create-payment-intent", {
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

    console.log(clientSecret);

    return (
        <div>
            {clientSecret && (
                <div className="flex flex-col md:flex-row h-screen">
                    <div className="flex flex-1 items-center">
                        <img
                            className="object-cover relative h-full w-full"
                            src={checkoutImg}
                            alt=""
                        />
                    </div>

                    <div className="flex flex-col flex-1 justify-center items-center absolute lg:relative w-full h-screen">
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
