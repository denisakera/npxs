import * as s from '../styles/globalStyles'
import styled from 'styled-components';
import Address from './Address';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getHolders } from '../firebase';
import Loader from './Loader';

const BoarderWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const LeaderBoard = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [topAddresses, setAddresses] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getHolders()
            .then((result) => {
                setAddresses(result)
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false);

            });

    }, []);

    const Holders = () => {
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

    return (
        <>
            {isLoading ? <Loader /> : <Holders />}
        </>
    )
}

export default LeaderBoard
