import { useState, useEffect } from "react";
import ListItem from "./Components/ListItem";
import styles from "./CustomStyle.module.css";
import "./App.css";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  margin-left: 10px;
`;

const StyledButton2 = styled(StyledButton)`
  background-color: blue;
  font-size: ${(props) => props.fontSize};
`;
function App() {
  const [count, setCount] = useState(0);
  const students = ["John", "Jane", "Jim", "Jill", "Jack"];

  useEffect(() => {
    console.log("Count is updated", count);
  }, [count]);
  useEffect(() => {
    console.log("Component is mounted");
  }, []);

  return (
    <>
      <h1 style={{ color: "red", fontSize: "2rem" }}>List of Students</h1>
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} count={count} />
        ))}
      </ul>
      <button
        className={styles.customButton}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
      <StyledButton onClick={() => setCount(count + 1)}>Click me</StyledButton>
      <StyledButton2
        fontSize="2rem"
        onClick={() => setCount(count + 1)}
      ></StyledButton2>
    </>
  );
}

export default App;
