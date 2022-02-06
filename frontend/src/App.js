import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyTasks from "./screens/MyTasks/MyTasks";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route exact path='/' element={< LandingPage />}></Route>
        <Route exact path='/mytasks' element={< MyTasks />}></Route>      
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
