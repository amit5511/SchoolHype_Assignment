import Contact from "./Component/Contact/Contact";
import Main from "./Component/Main/Main";
import Navbar from "./Component/Navbar/Navbar";
import Section from "./Component/Section/Section";
import Testimonials from "./Component/Testimonials/Testimonials";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <>
    <Navbar />
    <Main />
    <Section />
    <Testimonials />
    <Contact />
    <ToastContainer />
  </>
}

export default App;
