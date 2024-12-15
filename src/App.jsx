import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Indonesia from "./pages/Dashboard";
import Saved from "./pages/Saved";
// import Covid from "./pages/DataBuku/databuku";
import Search from "./pages/Search/SearchResults";
import Dashboard from "./pages/Dashboard";
// import DataAnggota from "./pages/DownloadBuku/Programming";
import Akun from "./pages/Akun/databuku";
import Downloadbuku from "./pages/DownloadBuku/Programming";
import Login from "./pages/Login/login";
import {AuthProvider} from './pages/Login/AuthContext';
import { Button } from "./components/ui/button";

const App = () => {
    return (
        <div className="app_container">
             <AuthProvider>
            <Header />
            <Routes>
                <Route path="/login" element={<Login/>}/>
                {/* <Route path="/"  element={<Dashboard />} /> */}
                <Route path="/" element={<Downloadbuku/>}/>
                <Route path="/akun" element={<Akun/>}/>
                <Route path="/saved"  element={<Saved />}/>
                <Route path="/search/:keyword" element={<Search />}/>
                <Route path="/search/" element={<Search />}/>
            </Routes>
            <Footer />
            </AuthProvider>
        </div>
    );
}

export default App;
