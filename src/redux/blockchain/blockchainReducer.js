const initialState = {
  loading: false,
  account: null,
  jazicoin: Math.round(Math.random() * 10000000),
  smartContract: null,
  web3: null,
  errorMsg: "",
  collectionStatus: null,
  dateOfLaunch: null,
  nfts: [],
  networkId: null
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
        nfts: [...action.payload.nfts],
        networkId: action.payload.networkId
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
        nfts: [...action.payload.nfts],
      };

    case "UPDATE_GALLERY":
      return {
        ...state,
        nfts: [...action.payload.nfts],
      };
    case "PAGE_RELOAD":
      return {
        ...state,
        account: action.payload.account,
        nfts: [...action.payload.nfts],
        smartContract: action.payload.smartContract,
        web3: action.payload.web3,
        collectionStatus: action.payload.collectionStatus,
        dateOfLaunch: action.payload.launchDate,
        networkId: action.payload.networkId
      }  
    
    case "PAGE_RELOAD_FAIL":
    return {
      ...state,
      account: action.payload.account,
      networkId: action.payload.networkId,
      web3: action.payload.web3,
      collectionStatus: action.payload.collectionStatus,
      dateOfLaunch: action.payload.launchDate,

    }

    default:
      return state;
  }
};

export default blockchainReducer;
