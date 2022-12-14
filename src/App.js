import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import "./reset.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="post">
              <Route path=":id" element="" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App