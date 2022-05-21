import styled from "styled-components";
import * as s from '../styles/globalStyles';
import { useSelector } from "react-redux";
import { shortenAddress } from "../util";

const AddressWrapper = styled.div`
    border-left: 5px;
    border-style: solid;
    margin: 10px 0;
    padding: 3px 5px;
`;

const Address = ({ address, pieces_owned }) => {
    const myAddress = useSelector((state) => state.blockchain.account);
    let width = screen.width;
    

    return (
        <AddressWrapper style={{ 
            borderColor: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
            }}>
            <s.TextTitle 
            style={{ 
                color: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
                borderColor: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
                }}>
                {width > 600 ? address : shortenAddress(address)}
            </s.TextTitle>
            <s.TextTitle 
            style={{ fontSize: 18,  color: myAddress?.toLowerCase() === address.toLowerCase() ? 'blue' : 'black' }}>
                Pieces Owned: {pieces_owned}
            </s.TextTitle>
        </AddressWrapper>
    )
}

export default Address;
