import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BusesService from '../services/BusesService';
import { Bus } from '../models/Bus';
import './BusDetail.css'

const BusDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [bus, setBus] = useState<Bus | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBus = async () => {
            const service = BusesService('user', 'password');
            try {
                const busDetails = await service.getBusById(id!);
                setBus(busDetails);
            } catch (error) {
                if (error instanceof Error) {
                    setError(`Failed to fetch bus details: ${error.message}`);
                } else {
                    setError('Failed to fetch bus details: An unknown error occurred');
                }
            }
        };

        fetchBus();
    }, [id]);

    return (
        <div className="bus-detail-container">
            <div className="bus-detail">
                <h1>Detalle del Bus</h1>
                {bus && (
                    <>
                        <p>ID: {bus.id}</p>
                        <p>Numero de Bus: {bus.busNumber}</p>
                        <p>Placa: {bus.plate}</p>
                        <p>Marca: {bus.busBrand}</p>
                        <p>Caracteristicas: {bus.characteristics}</p>
                        <p>Estado: {bus.status}</p>
                        <p>Fecha de creacion: {new Date(bus.createdAt).toLocaleDateString('en-GB')}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default BusDetail;