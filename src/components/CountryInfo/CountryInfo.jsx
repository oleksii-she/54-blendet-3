import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

export const CountryInfo = ({
  countryInfo: { flag, capital, id, countryName, languages = [], population },
}) => {
  return (
    <CountryWrapper>
      <Flag>
        <Image src={flag} alt={id} />
      </Flag>
      <CountryDescription>
        <CountryTitle>
          {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
        </CountryTitle>

        <CountryCapital>
          Capital: <Accent>{capital}</Accent>
        </CountryCapital>

        <CountryDetail>
          Population: <Accent>{population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{languages.join(', ')}</Accent>
        </CountryDetail>
      </CountryDescription>
    </CountryWrapper>
  );
};
