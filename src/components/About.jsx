import * as s from "../styles/globalStyles";
import { useState, useEffect } from "react";

const About = () => {

  const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const styles = {
      backgroundColor: "#F2F4F3",
      paddingLeft: width > 768 ? 50 : 3,
      paddingRight: width > 768 ? 50 : 3,
    };

  return (
    <s.Screen style={styles}>
      <s.TextTitle style={{ textAlign: "justify", padding: "20px", fontWeight: 'bold' }}
      >
        <p>Let them eat NFT pintxos!</p>
        <p>Explore NFTs with your taste buds.</p>
      </s.TextTitle>
      <s.TextDescription style={{ textAlign: "justify", paddingLeft: "20px", paddingRight: "10px" }}
      >
        <p>Edible and tokenized worlds will collide on July 18th in San Sebastian, Spain...</p>
        Each of our <span style={{ fontWeight: 'bold' }}>400 Crypto Pintxos</span> that you will mint or buy is a unique recipe with a pixelated representation of the ingredients.
        Five will become a real meal on <span style={{ fontWeight: 'bold' }}>July 18th NFT food insurrection at the legendary Basque Culinary Center restaurant</span> in San Sebastian.
        They will be offered as a set <span style={{ fontWeight: 'bold' }}>dinner for 10 guests that own the largest collection of Crypto Pintxos</span> tracked over our LeaderBoard which will close on July 10th at 10 am CET.
      </s.TextDescription>
      <s.TextDescription style={{ textAlign: "justify", paddingTop: "20px", paddingLeft: "20px", paddingRight: "10px" }}
      >Everyone is invited to vote on what will appear on the NFT plate through pintxo likes on Opensea!
        Let us know which pixels will taste best.
        After July 18th, Crypto Pintxos NFTS will also serve as a ticket to Basque Culinary Center metaverse restaurant that we plan to open later in 2022.
      </s.TextDescription>
      <s.TextTitle style={{ textAlign: "justify", padding: "20px", fontWeight: 'bold' }}
      >Who is Crypto Pintxos?
      </s.TextTitle>
      <s.TextDescription
        style={{ textAlign: "justify", paddingLeft: "20px", paddingRight: "10px" }}
      >
        This is a project by food enthusiasts and design researchers from the <a href="https://linktr.ee/labe.dgl"> LABe Digital Gastronomy Lab</a> at Basque Culinary Center, <a href="https://www.um.edu.mt/dlt"> Center for
          Distributed Ledger Technology</a> at the University of Malta and <a href="https://twitter.com/futures_tlv">Speculative Futures Tel Aviv</a>. We explore unique dining experiences that
        connect food chains with blockchains and bridge the gap between real life and metaverse experiences.
        We are interested in the interaction between protocols for owning pixels, meeting and dining with strangers, and tasting elaborate dishes inspired by generative algorithms, timestamped metadata, and other blockchain rituals.
        If you are interested in future NFT pintxos, tapas, and chlebicky parties contact us at  <a href="mailto: crypto.pintxos@gmail.com">crypto dot pintxos at gmail!</a>
      </s.TextDescription>
      <s.TextTitle style={{ textAlign: "justify", padding: "20px", fontWeight: 'bold' }}
      >
        Where?
      </s.TextTitle>
      <s.TextDescription
        style={{ textAlign: "justify", paddingLeft: "20px", paddingRight: "10px" }}
      ><a href="https://twitter.com/crypto_pintxos" class="twitter-follow-button" data-show-count="false">Follow Crypto Pintxos on Twitter</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <p><a href="https://t.me/crypto_pintxos">Follow Crypto Pintxos Telegram channel</a></p>
      </s.TextDescription>
    </s.Screen>
  );
}
export default About;