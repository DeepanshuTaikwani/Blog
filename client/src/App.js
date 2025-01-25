
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useContext } from "react";
import { Context } from "./context/Context";
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Setting from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";

function App() {
  const {user}=useContext(Context)
  return (
    <BrowserRouter>
      <TopBar/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}>
          {" "}
        </Route>
        <Route exact path="/register" element={user ? <Home /> : <Register/>}>
          {" "}
        </Route>
        <Route exact path="/login" element={user ? <Home /> : <Login />}>
          {" "}
        </Route>
        <Route
          exact
          path="/settings"
          element={user ? <Setting /> : <Register />}
        >
          {" "}
        </Route>
        <Route exact path="/write" element={user ? <Write /> : <Register />}>
          {" "}
        </Route>
        <Route exact path="/post/:postId" element={<Single />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
