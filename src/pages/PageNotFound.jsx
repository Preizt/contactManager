import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";





const NotFound = () => {
  useEffect(()=>{
    pagenotfound()
  },[])
  
  const pagenotfound = ()=>{
    toast.error("Check your URL")
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
