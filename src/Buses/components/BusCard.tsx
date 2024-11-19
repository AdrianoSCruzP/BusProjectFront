import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Bus } from '../models/Bus';
import './BusCard.css';

const BusCard: React.FC<{ bus: Bus }> = ({ bus }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/bus/${bus.id}`);
    };

    const formattedDate = new Date(bus.createdAt).toLocaleDateString('en-GB');

    return (
        <Card className="bus-card" sx={{ minWidth: 275 }} onClick={handleCardClick}>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Numero de Bus: {bus.busNumber}
                </Typography>
                <Typography variant="h5" component="div">
                    Placa: {bus.plate}
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                    Marca: {bus.busBrand}
                </Typography>
                <Typography variant="body2">
                    Caracteristicas:
                    <br/>
                    {bus.characteristics}
                </Typography>
                <Typography variant="body2">
                    Estado: {bus.status}
                </Typography>
                <Typography variant="body2">
                    Fecha de creacion: {formattedDate}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BusCard;