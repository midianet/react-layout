import { useContext } from "react";
import AlertContext from "../../state/Alerta/Context";

const Alert = () => {
    const alert = useContext(AlertContext)
    const type = 'alert-danger'
    return (
     alert.message ? <div className={`alert ${type}`} role="alert">
            <button style={{float: 'right', fontSize: '9px'}} type="button" onClick={() => alert.setMessage(null)} className="btn-close" aria-label="X"></button>
            <div>
               {alert.message}
            </div>
        </div> : null
    )

}
export default Alert;