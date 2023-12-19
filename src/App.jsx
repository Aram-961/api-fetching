import useSWR from "swr";
// Creating a func that handle api request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
  // destructuring
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR("https://restcountries.com/v2/all", fetcher);
  // Handles error and loading state
  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className='Loading'>Loading...</div>;

  console.log(countries);

  return (
    <div>
      {countries && //&& line to ensure that if there are no issues and the data has been correctly received
        countries.map((country, index) => (
          <img key={index} src={country.flags.png} alt='flag' width={100} />
        ))}
    </div>
  );
};

export default Swr;
