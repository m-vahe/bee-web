import {Link} from "react-router-dom";
import "./AlreadyRegistered.scss"
const BottomText = ({text,link,linkText}) =>{
    return(
        <div className={"already_registered"}>
            <h2>
                {text}{" "}
                <Link to={link}>{linkText}</Link>
            </h2>
        </div>
    )
}

export default BottomText