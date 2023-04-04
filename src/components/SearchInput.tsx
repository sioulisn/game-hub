import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearch, BsSearch } from "react-icons/all";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input borderRadius={20} placeholder="Search games..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
