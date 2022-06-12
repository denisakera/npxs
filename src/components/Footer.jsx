import * as s from "../styles/globalStyles";

  const Footer = () =>   {
  return (

         <s.Container style={{ 
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 90.
            }}>
<s.TextDescription
                  style={{ textAlign: "justify", paddingLeft: "20px", paddingRight: "10px" }}
><a href="https://twitter.com/crypto_pintxos" class="twitter-follow-button" data-show-count="false">Follow Crypto Pintxos on Twitter</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<p><a href="https://t.me/crypto_pintxos">Follow Crypto Pintxos Telegram channel</a></p>
</s.TextDescription>
</s.Container>       
  );
}
export default Footer;