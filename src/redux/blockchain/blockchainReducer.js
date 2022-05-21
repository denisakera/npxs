const initialState = {
  loading: false,
  account: null,
  smartContract: null,
  web3: null,
  errorMsg: "",
  collectionStatus: null,
  dateOfLaunch: null,
  nfts: [],
  holders: []
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CONNECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        smartContract: action.payload.smartContract,
        web3: action.payload.web3,
        collectionStatus: action.payload.collectionStatus,
        dateOfLaunch: action.payload.launchDate,
        nfts: action.payload.assets,
        holders: action.payload.holders  
      };
    case "CONNECTION_FAILED":
      return {
        ...initialState,
        loading: false,
        errorMsg: action.payload,
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.payload.account,
        nfts: action.payload.assets
      };
    default:
      return state;
  }
};

export default blockchainReducer;
