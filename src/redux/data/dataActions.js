// log
import { store } from "../store";
import { getConfigData } from "../blockchain/util";
import Web3 from "web3";

const { ethereum } = window;

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = () => {
  

  return async (dispatch) => {
    dispatch(fetchDataRequest());
    let web3 = new Web3(ethereum);

    try {
    //  const totalSupply = await store
    //     .getState()
    //     .blockchain.smartContract.methods.totalSupply()
    //     .call();
    //   const cost = await store
    //     .getState()
    //     .blockchain.smartContract.methods.cost()
    //     .call();

      const CONFIG = await getConfigData();
      const netId = web3.utils.hexToNumber(CONFIG.NETWORK.ID);

      dispatch(
        fetchDataSuccess({
          // totalSupply: totalSupply,
          // cost: cost,
          netId: netId
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
