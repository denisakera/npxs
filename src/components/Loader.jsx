import * as s from '../styles/globalStyles';

const Loader = () => {
    return (
        <s.Screen 
        style={{ backgroundColor: "#F2F4F3 ", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <s.Loader />
        </s.Screen>
    )
}

export default Loader;