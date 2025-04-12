import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./componets/theme";
import "./App.css";
import Hero from "./modules/Hero/Hero";
import Brand from "./modules/Brand/Brand";
import Why from "./modules/Why/Why";
import Pick from "./modules/Pick/Pick";
import Testimonials from "./modules/Testimonials/Testimonials";
import CTA from "./modules/CTA/CTA";
import Footer from "./modules/Footer/Footer";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset theo Material UI */}
      <div className="App">
         <Hero/>
         <Brand/>
         <Why/>
         <Pick/>
         <Testimonials/>
         <CTA/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
