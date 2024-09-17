import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from "./components/ContactForm";


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<ContactForm />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
