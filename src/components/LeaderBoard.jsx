import * as s from '../styles/globalStyles'
import styled from 'styled-components';
import Address from './Address';
import { useEffect, useState } from 'react';
import Loader from './Loader';
import { getEvents } from '../util/events';

const BoarderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 5px;
`;

const LeaderBoard = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [topAddresses, setAddresses] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchHolders = async () => {
            try {
                setIsLoading(true);
                const res = await getEvents();
                setAddresses(res);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }
        fetchHolders();
        return () => {
            controller.abort();
          };
    }, []);

    const Holders = () => {
        return (
            
            <s.PageContainer >
                <s.TextTitle style={{ textAlign: "justify", fontWeight: 'bold' }}>
                Top {Math.min(topAddresses?.length,10)} Ownerships (snapshotted on 10th July 2022, 23:59 (CEST))
                </s.TextTitle>
                <s.TextTitle>
                    If you are one of the holders, congratilations! <br />You've are eligible to participate at the exclusive dinner. <br />
                    Please contact Erich Eichstetter from the Basque Culinary Center at <a target="_blank" href="email:eeichstetter@bculinary.com">eeichstetter@bculinary.com</a> to confirm your participation.
                </s.TextTitle>                     
                <s.SpacerMedium />
                <BoarderWrapper style={{ backgroundColor: "#F2F4F3" }}>
                    {topAddresses?.length === 0 ? (
                        <s.TextTitle>
                            No NFT owners yet! Check back after the collection launch date.
                        </s.TextTitle>
                    ) : (
                        topAddresses?.slice(0, 10).map((addr, index) => ( <Address key={index} { ...addr } /> )
                    ))}
                </BoarderWrapper>
                <s.SpacerLarge />
            </s.PageContainer>
        )
    }

    return (
        <>
            {isLoading ? <Loader /> : <Holders />}
        </>
    )
}

export default LeaderBoard
