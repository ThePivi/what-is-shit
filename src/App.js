import { Route, Routes } from "react-router-dom";

import News from "./pages/News";
import NewArticle from "./pages/NewArticle";
import MainMenu from "./components/layout/MainMenu";

import "./bootstrap.css"

function App() {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path='/' element={<News />} />
        <Route path='/new' element={<NewArticle />} />
      </Routes>
    </div>
  );
}

export default App;
