import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Suspense } from "react";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-dvh bg-base-300">
        <Header />
        <main className="flex-1 flex-grow bg-base-200 container mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
