import styled from "styled-components";
import Input from "./components/Input";
import DropDown from "./components/DropDown";
import { useSelector } from "react-redux";
import FinalItems from "./components/FinalItems";

function App() {
  const { finalItems } = useSelector((store) => store.dropDown);
  return (
    <Wrapper>
      <div className="items-container">
        {finalItems.map((item, index) => {
          return <FinalItems item={item} key={index} />;
        })}
      </div>
      <div className="main-container">
        <Input />
        <DropDown />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;

  .main-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .items-container {
    margin: 5px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    /* margin-left: 70px; */
  }

  @media (max-width: 580px) {
    flex-direction: column-reverse;
    .items-container {
      margin: 5px 5%;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 3px;
      font-size: 0.4rem;
    }
  }
  @media (max-width: 307px) {
    .items-container {
     
      grid-template-columns: repeat(3, 85px);
      grid-column-gap: 2px;
      /* grid-row-gap: 1px; */
      font-size: 0.4rem;
    }
  }
`;

export default App;
