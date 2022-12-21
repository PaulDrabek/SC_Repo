import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProtectedInfo, onLogout } from "../apis/AuthFinder";
import { unauthenticateUser } from "../redux/slices/authSlice";

//ProtectedRoute sollte zu jedem private Komponent geändert werden, aktuell nur ein Placeholder
const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [ProtectedData, setProtectedData] = useState(null);

  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await onLogout();

      dispatch(unauthenticateUser());
      localStorage.removeItem("isAuth");
    } catch (err) {
      console.error(err.response);
    }
  };

  //wenn es ein Fehler gibt mit dem user Authentizierung, dann wird der User ausgeloggt
  const protectedInfo = async () => {
    try {
      const { data } = await fetchProtectedInfo();

      setProtectedData(data.info);

      setLoading(false);
    } catch (err) {
      console.error(err.message);
      logout();
    }
  };

  //jedes Mal die Seite ist geladen dann wird die Funktion protectedInfo rennen, um die Authentifizierung zu prüfen
  useEffect(() => {
    protectedInfo();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>Protected Data</h1>
      <h2>{ProtectedData}</h2>
    </div>
  );
};

export default ProtectedRoute;
