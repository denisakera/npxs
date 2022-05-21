import * as s from '../styles/globalStyles'
import styled from 'styled-components';
import Address from './Address';
import { useSelector } from 'react-redux';

const LeaderBoard = () => {

    const topAddresses = useSelector((state) => state.blockchain.holders); 
    
    return (
        <s.Screen style={{ backgroundColor: "#cecece" }}>
            <s.TextTitle>
                Top 10 Ownerships
            </s.TextTitle>
            <s.SpacerMedium />
            <s.Container style={{ backgroundColor: "#cecece" }}>
                {dummyAddresses?.slice(0, 10).map((addr) => {
                    return <Address { ...addr } />
                })}
            </s.Container>
            <s.SpacerLarge />
        </s.Screen>
    )
}


export default LeaderBoard





let dummyAddresses = [
    {
        "address": "0xcA7206101A6fD519cf802Bd43A758AD58D098A47",
        "ens_name": "None",
        "pieces_owned": "30"
    },
    {
        "address": "0x467D626230906C98D6f7FA1a2f5435B2679CD085",
        "ens_name": "None",
        "pieces_owned": "7"
    },
    {
        "address": "0x1Eb7c35BB543CbC11e63103d65f299f0A1298609",
        "ens_name": "None",
        "pieces_owned": "4"
    },
    {
        "address": "0xfF6ddb157773197c31a834F6A294c7D0c0abc79F",
        "ens_name": "billgates.eth",
        "pieces_owned": "3"
    },
    {
        "address": "0xb5A91dE725cce7497C66376B2e079FCB8cB5fe1f",
        "ens_name": "None",
        "pieces_owned": "1"
    }
];