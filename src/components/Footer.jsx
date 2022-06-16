import * as s from "../styles/globalStyles";
import styled from 'styled-components';
import { SocialIcon } from "../react-social-icons/react-social-icons";
export const DivAddress = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;
`
  const Footer = () =>   {
  return (
<s.Container  style={{ 
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 30.
            }}>
         <DivAddress style={{ 
            padding: '10px'
            }}>

<SocialIcon style={{margin:'10px'}} bgColor="#000000" network="twitter" url="https://twitter.com/crypto_pintxos" />

<SocialIcon  style={{margin:'10px'}} bgColor="#000000"network="telegram" url="https://t.me/crypto_pintxos" />

<SocialIcon  style={{margin:'10px'}} bgColor="#000000"network="opensea" url="https://opensea.io/collection/crypto-pintxos" />

<SocialIcon  style={{margin:'10px'}} bgColor="#000000"network="polygon" url="https://polygonscan.com/address/0xbcc035a522c0550dfdaf3ba2c70cf5ef00f7d610" />

<SocialIcon  style={{margin:'10px'}} label='e-mail' bgColor="#000000"  network="email" url="mailto:crypto.pintxos@gmail.com" />              
                





</DivAddress>
<s.TextDescription>Crypto Pintxos is a project of LABe Digital Gastronomy Lab at Basque Culinary Center,  Center for Distributed Ledger Technology at the University of Malta and Speculative Futures Tel Aviv (2022)</s.TextDescription>
</s.Container >       
  );
}
export default Footer;