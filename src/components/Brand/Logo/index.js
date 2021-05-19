import styled from "styled-components";

const Logo = styled.img `
    border-radius: ${props => props.circle ? '25px' : '0'};
    width: 38px;
    height: 38px;
    background: url(${props => props.image}) no-repeat ;
`;
export default Logo;