import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Landing from "./pages/landing/Landing.jsx";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import Post from "./pages/post/PostDetail";
import PostForm from "./pages/post/PostForm";
import PostByCategory from "./pages/post/PostByCategory";
import ProfilePage from "./pages/profile/ProfilePage";
import "./reset.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="post">
            <Route path=":id" element={<Post />} />
            <Route path="test" element={<Post />} />
            <Route path="create" element={<PostForm />} />
          </Route>
          <Route path="category">
            <Route path="test" element={<PostByCategory />} />
          </Route>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App