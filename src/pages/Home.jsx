import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';
export const Home = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const CoutiestApi = async () => {
      try {
        const reponce = await getCountries();
        if (reponce.length > 0) {
          setCountry(reponce);
        }
      } catch (error) {}
    };
    CoutiestApi();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={country} />
      </Container>
    </Section>
  );
};
