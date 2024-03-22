import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FaRegTired } from "react-icons/fa";
const DropDown = () => {
  const { defaultArray } = useSelector((store) => store.dropDown);
  return (
    <Wrapper>
      {defaultArray.length < 1 ? (
        <div className="notfound-container">
          <h1>No Item found</h1>
          {<FaRegTired className="icon"/>}
        </div>
      ) : (
        defaultArray.sort().map((item, index) => {
          return (
            <div className={`${index === 0 ? "first-item" : "single-item"}`}>
              <p>{item}</p>
            </div>
          );
        })
      )}
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
  .icon{
    width: 80px;
    height: 80px;
    margin-top: 15px;
  }
  h1{
    font-size: 2.5rem;
  }
  .notfound-container{
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }
`;

export default DropDown;
