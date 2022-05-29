import { useState } from "react";
import * as s from '../styles/globalStyles';
import { useSelector } from "react-redux";

const LaunchDate = () => {
    const blockchain = useSelector((state) => state.blockchain);
    const [launchDate, setLaunchDate] = useState(null);

    let countDownDate = new Date(blockchain.dateOfLaunch * 1000).getTime();
    //"Jan 5, 2024 15:37:25"
    //blockchain.dateOfLaunch * 1000
    // Update the count down every 1 second
    if (blockchain.dateOfLaunch !== null) {
        const x = setInterval(function () {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            let countDown = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            setLaunchDate(countDown);
            
            // If the count down is over, write some text 
            if (distance < 0) {
                setLaunchDate("LAUNCHED");
                clearInterval(x);
            }
        }, 1000);
    }

    let styles = {
        fontSize: launchDate === "LAUNCHED" ? 20 : 30,
        fontWeight: "bold",
    }


    return (
        <div style={{ height: 16, marginBottom: 4 }}>
            {blockchain.dateOfLaunch !== null &&
                <s.TextTitle style={styles}>
                    {launchDate}
                </s.TextTitle>
            }
        </div>
    )
}

export default LaunchDate;
