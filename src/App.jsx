import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import CreateApp from './components/CreateApp';
import WriteBook from './components/WriteBook';
import Design from './components/Design';
import CreateProduct from './components/CreateProduct';

function App() {
  return (
    <Router>
      <div>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create-app" element={<CreateApp />} />
          <Route path="/write-book" element={<WriteBook />} />
          <Route path="/design" element={<Design />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
