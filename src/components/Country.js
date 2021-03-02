import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../actions/worldActions';
import City from './City';
import './Country.css';

export default function Country({ data }) {
  const jwt = useSelector(({ auth }) => auth.auth.token);
  const dispatch = useDispatch();

  let details = '';
  for (let k in data)
    if (k !== 'Name' && k !== 'Cities')
      details += `<p><b>${k}</b>: ${data[k]}</p>`;
    else if (k === 'Cities') {
      details += `<p><b>${k}</b>:</p>`;
    }
  return (
    <div className="Country">
      <h2>{data.Name}</h2>
      <div dangerouslySetInnerHTML={{ __html: details }}></div>
      <ul>
        {data.Cities &&
          data.Cities.map((city) => (
            <li key={city.ID}>
              <City name={city.Name.split(' ')[0]} />
            </li>
          ))}
      </ul>
      <button onClick={() => dispatch(fetchCountries(jwt))}>Go back</button>
    </div>
  );
}
