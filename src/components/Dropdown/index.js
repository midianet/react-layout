import "./style.css"

const Dropdown = ({ label }) => {
    return (
        <div className="dropdown">
            <button className="dropbtn">{label}</button>
            <div className="dropdown-content">
                <a href="#">Perfil</a>
                <a className="exit" href="#">Sair</a>
            </div>
        </div>
    )
};

export default Dropdown