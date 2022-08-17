import "bootstrap/dist/css/bootstrap.min.css";
import react from "react";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/layout/Navbar";
import PageNotFound from "./component/pages/PageNotFound";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddUsers from "./component/users/AddUsers";
import Edit from "./component/users/Edit";
import User from "./component/users/User";
function App(props) {
  return (
     <BrowserRouter>
     <div className="App">
     <Navbar />
     <Routes>
     <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />} ></Route>
     <Route path="/contact" element={<Contact />} ></Route>
     <Route path="/users/addUsers" element={<AddUsers />}></Route>
     <Route path="/users/edit/:id" element={<Edit />}></Route>
     <Route path="/users/:id" element={<User />}></Route>
     <Route path="*" element={<PageNotFound />} ></Route>
     </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
