import discoverImg from "../assets/images/mastermind-who-section.jpg";

function Discover() {
    return (
        <div id="discover">
            <div
                className="discover-container"
                data-aos="fade-left"
                data-aos-duration="4000"
            >
                <h1 className="pb-2 font-serif text-4xl">
                    Discovering the Mastermind
                </h1>
                <h2 className="pb-2">For whom is the mastermind intended?</h2>

                <div className="max-w-2xl p-8">
                    <p className="discover-item">
                        The Mastermind Experience is for individuals who wants
                        to take their careers and goals to the next level. We
                        unlock and discover each potential that you have.
                    </p>
                    <p className="discover-item">
                        We offer coaching and classes on how one can improve on
                        their confidence, relationship, social skills, network
                        and individual talents.
                    </p>
                    <p className="discover-item">
                        We believe that everyone has the potential to be the
                        best versions of themselves. If you want to have the
                        insight then this masterclass is for you.
                    </p>
                </div>
            </div>
            <div
                className="flex max-w-md lg:pl-10"
                data-aos="fade-right"
                data-aos-duration="4000"
            >
                <img
                    src={discoverImg}
                    alt="Discover Image - Mastermind"
                    draggable="false"
                    loading="lazy"
                />
            </div>
        </div>
    );
}

export default Discover;
