const callToApi = () => {
  return fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flag"
  )
    .then((response) => response.json())
    .then((dataApi) => {
      return dataApi;
    });
};

export default callToApi;
