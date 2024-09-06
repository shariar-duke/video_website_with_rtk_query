import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { store } from "./app/store.js";
import Footer from "./components/Footer";
import AddVideoForm from "./components/Form/AddVideoForm.jsx";
import EditVideoForm from "./components/Form/EditVideoForm.jsx";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-video" element={<AddVideoForm />} />
          <Route path="/videos/:videoId" element={<Video />} />
          <Route path="/edit/:videoId" element={<EditVideoForm />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}
