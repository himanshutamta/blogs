import Form from './components/form_component/Form';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Formdata from './components/data-component/Formdata';
import Fulldata from './components/full_data_page/Fulldata';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form />} />
        <Route path="/:id" element={<Fulldata />} />
    </Routes>
    </BrowserRouter>
    </>

    
  );
}

export default App;
