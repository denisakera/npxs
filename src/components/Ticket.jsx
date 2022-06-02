import * as s from '../styles/globalStyles';
import { QrWrapper } from './Address';
import QRCode from 'qrcode'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const Ticket = () => {
    const [imgSrc, setImgSrc] = useState('');

    const myAddress = useSelector((state) => state.blockchain.account);

    useEffect(() => {
        const controller = new AbortController();

        if (myAddress) {
            QRCode.toDataURL(`${window.location.origin}/Gallery/${myAddress}`).then(setImgSrc);
        }

        return () => {
            controller.abort();
        }
    }, [myAddress])

    return (
        <s.Screen style={{ backgroundColor: "#cecece", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {myAddress ? (
                <QrWrapper>
                    <img src={imgSrc} />
                </QrWrapper>
            ) : (
                <s.TextTitle style={{
                    color: 'red',
                    border: '1px solid',
                    padding: 5
                }}>
                    PLease connect Wallet!
                </s.TextTitle>
            )}
        </s.Screen>
    )
}

export default Ticket;
