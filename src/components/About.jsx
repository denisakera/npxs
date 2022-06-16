import * as s from "../styles/globalStyles";

const About = () => {
  return (
    <s.PageContainer>
      <s.TextTitle style={{ textAlign: "justify", fontWeight: 'bold' }}
      >
        <p>Let them eat NFT pintxos!</p>

        <p>Explore NFTs with your taste buds.</p>
      </s.TextTitle>
      <s.SpacerMedium />
      <s.TextDescription style={{ textAlign: "justify" }}
      >
        <p>Edible and tokenized worlds will collide on July 18th in San Sebastian, Spain...</p>
        <s.SpacerMedium />
        Each of our <span style={{ fontWeight: 'bold' }}>400 Crypto Pintxos</span> that you will mint or buy is a unique recipe with a pixelated representation of the ingredients.
        Five will become a real meal on <span style={{ fontWeight: 'bold' }}>July 18th NFT food insurrection at the legendary Basque Culinary Center restaurant</span> in San Sebastian.
        They will be offered as a set <span style={{ fontWeight: 'bold' }}>dinner for 10 guests that own the largest collection of Crypto Pintxos</span> tracked over our LeaderBoard which will close on July 10th at 10 am CET.
      </s.TextDescription>
      <s.SpacerMedium />
      <s.TextDescription style={{ textAlign: "justify" }}
      >Everyone is invited to vote on what will appear on the NFT plate through pintxo likes on Opensea!
        Let us know which pixels will taste best.
        After July 18th, Crypto Pintxos NFTS will also serve as a ticket to Basque Culinary Center metaverse restaurant that we plan to open later in 2022.
      </s.TextDescription>
      <s.SpacerMedium />
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <img style={{ maxHeight: "100%", maxWidth: "100%", }} alt={"example"} src={"/config/images/pintxos_nft_samples.png"} />
      </s.Container>
      <s.SpacerMedium />
      <s.TextTitle style={{ textAlign: "justify", fontWeight: 'bold' }}
      >Who is Crypto Pintxos?
      </s.TextTitle>
      <s.SpacerMedium />
      <s.TextDescription
        style={{ textAlign: "justify" }}
      >
        This is a project by food enthusiasts and design researchers from the <a href="https://linktr.ee/labe.dgl"> LABe Digital Gastronomy Lab</a> at Basque Culinary Center, <a href="https://www.um.edu.mt/dlt"> Center for
          Distributed Ledger Technology</a> at the University of Malta and <a href="https://twitter.com/futures_tlv">Speculative Futures Tel Aviv</a>. We explore unique dining experiences that
        connect food chains with blockchains and bridge the gap between real life and metaverse experiences.
        We are interested in the interaction between protocols for owning pixels, meeting and dining with strangers, and tasting elaborate dishes inspired by generative algorithms, timestamped metadata, and other blockchain rituals.
        If you are interested in future NFT pintxos, tapas, and chlebicky parties contact us at  <a href="mailto: crypto.pintxos@gmail.com">crypto dot pintxos at gmail!</a>
      </s.TextDescription>
      <s.SpacerMedium />
      <s.TextTitle style={{ textAlign: "justify", fontWeight: 'bold' }}
      >
        Where?
      </s.TextTitle>
      <s.SpacerMedium />
      <s.TextDescription
        style={{ textAlign: "justify" }}
      >
        <a href="https://twitter.com/crypto_pintxos" target="_blank" data-show-count="false">Follow Crypto Pintxos on Twitter</a>
        <br />
        <a href="https://t.me/crypto_pintxos" target="_blank">Follow Crypto Pintxos Telegram channel</a>
      </s.TextDescription>
    </s.PageContainer>
  );
}
export default About;
