import styled from "styled-components";
import * as s from '../styles/globalStyles';
import { useSelector } from "react-redux";
import { resolveEnsName, shortenAddress } from "../util";
import QRCode from 'qrcode'
import { useState, useEffect } from "react";
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

const AddressWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-left: 5px;
    border-style: solid;
    margin: 10px 0;
    padding: 3px 5px;
    width: 70%;
    background-color: #dbd7d7;
    transition: background-color 0.3s;

    &:hover {
        background-color: #cfcaca;
    }

    @media only screen and (max-width:  1024px) {
        width: 80%;
    }

    @media only screen and (max-width:  768px) {
        width: 100%;
    }

    @media only screen and (max-width:  420px) {
        flex-direction: column;
    }
`;

const DivWrapper = styled.div`
    width: 50%;

    @media only screen and (max-width: 768px) {
        width: 50%;
    }
`;

export const QrWrapper = styled.div`
    margin: 0 5px;
`

const Address = ({ address, pieces_owned }) => {
    const myAddress = useSelector((state) => state.blockchain.account);
    let width = screen.width;

    const [imgSrc, setImgSrc] = useState('');

    useEffect(() => {
        QRCode.toDataURL(`${window.location.origin}/Gallery/${address}`).then(setImgSrc);
    }, [])

    //console.log(resolveEnsName(address))
    return (
        <AddressWrapper style={{
            borderColor: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
        }}>
            <DivWrapper>
                <s.TextTitle
                    style={{
                        color: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
                        borderColor: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
                    }}>
                    {resolveEnsName(address)}
                </s.TextTitle>
                <s.TextTitle
                    style={{ fontSize: 18, color: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black' }}>
                    Pieces Owned: {pieces_owned}
                </s.TextTitle>
            </DivWrapper>
            <QrWrapper>
                <Jazzicon diameter={25} seed={jsNumberForAddress(address)} />
            </QrWrapper>
        </AddressWrapper>
    )
}

export default Address;
