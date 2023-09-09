import aboutImg from "../assets/images/masterclass-about-section.jpg";

function About() {
    return (
        <div id="about">
            <img className="" src={aboutImg} alt="" />
            <div className="flex flex-col text-center md:absolute max-w-2xl z-10 bg-white p-10 lg:translate-x-[40rem] lg:translate-y-[20rem]">
                <h1 className="font-serif text-4xl pb-2">
                    What is the Mastermind?
                </h1>
                <h2 className="pb-5 font-serif">Meet & Learn from Experts</h2>
                <p className="pb-5 text-justify font-serif">
                    The Mastermind Experience is a hub of collective
                    intelligence and boundless inspiration. Our platform is
                    designed for those who crave the exhilarating pursuit of
                    knowledge, innovation, and personal growth.
                </p>
                <p className="pb-5 text-justify font-serif">
                    At Mastermind, we believe that the most extraordinary
                    breakthroughs happen when brilliant minds converge.
                    It&apos;s a space where diverse perspectives interweave,
                    ideas collide, and the seeds of innovation take root.
                </p>
                <p className="pb-5 text-justify font-serif">
                    Imagine engaging in dynamic discussions with thought
                    leaders, visionaries, and experts from a plethora of fields,
                    all driven by the common goal of pushing the boundaries of
                    what&apos;s possible.
                </p>
            </div>
        </div>
    );
}

export default About;
