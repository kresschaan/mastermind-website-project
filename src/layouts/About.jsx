import { useRef } from "react";
import aboutImg from "../assets/images/masterclass-about-section.jpg";

function About() {
    const sectionRefs = {
        about: useRef(null),
    };

    return (
        <div id="about" ref={sectionRefs.about}>
            <img
                className=""
                src={aboutImg}
                alt="About Image - Mastermind"
                draggable="false"
                loading="lazy"
                data-aos="fade-right"
            />
            <div className="about-container">
                <h1 className="pb-2 font-serif text-4xl">
                    What is the Mastermind?
                </h1>
                <h2 className="pb-5 font-serif">Meet & Learn from Experts</h2>
                <p className="about-item space-y-1.5">
                    The Mastermind Experience is a hub of collective
                    intelligence and boundless inspiration. Our platform is
                    designed for those who crave the exhilarating pursuit of
                    knowledge, innovation, and personal growth.
                </p>
                <p className="about-item">
                    At Mastermind, we believe that the most extraordinary
                    breakthroughs happen when brilliant minds converge.
                    It&apos;s a space where diverse perspectives interweave,
                    ideas collide, and the seeds of innovation take root.
                </p>
                <p className="about-item">
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
