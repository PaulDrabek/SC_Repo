import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { BauteilContextProvider } from "./context/BauteilContext";
import BauteilHome from "./routes/BauteilHome";
import HomeBaugruppen from "./routes/HomeBaugruppen";
import HomeAufbau from "./routes/HomeAufbau";
import LoginPage from "./routes/LoginPage";
import Bottom from "./components/Bottom";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./styles/App.css";
import Datenschutz from "./routes/Datenschutz";
import Impressum from "./routes/Impressum";
import AdminHome from "./routes/AdminHome";
//Wenn private Routes getriggert werden wird erst geprüft ob der Benutzer aunthentifiziert ist, ansonsten wird zu Login Page geführt
const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

//Wenn restricted Routes getriggert werden wird zum Home gebracht. z.B. LoginPage für schon gemeldete Benutzer
const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{!isAuth ? <Outlet /> : <Navigate to="/" />}</>;
};

//Context Definiert und jeder Seite unter dem Context gerendet. Erst Navbar, dann abhängig von den möglichen Routes die anderen Seiten
// und zuletzt das "Botton" Bar. Hier werden unter Private oder Restricted Routers die ausgewählte Routes platziert
const App = () => {
  return (
    <BauteilContextProvider className="App">
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomeBaugruppen />} />
            <Route exact path="/Aufbau" element={<HomeAufbau/>}/>
            <Route exact path="/Datenschutz" element={<Datenschutz />} />
            <Route exact path="/Impressum" element={<Impressum />} />
            <Route exact path="/bauteil/:id" element={<BauteilHome />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/protected" element={<ProtectedRoute />} />
              <Route exact path="/admin" element={<AdminHome />} />
            </Route>
            <Route element={<RestrictedRoutes />}>
              <Route exact path="/login" element={<LoginPage />} />
            </Route>
            {/* <Route path='*' element={<Error/>}/> muss noch gemacht werden*/}
          </Routes>
          <Bottom />
        </Router>
      </div>
    </BauteilContextProvider>
  );
};

export default App;
