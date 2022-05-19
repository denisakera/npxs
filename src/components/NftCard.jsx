import styled from 'styled-components';
import img from './test.jpg'
import * as s from '../styles/globalStyles';

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px 24px 12px;
  height: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const CardImage = styled.div`
  background-image: url(${({ background }) => background});
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 256px;
  height: 210px;
  background-size: cover;
`;

const NFTCard = () => {
    return (
        <CardWrapper>
        <CardImage background={img} />
        <s.TextDescription>
            NPXS #311
        </s.TextDescription>
        <hr style={{ marginTop: 8 }} />
        <a href="https://testnets.opensea.io/assets/rinkeby/0x9b407ed04365862abc5363f301a2e5efa13ef2ff/4785">link</a>
        </CardWrapper>
    )
}

export default NFTCard;
