import styled from "styled-components";
import * as s from '../styles/globalStyles';
import { useSelector } from "react-redux";
import { shortenAddress } from "../util";
import { useState, useEffect } from "react";
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

const AddressWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-left: 5px;
    border-style: solid;
    margin: 10px 0;
    padding: 3px 5px;
    background-color: #F2F4F3;
    transition: background-color 0.3s;

    &:hover {
        background-color: #F0C808;
    }

    @media only screen and (max-width:  1024px) {
        width: 100%;
    }

    @media only screen and (max-width:  768px) {
        width: 100%;
    }

`;

const DivWrapper = styled.div`
    width: 100%;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const QrWrapper = styled.div`
    margin: 0 5px;
`

const Address = ({ index, address, pieces_owned, ens_name }) => {
    const myAddress = useSelector((state) => state.blockchain.account);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <AddressWrapper style={{
            borderColor: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
        }}>
            <QrWrapper>
                <Jazzicon diameter={35} seed={jsNumberForAddress(address)} />
            </QrWrapper>            
            <DivWrapper>
                <s.TextTitle
                    style={{
                        color: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
                        borderColor: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',

                    }}>
                    {width > 900 ? address : shortenAddress(address)}
                </s.TextTitle>
                <s.TextTitle
                    style={{ fontSize: 18, color: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black' }}>
                    Owns {pieces_owned}                  {pieces_owned <2  ? 'piece' : 'pieces'}
                </s.TextTitle>                
                <s.TextTitle
                    style={{ fontSize: 18, color: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black' }}>
                    {ens_name === 'None' ? '\u00A0' : ens_name}
                </s.TextTitle>

            </DivWrapper>

        </AddressWrapper>
    )
}

export default Address;
