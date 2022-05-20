import * as s from '../styles/globalStyles'
import styled from 'styled-components';

const LeaderBoard = () => {

    return (
        <s.Screen style={{ backgroundColor: "#cecece" }}>
            <s.TextTitle>
                Top 10 Ownerships
            </s.TextTitle>
            <s.SpacerMedium />
            <s.Container style={{ backgroundColor: "#cecece" }}>
                {dummyAddresses.slice(0, 10).map((addr) => {
                    return <Address address={addr} />
                })}
            </s.Container>
            <s.SpacerLarge />
        </s.Screen>
    )
}

const AddressWrapper = styled.div`
    border-left: 5px;
    border-style: solid;
    margin: 10px 0;
    padding: 3px 5px;
`;

const Address = ({ address }) => {

    let myAddress = "0x062d6d315e6c8aa196b9072d749e3f3f3579fdd0";

    return (
        <AddressWrapper style={{ 
            borderColor: myAddress.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
            }}>
            <s.TextTitle 
            style={{ 
                color: myAddress.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
                borderColor: myAddress.toLowerCase() === address.toLowerCase() ? 'blue' : 'black',
                }}>
                {address}
            </s.TextTitle>
            <s.TextTitle 
            style={{ fontSize: 18,  color: myAddress.toLowerCase() === address.toLowerCase() ? 'blue' : 'black' }}>
                Quantity: {4}
            </s.TextTitle>
        </AddressWrapper>
    )
}


export default LeaderBoard





let dummyAddresses = [
    "0xb81e2c1dcc7ac49e67147beba39de9f04c1c135e",
    "0x062d6d315e6c8aa196b9072d749e3f3f3579fdd0",
    "0xc74e52795dd8ba1de164e5e07907f6950ce3cc03",
    "0x0239769a1adf4def9f07da824b80b9c4fcb59593",
    "0xcb522152ab53b07b6715eb5d659d53dc463f0547",
    "0x0359c0b2b30ff5e52893156c1baba2b55a468700",
    "0x84bee312e24de23581388f85fd3a09b9f18b5093",
    "0xe96a1b303a1eb8d04fb973eb2b291b8d591c8f72",
    "0x7bd13f8c9bc23d7caff3cb5248c8ba63226df8a1",
    "0x7028f3234d10ef274018a2d0f6d2cecd9080a001",
    "0xacb6c478943423545a11d325b428e70f052ff330",
    "0xd64db73be79a4a664e76617e336d23add9598f90",
    "0x685bd636fb6d4243c4751a4c5d220e55ed6ff21c",
    "0x841b57a4e2590d6affb167686f343cb97675a426",
    "0x17567c397ed8eb976863bff418e6912e01bf55a7",
    "0xe6b2dfe1c9407ed05b833a664fb281a1b8d8cc2c",
    "0x530cf036ed4fa58f7301a9c788c9806624cefd19",
    "0x36791c410e271d381b0957dac16c667d3c467a83",
    "0x8d10c2083210a389c883a1ab3cdad1bf832476e5",
    "0xc2740ea77fa9d3cc47c4cda7825a6be96b3c192d",
    "0x002061ba009ac01ca8451e6521bf1a0fabfb4cbf",
    "0x6fb94110aad7d1dbe711fc80febb552bb9f52a25",
    "0x81a225aebdc11d674317c72d13461258674f78ae",
    "0x97c4d1090416e9e0661a9d7688b3932cbf323c5f",
    "0x077d4b50088613aaad950dc28d37522b42598aaf",
    "0x8eaf5461e19fced3c47e024cbff5b3bb55adbb0e",
    "0x75b63aae4d84c7cad8b3a302d4a4149e9403f040",
    "0x76107bff7d4bcd85548a2889ec9f94815b7937f7",
    "0x53353e9867e34a48ff5d586dd5f07bc1da3fdf75",
    "0x08b6d3a917c18a9b2dfc613634e448a6307bae08",
    "0xe884dc50d02a6b2156a0fe7e34501e20ff3bba7b",
    "0x7c1fd4d5acc15b46729c5fb9279b49cf71178654",
    "0xf2ce5f26c21ca5736cd6ffd3df04dcb17ab221a2",
    "0xea23f635cd87dda548fa6cef13add19844533726",
    "0xeeadc5701b5fd25fbcc7fbf04b048cdb1fff1c65",
    "0xa13702f53246a555e0d04f47ed360c142fdf6d8f",
    "0xb9720be63ea8896956a06d2ded491de125fd705e",
    "0x4884eb76842f734e0de54d79ad45266072eb68e2",
    "0x92b381515bd4851faf3d33a161f7967fd87b1227",
    "0xd0b00382c7ee6d6f8a7ef1fda07750c1d5fa68cb",
    "0x3901e35e61d758c1c34d9e71873531bad2110c74",
    "0xdf86ed6717d4ad0f3b6a9d80a7d30fa95860c6de",
    "0x4ac2d3391d39e5af436f17594ac7d00d992bef9e",
    "0x095b5d221ed6ebcdda14e479ba2e6e8933cb66fd",
    "0x381748c76f2b8871afbbe4578781cd24df34ae0d",
    "0xbf5b1431ab4a1c58298040e711b81f37f179c42a",
    "0xa5964a40b6b1dbb48b1613af3efbb947310d06ff",
    "0xa4a1a4fc58bf49da4e83d8cf8861570901a17679",
    "0xeaf54391793cc80de696d72713d7518c6190bfe0",
    "0x397bfa02592ee448c502a45bdd29e3d68af0941e",
    "0xd7383c3c94a1e2f1224ec54b06db9fae5352d375",
    "0xfdb16a768c4d41d7c0e1e5f5ce1d3c8234f6db0a",
    "0xd2dfa218b2b30f8b7ce5ccb3142b8429c9d33e7d",
    "0x02ec75665f63bc9f0b52882bb075701b8dec1b3b",
    "0x6cce90d00e0ddd95ec66de76b8be37bdd659b45e",
    "0x5a3f8913c9eaca9ac1afae60263f555f97586e43",
    "0x7817615d7a814b0c13c1dcda5de218f164860135",
    "0x7c0cc383b247275eeea044f8be09f20fdc98d8b4",
    "0xa1a0c4741302712a16c0703897443e7380312bea",
    "0xa31e02717d39854b6763f5a37ce32133c9e65884",
    "0x8d1a65837225b7a3b4bdc685f2941b482c5620a7",
    "0x333601a803cac32b7d17a38d32c9728a93b422f4",
    "0xe0ee13cd5a45e7fa140409edfc9ce17c7b11e6d2",
    "0xe18dd6ad7c2a997a414f9fcc483c81151fb3d466",
    "0x792b8795afc44b620f9f93ea42115ae7c773edb4",
    "0xba207a26d53f673cf71cbd2e71d3d5153210c3e4",
    "0x44b8d36daa131df3e2061fa18e605413eb1e4ed8",
    "0xd144054f09d17175d66aaa9ee73d7931c627fa9a"
];