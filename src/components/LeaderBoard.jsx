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
                {topAddresses?.length === 0 ? (
                    <s.TextTitle>
                        Found no NFTs!
                    </s.TextTitle>
                ) : (
                    topAddresses?.slice(0, 10).map((addr, index) => {
                        return <Address key={index} {...addr} />
                    })
                )}
            </s.Container>
            <s.SpacerLarge />
        </s.Screen>
    )
}

export default LeaderBoard
