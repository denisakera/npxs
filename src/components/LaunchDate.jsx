import { useState, useEffect } from "react";
import * as s from '../styles/globalStyles';
import { useSelector } from "react-redux";

const LaunchDate = () => {

    const blockchain = useSelector((state) => state.blockchain);

    const calculateTimeLeft = () => {
        const difference = +new Date(blockchain.dateOfLaunch * 1000).getTime() - +new Date().getTime();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    let styles = {
        fontSize: 25,
        fontWeight: "bold",
    }

    return (
        <div style={{ height: 16, marginBottom: 4 }}>
            {blockchain.account && (
                <s.TextTitle style={styles}>
                    {timerComponents.length ? timerComponents : "LAUNCHED"}
                </s.TextTitle>
            )}
        </div>
    );
}

export default LaunchDate;
