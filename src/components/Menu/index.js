import "./style.css"

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li><span className="material-icons">face</span><a href="#"> Bots</a></li>
        <li><span className="material-icons">help_outline</span><a href="#"> Perguntas</a></li>
        <li><span className="material-icons">record_voice_over</span><a href="#"> Respostas</a></li>
        <li><span className="material-icons">settings</span><a href="#"> Configuraçoes</a></li>
        <li><span className="material-icons">edit_calendar</span><a href="#"> Agendamentos</a></li>
        <li><span className="material-icons">cake</span><a href="#"> Aniversários</a></li>
      </ul>
    </div>
  )
};

export default Menu