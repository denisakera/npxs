import * as s from "../styles/globalStyles";
import styled from 'styled-components';
import NFTCard from "./NftCard";
import { useState } from "react";
import img from './test.jpg'
import { shortenAddress } from "../util";
import { useSelector } from "react-redux";

const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  

  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

let dummy = [{
    permalink: 'https://testnets.opensea.io/assets/rinkeby/0x9b407ed04365862abc5363f301a2e5efa13ef2ff/4785',
    name: 'Univel Suite #47S5001',
    image_preview_url: img,
    collection: {
        slug: 'pt'
    },
    token_id: 123
},
{
    permalink: 'https://testnets.opensea.io/assets/rinkeby/0x9b407ed04365862abc5363f301a2e5efa13ef2ff/4785',
    name: 'Univel Suite #47S5001',
    image_preview_url: img,
    collection: {
        slug: 'pt'
    },
    token_id: 123
}]
const Gallery = () => {
    const [myNfts, setMyNfts] = useState(dummy);
    const blockchain = useSelector((state) => state.blockchain);

    return (
        <s.Screen style={{ backgroundColor: "#cecece" }}>
            <s.TextTitle>
                {blockchain.account !== null && shortenAddress(blockchain.account)}
            </s.TextTitle>
            <s.TextDescription>
                Found {myNfts.length} NFTS..
            </s.TextDescription>
            <s.Container
                flex={1}
                ai={"center"}
                style={{ paddingTop: 24, backgroundColor: "#cecece" }}
            //image={"/config/images/bg.png"}
            >
                <ResponsiveWrapper>
                    {myNfts.length === 0 ? (
                        <p>No NFTs found!</p>
                    ) : (
                        myNfts?.map((nft) => (
                            <NFTCard {...nft} />
                        ))
                    )}
                </ResponsiveWrapper>
            </s.Container>
        </s.Screen>
    )
}

export default Gallery;
