import { Route, Routes } from "react-router-dom";

import News from "./pages/News";
import NewArticle from "./pages/NewArticle";

import "./bootstrap.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<News />} />
        <Route path='/new' element={<NewArticle />} />
      </Routes>
    </div>
  );
}

export default App;
