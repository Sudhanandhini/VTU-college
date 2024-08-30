import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { Container } from "react-bootstrap";
import {Outlet} from "react-router-dom";


function App() {
  return (
    <>
    <Header/>
    <Container className="container">
      <main>
         <Outlet/>
      </main>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
