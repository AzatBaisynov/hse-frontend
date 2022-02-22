import '../assets/style/style.scss';
import AuthForm from "./Auth/AuthForm";
import {useSelector} from "react-redux";
import Header from "./Header/Header";
import Homepage from "./Homepage";

const HSEProject = () => {
    /*If not authorized, then start "AuthForm"*/
  const token = useSelector(store => store?.authReducer?.token)
  if (token){
    return (
        <div>
            <Header />
            <Homepage />
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
