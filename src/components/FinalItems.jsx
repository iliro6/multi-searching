import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { removeItem } from "../feature/Drop-down/ddSlice";
const FinalItems = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="single-item">
        <div className="text">{item}</div>
        <div
          onClick={() => {
            dispatch(removeItem(item));
          }}
          className="icon"
        ></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .single-item {
    margin-right: 20px;
    text-align: center;
    padding: 10px 15px;
    /* padding-left: 5px; */
    border-radius: 5px;
    font-size: 0.5rem;
    background-color: #cdcaca;
    color: #676666;
    position: relative;
   
  }

  .icon {
    background-color: #ff2b2b;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 100%;
    width: 20px;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 500ms;
  }
  .icon:hover {
    background-color: #c12525;
  }
  .text {
    padding-right: 15px;
  }

  @media (max-width: 580px) {
    .single-item {
      margin-right: 20px;
      text-align: center;
      padding: 10px 12px;
      /* padding-left: 5px; */
      border-radius: 5px;
      font-size: 0.5rem;
      background-color: #cdcaca;
      color: #676666;
      position: relative;
    }
  }
  @media (max-width: 307px) {
    .single-item {
      font-size: 0.3rem;
    }
  }
`;

export default FinalItems;
