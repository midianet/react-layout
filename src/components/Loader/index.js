import { useContext } from "react";
import LoadingContext from "../../state/Loading/Context";

const Loader = ({children}) => {
    const loader = useContext(LoadingContext)
    return (
        <div className={`${loader.loading ? 'cover-spin': ''}`}>
            {children}
        </div>
    )

}
export default Loader