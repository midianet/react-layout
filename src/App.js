import Header from './components/layout/Header'
import Body from "./components/layout/Body";
import Content from "./components/layout/Content";
import Sidebar from "./components/layout/Sidebar";
import Container from "./components/layout/Container";
import Brand from "./components/Brand";
import Logo from "./components/Brand/Logo";
import Title from "./components/Brand/Title";
import User from "./components/User";
import Menu from "./components/Menu";
import Dropdown from './components/Dropdown';

function App() {
  return (
    <Container>
      <Header>
        <Brand>
          <Logo image="robot.gif" circle/>
          <Title>Bot Admin</Title>
        </Brand>
        <User>
          <img width="40" height="40" style={{marginRight: '8px', borderRadius: '50px', backgroundColor: 'white' }} />
          <Dropdown label="Marcos Fernando" />  
          <span style={{color: 'white'}} >Marcos Fernando Costa</span>
        </User>
      </Header>
      <Body>
        <Content>
          ssss          
        </Content>
        <Sidebar>
          <Menu />
        </Sidebar>
      </Body>
    </Container>  
  );
}
export default App;