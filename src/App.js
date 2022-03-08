import "./App.css";
import Write from "./components/write/Write";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const user = false ;
  return (
    // {/* <Home/> */}
    // {/* <Single/> */}
    // {/* <Write/> */}
    // {/* <Settings/> */}
    // {/* <Login/> */}
    // {/* <Register /> */}

    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route path="/post/:post_id" element={<Single />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
