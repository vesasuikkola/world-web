import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API } from '../config';

const BASE_URL = `${API.api_host}:${API.api_port}/${API.weather_api_path}`;
const api = axios.create({ baseURL: BASE_URL });

export default function City({ name }) {
  const jwt = useSelector(({ auth }) => auth.auth.token);
  const config = { headers: { authorization: jwt } };

  const [weather, setWeather] = useState(null);

  const handleClick = () => {
    //TODO: refactor this into a separate weatherService
    api
      .get(`/${name}`, config)
      .then(({ data }) => setWeather(data.weather[0].icon));
  };

  return (
    <span onClick={handleClick}>
      {weather ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span>{name}</span>
          <img
            src={`http://openweathermap.org/img/wn/${weather}@2x.png`}
            width="18px"
            height="18px"
            alt=""
          />
        </div>
      ) : (
        name
      )}
    </span>
  );
}
