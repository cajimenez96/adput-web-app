import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './components/Layout/Layout';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
