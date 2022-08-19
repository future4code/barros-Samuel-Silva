import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHome from '../pages/AdminHomePage';
import AplicationForm from '../pages/ApplicationFormPage';
import CreateTrip from '../pages/CreateTripPage';
import Home from '../pages/HomePage';
import Login from '../pages/LoginPage';
import ListTrips from '../pages/ListTripsPage';
import TripDetails from '../pages/TripDetailsPage';

function Routers() {
    return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <Home /> } />
            <Route path="Admin" element={ <AdminHome /> } />
            <Route path="Inscreva" element={ <AplicationForm /> } />
            <Route path="Criar" element={ <CreateTrip /> } />
            <Route path="Lista" element={ <ListTrips /> } />
            <Route path="Login" element={ <Login /> } />
            <Route path="Detalhes" element={ <TripDetails /> } />
        </Routes>
    </BrowserRouter>
        )
    }
export default Routers;