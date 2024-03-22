import React from "react";
import styled from "styled-components";
import { data } from "../data";
const DropDown = () => {
  return (
    <Wrapper>
      {data.sort().map((item, index) => {
        return (
          <div className={`${index === 0 ? "first-item" : "single-item"}`}>
            <p>{item}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #e0dede;
  backdrop-filter: blur(20px);
  width: 500px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  margin: 2px auto;
  height: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px 0px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  div {
    color: #676666;
  }
  .single-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 12px 0;
    border-top: 1px solid #b4b4b4;
    padding-top: 15px;
  }
  .first-item {
    padding: 7.5px 0;
  }
  @media (max-width: 580px) {
    width: 300px;
  }
`;

export default DropDown;
