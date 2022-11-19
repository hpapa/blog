//import '../styles/globals.css'
import { useState, useEffect } from "react";
import Header from "../components/Common/Header"
import Title from "../components/Common/Title";
import Input from "../components/Common/Input";
import Button from "../components/Common/Button";
import useInput from "../hooks/useInput";
import Highlighter from "react-highlight-words";
import styled from "styled-components";

const Conatiner = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 20px 0;
`;

const RegexConverted = styled.div`
  font-weight: 600;
`;

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;


const RegexGenerator = () => {
  const [strType, setStrType] = useState("");
  const [buffer, setBuffer] = useState("");
  //const [converted, setConverted] = useState("");
  const [matched, setMatched] = useState([]);
  const strInput = useInput("poipoi");
  const lengthInput = useInput("");
  const convertedInput = useInput("");

  const handleConvert = (strType = "") => {
    setStrType(strType);
  }

  const handleAdd = () => {
    convertedInput.setValue((prevValue) => prevValue + buffer);
  }

  useEffect(() => {
    if(!strType) return;
    const strLength = lengthInput.value ? `{${lengthInput.value}}` : "+";
    const buffer = `${strType}${strLength}`;
    setBuffer(buffer);
  }, [strType, lengthInput.value]);

  useEffect(() => {
    if(convertedInput.value) {
      const sampleStr = strInput.value;
      const regexp = new RegExp(convertedInput.value, "g");
      const matched = sampleStr.match(regexp) || [];
      setMatched(matched);
    }
  }, [convertedInput.value, strInput.value]);

  return (
    <div>
      <Header />
      <Conatiner>
        <Section>
          <Title text="Gernerator" />
          <div>
            <div>
              <Input {...lengthInput} /> <span>桁</span>
            </div>
            <Button text="数字" onClick={() => handleConvert("[0-9]")}/>
            <Button text="英語" onClick={() => handleConvert("[a-z]")}/>
            <Button text="文字列" onClick={() => handleConvert("\\w")}/>
          </div>
          <div>
            <Title text="Buffer" />
            <RegexConverted>{buffer}</RegexConverted>
          </div>
        <Section>
          <AddButtonContainer>
            <Button text="追加" onClick={handleAdd} style={{width: 300}} />
          </AddButtonContainer>
        </Section>
        </Section>
        <Section>
          <Title text="Expression" />
          <Input {...convertedInput} />
        </Section>
        <Section>
          <Title text="Test String" />
          <Input {...strInput} />
        </Section>
        <Section>
          <Title text="Matched" />
          <Highlighter
            searchWords={matched}
            autoEscape={true}
            textToHighlight={strInput.value}
          />
        </Section>
      </Conatiner>
    </div>
  )
};

export default RegexGenerator;
