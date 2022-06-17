import styled from 'styled-components';
import * as s from '../styles/globalStyles';
import { AiOutlineLink } from 'react-icons/ai';
import { HiExternalLink } from 'react-icons/hi';
import { SocialIcon } from "../react-social-icons/react-social-icons";
const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px 24px 12px 0;
  height: 100%;
  width: 278px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  background-color: var(--primary);
`;

const CardImage = styled.div`
  background-image: url(${({ background }) => background});
  width: 278px;
  height: 278px;
  background-size: cover;
  transition: width 0.3s;
  transition: height 0.3s;

  &:hover {
    width: 278px;
    height: 278px;
  }
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 5px;
`;

const NFTCard = ({ name, description, permalink, image_preview_url, token_id}) => {
    return (
        <CardWrapper id={`${token_id}`}>
        <CardImage background={image_preview_url} />
        <s.TextDescription style={{ fontWeight: 'bold',padding:'10px' }}>
            {name}
        </s.TextDescription>
        <s.TextDescription style={{padding:'10px'}}>
            {description}
        </s.TextDescription>        
        <div  style={{ 
            flex: 1,
            justifyContent: 'flex-end',

            overflow: 'hidden',
            position: 'relative'
            }}>
        <SocialIcon  style={{margin:'10px',height: 30, width: 30, float:'right', bottom: '0px'  }} bgColor="#000000"network="opensea" url={`${"https://opensea.io/assets/matic/0xbcc035a522c0550dfdaf3ba2c70cf5ef00f7d610/"+token_id}`} />
        <SocialIcon  style={{margin:'10px',height: 30, width: 30, float:'right', bottom: '0px' }} bgColor="#000000"network="polygon" url= {`${"https://polygonscan.com/token/0xbcc035a522c0550dfdaf3ba2c70cf5ef00f7d610?a="+token_id}`} />        
      </div>
      </CardWrapper>
    )
}

export default NFTCard;
