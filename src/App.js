import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';
import Dashboard from './pages/Dashboard';
import Pharmacist from './pages/Pharmacist';
import LoginForm from './pages/LoginForm';
import Nurse from './pages/Nurse';
import Login from './pages/Login';
import Register from './pages/Register';
import NurseRegister from './pages/NurseRegister';
import PatienDetails from './pages/PatientDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<LoginForm/>}></Route>
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
          <Route path="/patient" exact element={<Patient />}></Route>
          <Route path="/doctor" exact element={<Doctor />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path='/nurse' exact element={<Nurse/>}></Route>
          <Route path='/register' exact element={<Register/>}></Route>
          <Route path='/nurse-register' exact element={<NurseRegister/>}></Route>
          <Route path='/patient-details' exact element={<PatienDetails/>}></Route>
          <Route path="/pharma" exact element={<Pharmacist />}></Route>
          <Route path="*" exact element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
