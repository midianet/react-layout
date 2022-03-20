import "./style.css"
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
     <div className="d-flex flex-column vh-50 flex-shrink-0 pt-2" style={{width: '200px'}}> 
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item"> 
          <Link className="nav-link" to="/pagamentos"><span className="material-icons">attach_money</span> Pagamentos</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to="/passageiros"><span className="material-icons">face</span> Passageiros</Link>
        </li>
        <li className="nav-item"> 
          <Link className="nav-link" to="/familias"><span className="material-icons">groups</span> Famílias</Link>
        </li>
      </ul>
    </div> 
  </div>
  )
};

export default Menu