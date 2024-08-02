// import Button from "./Button";
// import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("i run all the time");
  // const iRunOnlyOnce = () => {
  //   console.log("i run only once.");
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  useEffect(() => {
    console.log("Search For " + keyword);
  }, []);
  return (
    <>
      <input value={keyword} onChange={onChange} placeholder="Search here..." />
      {/* <h1 className={styles.title}>Welcome back!</h1> */}
      {/* <Button text={"Continue"} /> */}
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </>
  );
}

export default App;
