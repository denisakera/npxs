import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkIfWalletIsConnect, connect, galleryUpdate } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import * as s from "../styles/globalStyles";
import styled from "styled-components";
import LaunchDate from "./LaunchDate";
import { getConfigData } from "../redux/blockchain/util";
import { DivAddress } from "./Navigation";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 1px;
  border-radius: 10px;
  border: none;
  background-color: #086788;
  font-size:1em;
  padding: 20px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 200px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(6, 174, 213, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(6, 174, 213, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(6, 174, 213, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(6, 174, 213, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(6, 174, 213, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(6, 174, 213, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrHomeer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 942px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(221, 28, 26, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 768px) {
    width: 250px;
  }
  @media (min-width: 1024px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function Home() {
  const initState = {
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  };
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState(initState);

  const claimNFTs = () => {
    let cost = blockchain.cost;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);

    blockchain.smartContract.methods
    .mint(mintAmount)
    .send({
      gasLimit: String(totalGasLimit),
      to: CONFIG.CONTRACT_ADDRESS,
      from: blockchain.account,
      value: totalCostWei,
    })
    .once("error", (err) => {
      console.log(err);
      setFeedback("Sorry, something went wrong please try again later.");
      setClaimingNft(false);
    })
    .then((receipt) => {
      console.log(receipt);
      setFeedback(
        `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
      );
      setClaimingNft(false);
      dispatch(fetchData(blockchain.account));
      dispatch(galleryUpdate(blockchain.account));
    });    
   
  };

  

  const launchStatus = () => {
      const difference = +new Date(blockchain.dateOfLaunch * 1000).getTime() - +new Date().getTime();
      let timeLeft = {};

      if (difference > 0) {
        return false;
      }
      const collectionStatus = (blockchain.collectionStatus);
      
      if (collectionStatus){
        
        return false;
      }
      if (claimingNft){
        return false;
      }
      
      return false;
  };

  const [canMint, setCanMint] = useState(launchStatus());

  useEffect(() => {
      setTimeout(() => {
        console.log("Can mint: ", launchStatus());
        setCanMint(launchStatus());
      }, 1000);
  });

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== null && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    getConfigData().then((result) => {
      SET_CONFIG(result);
    });
    dispatch(checkIfWalletIsConnect());

    return () => {
     controller.abort();
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    getData();
    controller.abort();
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        jc={"center"}
        style={{ padding: 24, backgroundColor: "#F0C808" }}
        //image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      > <s.SpacerXSmall />
        <div style={{ height: 50 }}>
          {blockchain.smartContract && (
            <s.TextTitle>
              Collection status: {blockchain.collectionStatus ? 'PAUSED' : 'ACTIVE'}
            </s.TextTitle>
          )}
        </div>
        <LaunchDate />
        <s.SpacerSmall />
        <ResponsiveWrHomeer flex={1} style={{ padding: 24 }} test>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={"/config/images/example.gif"} />
          </s.Container>
          <s.SpacerLarge />
          <s.Container
            flex={2}
            jc={"center"}
            ai={"center"}
            style={{
              backgroundColor: "#06AED5",
              padding: 10,
              borderRadius: 100,
              border: "4px dashed var(--secondary)",
              boxShadow: "0px 5px 11px 2px rgba(221, 28, 26, 0.7)",
            }}
          >
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              {!blockchain.totalSupply ? "_" : blockchain.totalSupply} / {!blockchain.totalSupply ? "_" : CONFIG.MAX_SUPPLY}
            </s.TextTitle>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
              <StyledLink target={"_blank"} href={CONFIG.SCAN_LINK}>
                {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
              </StyledLink>
            </s.TextDescription>
            <s.SpacerSmall />
            {Number(blockchain.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  The sale has ended.
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  1 {CONFIG.SYMBOL} costs {blockchain.cost ? blockchain.web3.utils.fromWei(blockchain.cost, 'ether') : "_"}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription
                  style={{ textAlign: "center", color: "var(--accent-text)" }}
                >
                  Excluding gas fees.
                </s.TextDescription>
                <s.SpacerSmall />
                {blockchain.account === null ||
                  blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      Connect to the {CONFIG.NETWORK.NAME} network
                    </s.TextDescription>
                    <s.SpacerSmall />
                    {Number(blockchain.networkId) === Number(data.netId) ? (
                      <StyledButton
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                      >
                        CONNECT
                      </StyledButton>
                    ) : (
                      <>
                        {blockchain.loading ? (
                          <s.TextDescription
                            style={{ textAlign: "center", color: "var(--accent-text)" }}>
                            Loading...
                          </s.TextDescription>
                        ) : (
                          <DivAddress
                            style={{
                              color: 'red',
                              cursor: 'pointer'
                            }} onClick={(e) => {
                              e.preventDefault();
                              dispatch(connect());
                              getData();
                            }}>
                            Switch Network
                          </DivAddress>
                        )}
                      </>
                    )}

                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
                    <s.SpacerSmall />
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledButton
                        disabled={canMint ? 0 : 1}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                         {canMint ? (claimingNft ? "BUSY" : "BUY"): "Wait for launch"} 
                      </StyledButton>
                    </s.Container>
                  </>
                )}
              </>
            )}
            <s.SpacerMedium />
          </s.Container>
          <s.SpacerLarge />
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg
              alt={"example"}
              src={"/config/images/example.gif"}
              style={{ transform: "scaleX(-1)" }}
            />
          </s.Container>
        </ResponsiveWrHomeer>
        <s.SpacerMedium />
      </s.Container>
    </s.Screen>
  );
}

export default Home;
