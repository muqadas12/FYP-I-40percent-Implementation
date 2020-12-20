import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import history from "./components/history"
import CaseReferal from "./pages/CaseReferal"
import CaseProceeding from "./pages/Dashborad/Judge/CaseProceeding"
import EFilling from "./pages/EFilling/EFilling.js"
import FileCase from "./pages/EFilling/FileCase.js"
import File from "./pages/EFilling/File.js"
import CaseInfo from "./pages/CMS/CaseInfo"
import CaseRecordCMS from "./pages/CMS/CaseRecordCMS"
import CauseListCMS from "./pages/CMS/CauseListCMS"
import Modules from "./pages/CMS/Modules"
import ESummonCMS from "./pages/CMS/ESummonCMS"
import LoginCMS from "./pages/CMS/LoginCMS"
import About from "./pages/MainPage/About"
import StaticReport from "./pages/MainPage/StaticReport"
import MainNavigation from "./shared/Navigation/MainNavigation"
import Logo from "./shared/Navigation/Logo/Logo"
import LoginCaseRef from "./pages/LoginCaseRef"
import LoginCasePro from "./pages/LoginCasePro"
import Rules from "./pages/MainPage/Rules"
import LawyerList from "./pages/MainPage/LawyerList"
import Contact from "./pages/MainPage/Contact"
import Search from "./pages/SearchCase/Search"
import Notification from "./pages/SearchCase/Notification"
import JudgmentSerach from "./pages/SearchCase/JudgmentSerach"
import LatestJudgments from "./pages/SearchCase/LatestJudgments"
import CauseListSearch from "./pages/SearchCase/CauseListSearch"
import OnlineCaseSearch from "./pages/SearchCase/OnlineCaseSearch"
import ViewNotification from "./pages/SearchCase/ViewNotification"
import PressRelease from "./pages/MainPage/PressRelease"
import Footer from "./components/Footer"
import AdminLogin from "./pages/CMS/AdminLogin";
import BarChart from "./pages/MainPage/Charts/BarChart"
import LineChart from "./pages/MainPage/Charts/LineChart"
import DoughnutChart from "./pages/MainPage/Charts/DoughnutChart"
import JudgeSignUp from "./pages/Dashborad/Judge/JudgeSignUp";
import LawyerSignUp from  "./pages/Dashborad/Lawyer/LawyerSignUp";
import LoginLawyer from  "./pages/Dashborad/Lawyer/LoginLawyer";
import LawyerMod from  "./pages/Dashborad/Lawyer/LawyerMod";

import LoginJudge from  "./pages/Dashborad/Judge/LoginJudge";
import JudgeMod  from  "./pages/Dashborad/Judge/JudgeMod";
import CaseRecord  from  "./pages/Dashborad/Judge/RecordCase";
import ESummon  from  "./pages/Dashborad/Judge/ESummonStatus";
import ViewEFilling  from  "./pages/Dashborad/Judge/ViewEFilling";
import Causelist  from  "./pages/Dashborad/Lawyer/Causelist";
import Judgment from  "./pages/Dashborad/Lawyer/Judgment";
import CourtFee from  "./pages/Dashborad/Lawyer/CourtFee";
import CaseStatusLaw from  "./pages/Dashborad/Lawyer/CaseStatusLaw";









const  App=()=> {
  return <Router history={history}>
          <Logo/>

    <MainNavigation/>
    
    <Switch>
      <main>
      <Route path="/" component={About} exact></Route>
      <Route path="/About" component={About} exact></Route>
      <Route path="/BarChart" component={BarChart} ></Route>
      <Route path="/LineChart" component={LineChart} ></Route>
      <Route path="/DoughnutChart" component={DoughnutChart} ></Route>

    <Route path="/cr" component={CaseReferal}  ></Route>
    <Route path="/LoginCasePro" component={LoginCasePro} ></Route>

    <Route path="/EFilling" component={EFilling} ></Route>
    <Route path="/FileCase" component={FileCase} ></Route>
    <Route path="/File" component={File} ></Route>
    <Route path="/LoginCaseRef" component={LoginCaseRef} ></Route>

    <Route path="/CaseReferal" component={CaseReferal} ></Route>



    <Route path="/Lawyer/CourtFee" component={CourtFee} exact></Route>
    <Route path="/Lawyer/Judgment" component={Judgment} exact></Route>
    <Route path="/CaseInfo" component={CaseInfo} ></Route>
    <Route path="/CaseRecordCMS" component={CaseRecordCMS} ></Route>
    <Route path="/CMS/CauseListCMS" component={CauseListCMS} exact ></Route>
    <Route path="/CMS/ESummonCMS" component={ESummonCMS} exact></Route>
    <Route path="/CMS/Modules" component={Modules} exact></Route>
    <Route path="/AdminLogin" component={AdminLogin } ></Route>

    <Route path="/LoginCMS" component={LoginCMS} ></Route>
    <Route path="/StaticReport" component={StaticReport} ></Route>
    <Route path="/Rules" component={Rules} ></Route>
    <Route path="/LawyerList" component={LawyerList} ></Route>
    <Route path="/Contact" component={Contact} ></Route>
    <Route path="/Search" component={Search} ></Route>
    <Route path="/JudgmentSerach" component={JudgmentSerach} ></Route>
    <Route path="/LatestJudgments" component={LatestJudgments} ></Route>
    <Route path="/CauseListSearch" component={CauseListSearch} ></Route>
    <Route path="/OnlineCaseSearch" component={OnlineCaseSearch} ></Route>
    <Route path="/ViewNotification" component={ViewNotification} ></Route>
    {/* <Route path="/Judgment" component={Search} ></Route> */}
    <Route path="/Notification" component={Notification} ></Route>
    <Route path="/PressRelease" component={PressRelease} ></Route>

    {/* //Dashboard */}
    <Route path="/JudgeSignUp" component={JudgeSignUp} ></Route>
    <Route path="/LawyerSignUp" component={LawyerSignUp} ></Route>
    <Route path="/LoginLawyer" component={LoginLawyer} ></Route>
    <Route path="/LoginJudge" component={LoginJudge} ></Route>
    <Route path="/JudgeMod" component={JudgeMod} ></Route>
    <Route path="/CaseRecord" component={CaseRecord} ></Route>
    <Route path="/ESummon" component={ESummon} ></Route>
    <Route path="/ViewEFilling" component={ViewEFilling} ></Route>
    <Route path="/CaseProceeding" component={CaseProceeding} ></Route>
    <Route path="/LawyerMod" component={LawyerMod} ></Route>
    <Route path="/Causelist" component={Causelist} ></Route>
    <Route path="/Judgment" component={Judgment} ></Route>
    <Route path="/CourtFee" component={CourtFee} ></Route>
    <Route path="/CaseStatusLaw" component={CaseStatusLaw} ></Route>

















    </main>
    </Switch>
    <Footer/>
</Router>
  
}

export default App;
