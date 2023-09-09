import meetingVid from "../assets/images/mastermind-meeting.mp4";

function Feature() {
    return (
        <div id="feature">
            <video autoPlay loop muted>
                <source src={meetingVid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Feature;
