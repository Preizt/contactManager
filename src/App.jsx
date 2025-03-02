import { Routes , Route} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageNotFound from "./pages/PageNotFound";
import ContactList from "./pages/ContactList";
import ViewContact from "./pages/ViewContact";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ContactList/>} />
        <Route path="/contact/view" element={<ViewContact/>} />
        <Route path="/contact/add" element={<AddContact/>} />
        <Route path="/contact/edit" element={<EditContact/>} />
        <Route path="/*" element={<PageNotFound/>}></Route>
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
