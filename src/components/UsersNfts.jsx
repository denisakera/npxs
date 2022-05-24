import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNftTokens } from '../api';
import * as s from '../styles/globalStyles';
import { ResponsiveWrapper } from './Gallery';
import { shortenAddress } from '../util';
import NFTCard from './NftCard';

const UsersNfts = () => {
    const [usersNFTs, setUsersNFTs] = useState([]);
    const { address } = useParams();

    useEffect(() => {
        const fetchNfts = async () => {
            try {
                const assets = await getNftTokens(address);
                setUsersNFTs(assets);
            } catch (err) {
                console.error(err);
            }
        };
        fetchNfts();
    }, []);

    return (
        <s.Screen style={{ backgroundColor: "#cecece" }}>
            <s.TextTitle>
                {shortenAddress(address)}
            </s.TextTitle>
            <s.TextDescription>
                Has {usersNFTs.length} NFTS
            </s.TextDescription>
            <s.Container
                flex={1}
                ai={"center"}
                style={{ paddingTop: 24, backgroundColor: "#cecece" }}
            //image={"/config/images/bg.png"}
            >
                <ResponsiveWrapper>
                    {usersNFTs?.length === 0 ? (
                        <p>No NFTs found!</p>
                    ) : (
                        usersNFTs?.map((nft) => (
                            <NFTCard {...nft} />
                        ))
                    )}
                </ResponsiveWrapper>
            </s.Container>
        </s.Screen>
    )
}

export default UsersNfts;
