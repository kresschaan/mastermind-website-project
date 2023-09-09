import discoverImg from "../assets/images/mastermind-who-section.jpg";

function Discover() {
    return (
        <div id="discover">
            <div className="flex max-w-lg flex-col justify-center text-center">
                <h1 className="pb-2 font-serif text-4xl">
                    Discovering the Mastermind
                </h1>
                <h2 className="pb-10">For whom is the mastermind intended?</h2>
                <p className="pb-10 font-serif text-justify">
                    The Mastermind Experience is for individuals who wants to
                    take their careers and goals to the next level. We unlock
                    and discover each potential that you have.
                </p>
                <p className="pb-10 font-serif text-justify">
                    We offer coaching and classes on how one can improve on
                    their confidence, relationship, social skills, network and
                    individual talents.
                </p>
                <p className="pb-10 font-serif text-justify">
                    We believe that everyone has the potential to be the best
                    versions of themselves. If you want to have the insight then
                    this masterclass is for you.
                </p>
            </div>
            <div className="flex max-w-md">
                <img src={discoverImg} alt="" />
            </div>
        </div>
    );
}

export default Discover;
