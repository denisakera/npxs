import * as s from "../styles/globalStyles";

const Footer = () => {
  return (

    <s.Container style={{
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 90.
    }}>
      <s.TextDescription
        style={{ textAlign: "justify", paddingLeft: "20px", paddingRight: "10px" }}
      >
        <a href="https://twitter.com/crypto_pintxos" target="_blank" data-show-count="false">Follow Crypto Pintxos on Twitter</a>
        <br />
        <a href="https://t.me/crypto_pintxos" target="_blank">Follow Crypto Pintxos Telegram channel</a>
      </s.TextDescription>
    </s.Container>
  );
}
export default Footer;