import axios from 'axios';

const apiUrl = `http://127.0.0.1:5000/units/`;

const getUnitLink = async (unit) => {
    const fullUrl = apiUrl + unit;
    const response = await axios.get(fullUrl);
    return response.data.url;
};

const unitsService = { getUnitLink };
export default unitsService;
