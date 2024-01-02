import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
