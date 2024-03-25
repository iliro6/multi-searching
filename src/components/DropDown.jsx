import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { FaRegTired } from "react-icons/fa";

const DropDown = () => {
  const { defaultArray, searchedResult } = useSelector(
    (store) => store.dropDown
  );
  const [state, setState] = useState(false);

  useEffect(() => {
    if (defaultArray.length < 7) {
      setState(true);
    } else {
      setState(false);
    }
  });

  return (
    <Wrapper>
      <div className={`container ${state ? "flexible-con" : null}`}>
        {defaultArray.length < 1 ? (
          <div className="notfound-container">
            <h1>No Item found</h1>
            {<FaRegTired className="icon" />}
          </div>
        ) : (
          defaultArray.map((item, index) => {
            return (
              <div
                key={index}
                className={ "single-item"}
              >
                <p>{item}</p>
              </div>
            );
          })
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    background-color: #e0dede;
    backdrop-filter: blur(20px);
    width: 500px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    margin: 2px auto;
    height: 380px;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0px 0px;
    overflow-y: scroll;
  }

  .container::-webkit-scrollbar {
    width: 10px;
  }

  .container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  .container::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  div {
    color: #676666;
  }
  .single-item {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 12px 0; */
    border-top: 1px solid #b4b4b4;
    padding: 20px;
    cursor: pointer;
    transition: all 1s;
  }
  .single-item:hover {
    background-color: #bfbfbf;
  }
  
  @media (max-width: 580px) {
    .container {
      width: 300px;
    }
  }
  .icon {
    width: 30px;
    height: 30px;
    margin: 15px;
  }
  h1 {
    font-size: 1.5rem;
  }
  .notfound-container {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    align-items: center;
  }
  .flexible-con {
    height: 100%;
  }
  p {
    font-weight: 500;
    letter-spacing: 2px;
  }
`;

export default DropDown;
