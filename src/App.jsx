import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import ContactList from "./pages/ContactList";
import ViewContact from "./pages/ViewContact";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify/unstyled";

function App() {
  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/:id/view" element={<ViewContact />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit" element={<EditContact />} />
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
