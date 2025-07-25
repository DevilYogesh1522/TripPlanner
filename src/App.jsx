import { Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import { Footer } from "./components/custom/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;



