import React from "react";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
const Input = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Search here" />

      <CiSearch className="search" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  input {
    background: none;
    width: 500px;
    height: 45px;
    position: relative;
    border-radius: 5px;
    border: 2px solid #7b7979;
    padding-left: 20px;
    outline: none;
  }

  .search {
    position: absolute;
    transform: translateX(230px);
    background: none;
    border: none;
    width: 20px;
    height: 20px;
  }

  @media (max-width:580px) {
    input{
        width: 300px;
    }
    .search{
        transform: translateX(130px);
    }
  }
`;

export default Input;
