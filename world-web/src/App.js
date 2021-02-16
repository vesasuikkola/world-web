import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from './actions/worldActions';
import './App.css';

export default function App() {
  const data = useSelector(({ world }) => world);
  let details = '';
  if (!data.length)
    for (let k in data) if (k !== 'Name') details += `<p>${k}: ${data[k]}</p>`;

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome to the world app!</h1>
      <hr />
      {data.length ? (
        data.map((country) => (
          <li
            key={country.Code}
            style={{ display: 'flex', justifyContent: 'space-between' }}
            onClick={() => dispatch(fetchCountries(country.Code))}
          >
            <h3>{country.Name}</h3>
            <div>
              {country.lastView && (
                <span>
                  Viewed {country.views} times, previously{' '}
                  {country.lastView.toLocaleString()}
                </span>
              )}
            </div>
          </li>
        ))
      ) : (
        <>
          <h2>{data.Name}</h2>
          <div dangerouslySetInnerHTML={{ __html: details }}></div>
          <button onClick={() => dispatch(fetchCountries())}>Go back</button>
        </>
      )}
      <ul></ul>
    </div>
  );
}
