import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BusesList from './Buses/pages/BusesList';
import BusDetail from "./Buses/components/BusDetail";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function App() {
    return (
        <div className="App">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" >
                        Lista de Buses
                    </Typography>
                </Toolbar>
            </AppBar>
            <Router>
                <Routes>
                    <Route path="/" element={<BusesList />} />
                    <Route path="/bus/:id" element={<BusDetail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;