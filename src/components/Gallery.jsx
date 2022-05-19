import * as s from "../styles/globalStyles";
import styled from 'styled-components';
import NFTCard from "./NftCard";

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

function Gallery() {
    return (
        <s.Screen>
            <s.TextTitle>
            0x7ggjk63h.....
                </s.TextTitle>
                <s.TextDescription>
                    Found 3 NFTS..
                </s.TextDescription>
            <s.Container
                flex={1}
                ai={"center"}
                style={{ padding: 24, backgroundColor: "white" }}
                //image={"/config/images/bg.png"}
            >
                <ResponsiveWrapper>
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                <NFTCard />
                </ResponsiveWrapper>
            </s.Container>
        </s.Screen>
    )
}

export default Gallery;
