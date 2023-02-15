import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Bloglist from './components/pages/Bloglist';
import BlogItem from './components/pages/BlogItem';


function App() {
  return <div>
    <Navbar />
    <Router>
      <Routes>
        <Route path='/' element={<Bloglist />}/>
        <Route path='/:slug' element={<BlogItem />}/>
      </Routes>
    </Router>
  </div>
}

export default App;
