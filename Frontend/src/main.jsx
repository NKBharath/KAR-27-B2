import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/jsx/Login.jsx'
import ShowStudent from './Pages/jsx/ShowStudent.jsx'
import DeleteStudent from './Pages/jsx/DeleteStudent.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/show-student" element={<ShowStudent />} />
      <Route path="/delete-student" element={<DeleteStudent />} />
    </Routes>
  </BrowserRouter>
)
