import React, { useEffect, useState } from 'react';
import BusCard from '../components/BusCard';
import BusesService from '../services/BusesService';
import { Bus } from '../models/Bus';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './BusesList.css';

const BusesList: React.FC = () => {
    const [data, setData] = useState<Bus[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [busesPerPage] = useState(6);

    useEffect(() => {
        const fetchData = async () => {
            const service = BusesService('user', 'password');
            try {
                const buses = await service.getAllBuses();
                setData(buses);
            } catch (error) {
                if (error instanceof Error) {
                    setError(`Failed to fetch data: ${error.message}`);
                } else {
                    setError('Failed to fetch data: An unknown error occurred');
                }
            }
        };

        fetchData();
    }, []);

    const indexOfLastBus = currentPage * busesPerPage;
    const indexOfFirstBus = indexOfLastBus - busesPerPage;
    const currentBuses = data.slice(indexOfFirstBus, indexOfLastBus);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    return (
        <div className="buses-list">
            {error ? (
                <div className="error">{error}</div>
            ) : (
                <div className="card-container">
                    {currentBuses.map((bus) => (
                        <BusCard key={bus.id} bus={bus} />
                    ))}
                </div>
            )}
            <Stack spacing={2} className="pagination">
                <Typography>Page: {currentPage}</Typography>
                <Pagination
                    count={Math.ceil(data.length / busesPerPage)}
                    page={currentPage}
                    onChange={handleChange}
                />
            </Stack>
        </div>
    );
};

export default BusesList;