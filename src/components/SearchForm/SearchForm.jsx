import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ getRegion }) => {
  const onChange = event => {
    getRegion(event.target.value);
  };

  return (
    <SearchFormStyled>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        defaultValue={'DEFAULT'}
        onChange={onChange}
      >
        <option value="DEFAULT" disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
