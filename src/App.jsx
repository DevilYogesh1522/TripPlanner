import { Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import { Footer } from "./components/custom/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />

      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
