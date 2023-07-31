import React, { useEffect, useState } from 'react';
import { Input } from "antd";
import styled from "styled-components";
import { useRouter } from 'next/router';

const StyledInput = styled(Input.Search)`
  width: 200px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;


const Header: React.FC = () => {
    const { push } = useRouter();
    const [searchParam, setSearchParam] = useState("");
  
    useEffect(() => {
        if(searchParam)
      push("/", {
        query: {
          q: searchParam,
        },
      });
    }, [searchParam,push]);
  
    const handleSearch = (value: string) => {
      setSearchParam(value.trim().toLocaleLowerCase());
    };
  return (
    <HeaderContainer>
      <h1>Wookie Movies</h1>
      <StyledInput
        placeholder="Search Movies"
        enterButton
        onSearch={handleSearch}
      />
    </HeaderContainer>
  );
};

export default Header;
