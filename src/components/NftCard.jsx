import styled from 'styled-components';
import img from './test.jpg'
import * as s from '../styles/globalStyles';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px 24px 12px 0;
  height: 280px;
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

const StyledLink = styled.div`
  display: flex;
  justify-content: end;
  padding: 5px 5px;
`;

const NFTCard = ({ name, collection, permalink, image_preview_url, token_id}) => {
    return (
        <CardWrapper id={`${collection.slug}_${token_id}`}>
        <CardImage background={image_preview_url} />
        <s.TextDescription>
            {name}
        </s.TextDescription>
        <hr style={{ marginTop: 8 }} />
        <StyledLink>
        <a target="_blank" href={permalink}>
          <AiOutlineExclamationCircle />
        </a>
        </StyledLink>
        </CardWrapper>
    )
}

export default NFTCard;
