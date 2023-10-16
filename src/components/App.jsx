//imports dependencias, imagenes, componentes, stylos

import callToApi from '../services/api';
import '../styles/index.scss';
import {useState, useEffect} from 'react';

function App() {
  //funciones, variables, handles,
  const [listCountry, setListCountry] = useState([]);
  const [search, setSearch] = useState('');
  const [continent, setContinent] = useState('all');
  const [newCountry, setNewCountry] = useState({
    flag: '',
    name: '',
    capital: '',
    continents: '',
  });

  useEffect(() => {
    callToApi().then((dataApi) => {
      setListCountry(dataApi);
      console.log(dataApi);
    });
  }, []);

  const handleForm = (ev) => {
    ev.preventDefault();
  };

  const handleInputSearch = (ev) => {
    setSearch(ev.target.value);
  };

  const handleSelectSearch = (ev) => {
    setContinent(ev.target.value);
  };
  const handleInputAdd = (ev) => {
    console.log ("estoy añadiendo")
    setNewCountry({...newCountry, [ev.target.id]: ev.target.value});
  };
  const handleNewCountry = () => {
    console.log ("estoy haciendo click")
    setNewCountry({
      flag: '',
      name: '',
      capital: '',
      continents: '',
    });
    setListCountry([...listCountry, newCountry]);
  };

  const renderListCountry = () => {
    return listCountry
      .filter((item) => {
        if (continent === 'all') {
          return true;
        } else {
          return item.continents === continent;
        }
      })

      .filter((item) =>
        item.name.official.toLowerCase().includes(search.toLowerCase())
      )
      .map((item, i) => (
        <li className="list__country" key={i}>
          <span>{item.flag}</span>
          <h3>{item.name.official}</h3>
          <p>{item.capital}</p>
          <p>{item.continents}</p>
        </li>
      ));
  };

  //html
  return (
    <>
      <header className="header">
        <h1 className="header__title">Country Info App</h1>
        <p className="header__subtitle">
          Explore information about countries, capitals, and flags. Add new
          countries and filter trough the list
        </p>
      </header>
      <main>
        <h3>Filters</h3>
        <form className="form" action="" onSubmit={handleForm}>
          <label htmlFor="">By Country</label>
          <input
            type="text"
            name="country"
            id="country"
            value={search}
            onChange={handleInputSearch}
          />

          <label htmlFor="">By Continent</label>
          <select
            name="continent"
            id="continent"
            value={continent}
            onChange={handleSelectSearch}
          >
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="northAmerica">North America</option>
            <option value="southAmerica">South America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceanía</option>
          </select>

          <label htmlFor="">Add Country</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Country name"
            value={newCountry.name}
            onChange={handleInputAdd}
          />
          <input
            type="text"
            name="capital"
            id="capital"
            placeholder="Capital"
            value={newCountry.capital}
            onChange={handleInputAdd}
          />
          <input
            type="text"
            name="flag"
            id="flag"
            placeholder="Flag Icon"
            value={newCountry.flag}
            onChange={handleInputAdd}
          />
          <input
            type="text"
            name="continent"
            id="ccontinent"
            placeholder="Continent"
            value={newCountry.continents}
            onChange={handleInputAdd}
          />
          <button onClick={handleNewCountry}>Add Country</button>
        </form>

        <ul className="list">{renderListCountry()}</ul>
      </main>
    </>
  );
}

export default App;
