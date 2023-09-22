
                    {/* <div className="flex flex-col flex-1 justify-center items-center absolute lg:relative w-full h-screen">
                <form
                    className="p-20 bg-white/90 rounded-lg shadow-md lg:rounded-none lg:shadow-none"
                    action=""
                    onSubmit={handleSubmit(handlePayment)}
                >
                    <h1 className="font-avernir-heavy font-bold text-black z-10 mb-10 text-4xl tracking-wider lg:text-4xl ">
                        Checkout
                    </h1>
                    <div className="flex flex-col mb-6">
                        <label
                            className="font-serif mb-2 font-bold text-sm text-black lg:text-primary-5 lg:font-normal"
                            htmlFor="cardNumber"
                        >
                            Card Number
                        </label>
                        <input
                            id="cardNumber"
                            className="bg-inherit border-b border-black p-2 lg:placeholder-gray-300 lg:border-gray-300"
                            type="number"
                            placeholder="0000 0000 0000 0000"
                            maxLength="16"
                            {...register("cardNumber", {
                                required: true,
                                maxLength: 16,
                            })}
                        ></input>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label
                            className="font-serif mb-2 font-bold text-black lg:text-primary-5 text-sm lg:font-normal"
                            htmlFor="fullName"
                        >
                            Cardholder Name
                        </label>
                        <input
                            id="fullName"
                            className="bg-inherit border-b border-black p-2 lg:placeholder-gray-300 lg:border-gray-300"
                            type="text"
                            placeholder="Full Name"
                            {...register("fullName", {
                                required: true,
                            })}
                        ></input>
                    </div>

                    <div className="flex flex-col mb-6">
                        <div className="">
                            <label
                                className="font-serif mb-2 font-bold text-black lg:text-primary-5 text-sm lg:font-normal"
                                htmlFor=""
                            >
                                Expiration Date
                            </label>
                        </div>
                        <div className="flex flex-row">
                            <input
                                id="month"
                                className="bg-inherit border-b border-black p-2 w-6/12 lg:placeholder-gray-300 lg:border-gray-300"
                                type="text"
                                placeholder="MM"
                                {...register("month", {
                                    required: true,
                                    maxLength: 2,
                                })}
                            ></input>
                            <input
                                id="year"
                                className="bg-inherit border-b border-black w-6/12 lg:placeholder-gray-300 lg:border-gray-300"
                                type="text"
                                placeholder="YYYY"
                                {...register("year", {
                                    required: true,
                                    maxLength: 4,
                                })}
                            ></input>
                        </div>
                    </div>

                    <div className="flex flex-col mb-6">
                        <label
                            className="font-serif mb-2 font-bold text-sm text-black lg:text-primary-5 lg:font-normal"
                            htmlFor="cvc"
                        >
                            CVC
                        </label>
                        <input
                            id="cvc"
                            className="bg-inherit border-b border-black p-2 lg:placeholder-gray-300 lg:border-gray-300"
                            type="text"
                            placeholder="000"
                            {...register("cvc", {
                                required: true,
                                maxLength: 3,
                            })}
                        ></input>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center">
                        <input
                            id="submitCard"
                            type="submit"
                            className="form-button bg-secondary-1 text-white rounded-[8px] border-2 h-12 mb-6 mt-10 w-2/4 hover:cursor-pointer"
                            value="Confirm"
                        ></input>

                        <div className="flex flex-row ">
                            <input
                                type="checkbox"
                                className="font-light pr-1"
                            ></input>
                            <p className="font-light pl-2">
                                Remember card information
                            </p>
                        </div>
                    </div>
                </form>
            </div> */}