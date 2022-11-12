import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countryInfo, setCountryInfo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const response = await fetchCountry(id);

      setCountryInfo(response);
    };
    data();
  }, [id]);

  console.log(countryInfo);

  return (
    <Section>
      <Container>
        <CountryInfo countryInfo={countryInfo} />
      </Container>
    </Section>
  );
};
