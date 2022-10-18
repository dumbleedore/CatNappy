import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Settings } from "./pages/settings/Settings";
import { Navbar } from "./components/navbar/Navbar";
import { Menu } from "./pages/menu/Menu";
const theme = createTheme({
  palette: {
    background: {
      default: "#f8eedb",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
