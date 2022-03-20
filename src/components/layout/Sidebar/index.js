import styled from "styled-components";

const Sidebar = styled.nav `
    width: 45px;
    transition: width .3s linear;
    transition-delay: .5s;
    order: -1;
    padding-left: 1px;
    border-right: 1px solid #e3e4e5;
    background-color: #e3e4e5;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    flex: 0 0 auto;
    overflow-x: hidden; 
    &:hover {
        width: 200px;
    }
`;
export default Sidebar;