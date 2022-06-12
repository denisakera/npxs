import * as s from '../styles/globalStyles';

const Loader = () => {
    return (
        <s.Container 
        style={{ backgroundColor: "#F2F4F3 ", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <s.Loader />
        </s.Container>
    )
}

export default Loader;