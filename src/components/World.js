import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../actions/worldActions';
import Country from '../components/Country';

export default function World() {
  const dispatch = useDispatch();
  const jwt = useSelector(({ auth }) => auth.auth.token);
  const data = useSelector(({ world }) => world);

  //TODO: add a data load spinner
  return data.length ? (
    <ul>
      {data.map((country) => (
        <li
          key={country.Code}
          style={{ display: 'flex', justifyContent: 'space-between' }}
          onClick={() => dispatch(fetchCountries(jwt, country.Code))}
        >
          <h3>{country.Name}</h3>
          <div>
            {country.lastView && (
              <span>
                Viewed {country.views} times, previously{' '}
                {new Date(country.lastView).toLocaleString()}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <Country data={data} />
  );
}
