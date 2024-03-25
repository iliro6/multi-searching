import { useEffect } from "react";
import styled from "styled-components";
import { data } from "./data";
import Input from "./components/Input";
import DropDown from "./components/DropDown";

function App() {
  return (
    <Wrapper>
     <Input/>
     <DropDown/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
`

export default App;
