import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);

  const getRegion = value => {
    setRegion(value);
  };

  useEffect(() => {
    if (!region) {
      return;
    }

    const CountriesList = async () => {
      const data = await fetchByRegion(region);

      setCountries(data);
    };

    CountriesList();
  }, [region]);

  return (
    <Section>
      <Container>
        <SearchForm getRegion={getRegion} />

        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
