import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home"; 
import Header from "../Header/Header";
import About from "../About/About";
import Contact from "../Contact/Contact";
import News from "../News/News";
import ThemeContext from "../Contexts/ThemeContext";
import ColorTheme from "../Configs/Theme";
import NewsFocus from "../News/NewsFocus/NewsFocus";
import Emoji from "../Emoji/Emoji";
import Crypto from '../Crypto/Crypto'

function App() {
  return (
    <ThemeContext.Provider value={{
      pink: ColorTheme.pink.color,
      darkpurple: ColorTheme.darkpurple.color
    }}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:publishedAt" element={<NewsFocus />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Emoji" element={<Emoji />} />
        </Routes>
      </div>
    </BrowserRouter>
    </ThemeContext.Provider> 
  );
}

export default App;
