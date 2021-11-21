import { Routes, Route, Link } from 'react-router-dom';
import Artists from './Artists';
import Connect from './Connect';
import ErrorPage from './ErrorPage';
import Home from './Home';
import LandingPage from './LandingPage';
import Shop from './Shop';
import Tour from './Tour';

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/home" className="link" />
        <Link to="/connect" className="link" />
        <Link to="/shop" className="link" />
        <Link to="/tour" className="link" />
        <Link to="/artists" className="link" />
      </nav> */}
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="*" element={<ErrorPage />} exact  />
        <Route path="/home" element={<Home />} exact />
        <Route path="/connect" element={<Connect />} exact />
        <Route path="/shop" element={<Shop />} exact />
        <Route path="/tour" element={<Tour />} exact />
        <Route path="/artists" element={<Artists />} exact />
      </Routes>
    </div>
  );
}

export default App;