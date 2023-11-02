import React from 'react'
import { Routes, Route } from 'react-router-dom';
import "./globals.css";
import { Home } from './_root/pages';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* PUBLIC ROUTES => ACCESSIBLE TO EVERYONE */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        {/* PRIVATE ROUTES => ACCESSIBLE TO SIGNED IN USERS */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
