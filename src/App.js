import { Route, Routes } from "react-router-dom";

import MainMenu from "./components/layout/menu/MainMenu";
import ProfilePage from "./pages/ProfilePage";
import News from "./pages/News";
import NewArticle from "./pages/NewArticle";
import PlanToRead from "./pages/PlanToRead";
import AboutUs from "./pages/AboutUs";

import "./bootstrap.css"

function App() {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path='/' element={<News />} />
        <Route path='/new' element={<NewArticle />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/plantoread' element={<PlanToRead />} />
      </Routes>
    </div>
  );
}

export default App;
