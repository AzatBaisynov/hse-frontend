import '../assets/style/style.scss';
import AuthForm from "./Auth/AuthForm";
import {useSelector} from "react-redux";

const HSEProject = () => {
    /*If not authorized, then start "AuthForm"*/
  const token = useSelector(store => store?.authReducer?.token)
  if (token){
    return (
        <div>
            this is HSE
        </div>
    );
  } else{
    return (
        <div>
          <AuthForm />
        </div>
    )
  }

}

export default HSEProject;
