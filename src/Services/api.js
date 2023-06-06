/* eslint-disable indent */
const KEY = '665436aaf4e64fd386d142333230506';

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();
    return data;
};

export default fetchData;
