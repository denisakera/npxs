import styled from "styled-components";
import * as s from '../styles/globalStyles';
import { useSelector } from "react-redux";
import { shortenAddress } from "../util";
import QRCode  from 'qrcode'
import { useState, useEffect } from "react";

const AddressWrapper = styled.div`
    display: flex;
    border-left: 5px;
    border-style: solid;
    margin: 10px 0;
    padding: 3px 5px;
`;

const QrWrapper = styled.div`
    margin: 0 10px;
`

const Address = ({ owner, quantity }) => {
    const myAddress = useSelector((state) => state.blockchain.account);
    let width = screen.width;

    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        QRCode.toDataURL(`${window.location.origin}/Gallery/${owner.address}`).then(setImgSrc);
    }, [])
        
    return (
        <AddressWrapper style={{ 
            borderColor: myAddress?.toLowerCase() === owner.address.toLowerCase() ? 'blue' : 'black',
            }}>
                <div>
            <s.TextTitle 
            style={{ 
                color: myAddress?.toLowerCase() === owner.address.toLowerCase() ? 'blue' : 'black',
                borderColor: myAddress?.toLowerCase() === owner.address.toLowerCase() ? 'blue' : 'black',
                }}>
                {width > 600 ? owner.address : shortenAddress(owner.address)}
            </s.TextTitle>
            <s.TextTitle 
            style={{ fontSize: 18,  color: myAddress?.toLowerCase() === owner.address.toLowerCase() ? 'blue' : 'black' }}>
                Pieces Owned: {quantity}
            </s.TextTitle>
            </div>
            <QrWrapper>
                <img src={imgSrc} alt="QR Code" />
            </QrWrapper>
        </AddressWrapper>
    )
}

export default Address;
