import '../assets/style/style.scss';
import AuthForm from "./auth/AuthForm";
import {useSelector} from "react-redux";
import Header from "./header/Header";
import Homepage from "./Homepage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import InitialDataDischarge from "./Tasks/Location/Tools/Ecology/emissionsDischargesInitialData/Discharge/InitialDataDischarge";
import InitialDataPages from "./Tasks/Location/Tools/Ecology/emissionsDischargesInitialData/InitialDataPages";
import MenuFuelInitialData
    from "./Tasks/Location/Tools/Ecology/emissionsDischargesInitialData/Fuel/MenuFuelInitialData";
import FuelLimits from "./Tasks/Location/Tools/Ecology/emissionsDischargesInitialData/Fuel/FuelLimits/FuelLimits";
import InitialDataFuel
    from "./Tasks/Location/Tools/Ecology/emissionsDischargesInitialData/Fuel/FuelLimits/InitialDataFuel";

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
                      <Route exact path='/InitialDataFuel' component={InitialDataFuel}/>
                      <Route exact path='/InitialDataPages' component={InitialDataPages}/>
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
