import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./globals.css";
import Home from './_root/pages/Home';
import SigninForm from './_auth/forms/SigninForm';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* PUBLIC ROUTES => ACCESSIBLE TO EVERYONE */}
        <Route path='/sign-in' element={<SigninForm />} />

        {/* PRIVATE ROUTES => ACCESSIBLE TO SIGNED IN USERS */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
