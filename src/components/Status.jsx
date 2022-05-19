import { useState } from "react";
import * as s from '../styles/globalStyles'

const Status = () => {
    const [paused, setPaused] = useState(false);
    const [launched, setLauncedDate] = useState(false);

    return (
        <div>
        <s.TextTitle>Collection status: {paused ? 'PAUSED' : 'ACTIVE' }</s.TextTitle>
        <s.TextTitle>Count Down {launched ? 'LAUNCHED' : 'LAUNCH DATE...'}</s.TextTitle>
        </div>
    )
}

export default Status;
