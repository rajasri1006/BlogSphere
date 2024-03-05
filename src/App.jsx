import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header"
import Footer from "./components/footer/Footer"
import authService from './appwrite/auth'
import Error from "./assets/error.png"

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((userData) => {
                if (userData) dispatch(login({ userData }));
                else dispatch(logout());
            })
            .finally(() => setLoading(false));
    }, [dispatch]);

    return !loading ? (
    <>
      <div className='lg:block hidden'>
      <div className="min-h-screen flex flex-wrap content-between bg-white">
          <div className="w-full block">
              <Header />
              <main>
                  <Outlet />
              </main>
          </div>
          <div className="w-full block">
              <Footer />
          </div>
      </div>
      </div>
      <div className='lg:hidden block'>
      <div className='w-full max-w-[600px] mx-auto mt-40 flex flex-col justify-center items-center'>
        <img src={Error} alt="Error Page" className='w-full'/>
        <h1 className='text-2xl font-Robot font-semibold'>This site is exclusively built for desktop screen only,<br /> Try using it in desktop...</h1>
      </div>
      </div>
      </>
  ) : (
    <div className="loader-container">
        <div className="spinner"></div>
    </div>
  );
}

export default App
