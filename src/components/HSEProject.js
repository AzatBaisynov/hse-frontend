import '../assets/style/style.scss';
import AuthForm from "./Auth/AuthForm";
import {useSelector} from "react-redux";
import Header from "./Header/Header";
import Homepage from "./Homepage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EmissionsEffluentsEmissionCalculations
    from "./Tasks/Location/Tools/Ecology/EmissionsEffluentsEmissionCalculations";
import EmissionsDischargesInitialData from "./Tasks/Location/Tools/Ecology/Discharge/DischargeData/EmissionsDischargesInitialData";
import InitialDataDischarge from "./Tasks/Location/Tools/Ecology/Discharge/InitialDataDischarge";

const HSEProject = () => {
    /*If not authorized, then start "AuthForm"*/
  const token = useSelector(store => store?.authReducer?.token)
  if (token){
      return (
          <div>
              <Router>
                  <Header/>
                  <Switch>
                      <Route exact path='/' component={Homepage}/>
                      <Route exact path='/InitialDataDischarge' component={InitialDataDischarge}/>
                  </Switch>
              </Router>
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
