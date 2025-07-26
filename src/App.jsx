import { Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import { Footer } from "./components/custom/Footer";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
        <Outlet />
    
      <Footer />
     <Toaster/>
    </div>
  );
}

export default App;



