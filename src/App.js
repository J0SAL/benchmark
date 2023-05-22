import "./styles.css";

import VitessStatus from "./VitessStatus";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <VitessStatus />

      <Footer />
    </div>
  );
}
