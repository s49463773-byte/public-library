import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import DirectorMessage from './pages/DirectorMessage';
import Regulations from './pages/Regulations';
import Devices from './pages/Devices';
import Activities from './pages/Activities';
import ActivityDetail from './pages/ActivityDetail';
import Membership from './pages/Membership';
import Lending from './pages/Lending';
import Facilities from './pages/Facilities';
import AddBook from './pages/AddBook';
import Videos from './pages/Videos';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="director-message" element={<DirectorMessage />} />
          <Route path="regulations" element={<Regulations />} />
          <Route path="devices" element={<Devices />} />
          <Route path="activities" element={<Activities />} />
          <Route path="activities/:id" element={<ActivityDetail />} />
          <Route path="membership" element={<Membership />} />
          <Route path="lending" element={<Lending />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="videos" element={<Videos />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
