import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHome from './AdminHomePage';
import AplicationForm from './ApplicationFormPage';
import CreateTrip from './CreateTripPage';
import Home from './HomePage';
import Login from './LoginPage';
import ListTrips from './ListTripsPage';
import TripDetails from './TripDetailsPage';

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