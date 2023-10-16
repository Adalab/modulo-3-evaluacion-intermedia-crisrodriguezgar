//imports dependencias, imagenes, componentes, stylos

import callToApi from '../services/api';
import '../styles/App.scss';
import {useState, useEffect} from 'react';

function App() {
  //funciones, variables, handles,
  const [listCountry, setCountry] = useState([]);

  useEffect(() => {
    callToApi().then((dataApi) => {
      setCountry(dataApi);
      console.log(dataApi);
    });
  }, []);

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const renderListCountry = () => {
    return listCountry
    .map ((item, i) =>(
      <li key={i}>
        <p>{item.flag}</p>
        <p>{item.name.common}</p>
        <p>{item.capital}</p>
        <p>{item.continents}</p>
      </li>
    ))
  };

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
        <form action="" onSubmit={handleForm}>
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
        </form>

        <ul>{renderListCountry()}</ul>
      </main>
    </>
  );
}

export default App;
