import * as s from "../styles/globalStyles";
import styled from 'styled-components';
import NFTCard from "./NftCard";
import { shortenAddress } from "../util";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkIfWalletIsConnect } from "../redux/blockchain/blockchainActions";

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
  
`;

const Gallery = () => {
    const blockchain = useSelector((state) => state.blockchain);
    const dispatch = useDispatch();
    const { account, nfts } = blockchain;
    
    useEffect(() => {
        const controller = new AbortController();

        dispatch(checkIfWalletIsConnect());

        controller.abort();
    }, []);
    
    return (
        <s.Screen style={{ backgroundColor: "#F2F4F3", padding: 40 }}>
            <s.TextTitle>
                {account && shortenAddress(account)}
            </s.TextTitle>
            <s.TextDescription>
                Found {nfts.length} NFTS..
            </s.TextDescription>
            <s.Container
                flex={1}
                ai={"center"}
                style={{ paddingTop: 24, backgroundColor: "#F2F4F3" }}
            //image={"/config/images/bg.png"}
            >
                <ResponsiveWrapper>
                    {nfts.length === 0 ? (
                        <p>No NFTs found!</p>
                    ) : (
                        nfts.map((nft) => (
                            <NFTCard key={nft.id} {...nft} />
                        ))
                    )}
                </ResponsiveWrapper>
            </s.Container>
        </s.Screen>
    )
}

export default Gallery;
