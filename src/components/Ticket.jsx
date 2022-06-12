import * as s from '../styles/globalStyles';
import { QrWrapper } from './Address';
import QRCode from 'qrcode'
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { signTicket } from '../util/signature';
import { StyledButton } from './Home';

const Ticket = () => {
    const [imgSrc, setImgSrc] = useState('');

    const myAddress = useSelector((state) => state.blockchain.account);
    const nftName = useSelector((state) => state.data.nftName);

    const sign = async () => {
     const signature = await signTicket(myAddress, nftName);
     const dataUrl = await QRCode.toDataURL(`${window.location.origin}/Gallery/${signature}`);
     setImgSrc(dataUrl);  
    }

    useEffect(() => {
        const controller = new AbortController();

        if (myAddress && nftName) {
            setImgSrc('')
        }

        return () => {
            controller.abort();
        }
    }, [myAddress]);

    return (
        <s.PageContainer style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' }}
            >
            {myAddress ? (
                <>
                    {!imgSrc ? (
                        <StyledButton
                        onClick={sign}
                        >
                            Sign Ticket
                            </StyledButton>
                    ) : (
                        <QrWrapper>
                            <img  style={{zoom: 2, imageRendering: 'pixelated' }} src={imgSrc} />
                        </QrWrapper>
                    )}
                </>
            ) : (
                <s.TextTitle style={{
                    color: '#DD1C1A',
                    border: '5px solid',
                    padding: 5
                }}>
                    Please connect your Wallet!
                </s.TextTitle>
            )}
        </s.PageContainer>
    )
}

export default Ticket;
