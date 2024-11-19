const BASE_URL = process.env.REACT_APP_BASE_URL as string;

if (!BASE_URL) {
    console.error('BASE_URL is not defined. Please check your environment variables.');
}

const BusesService = (username: string, password: string) => {
    const fetchBuses = async (url: string) => {
        const response = await fetch(url, {
            headers: {
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    };

    const getAllBuses = async () => {
        return fetchBuses(BASE_URL);
    };

    const getBusById = async (id: string) => {
        return fetchBuses(`${BASE_URL}/${id}`);
    };

    return { getAllBuses, getBusById };
};

export default BusesService;