import * as s from '../styles/globalStyles'
import styled from 'styled-components';
import Address from './Address';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getHolders } from '../firebase';

const BoarderWrapper = styled.div`
    display: flex;
    flex-direction: column;

`;

const LeaderBoard = () => {

    //const topAddresses = useSelector((state) => state.blockchain.holders);
    const [topAddresses, setAddresses] = useState([]);
    
    useEffect(() => { 
        getHolders()
        .then((result) => setAddresses(result))
        .catch((err) => console.log(err));

    }, [])

    return (
        <s.Screen style={{ backgroundColor: "#cecece" }}>
            <s.TextTitle>
                Top 10 Ownerships
            </s.TextTitle>
            <s.SpacerMedium />
            <BoarderWrapper style={{ backgroundColor: "#cecece" }}>
                {topAddresses?.length === 0 ? (
                    <s.TextTitle>
                        Found no NFTs!
                    </s.TextTitle>
                ) : (
                    topAddresses?.slice(0, 10).map((addr, index) => {
                        return <Address key={index} {...addr} />
                    })
                )}
            </BoarderWrapper>
            <s.SpacerLarge />
        </s.Screen>
    )
}

export default LeaderBoard
