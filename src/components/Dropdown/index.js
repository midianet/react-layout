import "./style.css"

const Dropdown = ({label}) => {
    return(
        <div class="dropdown">
            <button class="dropbtn">{label}</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
};

export default Dropdown