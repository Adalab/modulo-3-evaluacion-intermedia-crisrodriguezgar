//imports dependencias, imagenes, componentes, stylos

import callToApi from '../services/api';
import '../styles/App.scss';
import {useState, useEffect} from 'react';

function App() {
  //funciones, variables, handles,
  useEffect(() => {
    callToApi().then((dataApi) => {
      setLoquesea(dataApi);
    });
  }, []);

  //html
  return (
    <>
      <header>
        <h1>Country Info App</h1>
        <p>
          Explore information about countries, capitals, and flags. Add new
          countries and filter trough the list
        </p>
      </header>
      <main>
        <h3>Filters</h3>
        <label htmlFor="">By Country</label>
        <input type="text" />

        <label htmlFor="">By Continent</label>
        <select name="" id="">
          <option value="">All</option>
          <option value="africa">Africa</option>
          <option value="northAmerica">North America</option>
          <option value="southAmerica">South America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceanía</option>
        </select>

        <ul></ul>
      </main>
    </>
  );
}

export default App;
