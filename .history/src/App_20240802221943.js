// import Button from "./Button";
// import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  // const [counter, setValue] = useState(0);
  // const [keyword, setKeyword] = useState("");

  // const onClick = () => setValue((prev) => prev + 1);
  // const onChange = (event) => setKeyword(event.target.value);

  // // const iRunOnlyOnce = () => {
  // //   console.log("i run only once.");
  // // };
  // // useEffect(iRunOnlyOnce, []);
  // useEffect(() => {
  //   console.log("I run only once.");
  // }, []);

  // useEffect(() => {
  //   console.log("I run when 'keyword' changes.");
  // }, [keyword]);

  // useEffect(() => {
  //   console.log("I run when 'counter' changes.");
  // }, [counter]);

  // useEffect(() => {
  //   console.log("I run when keyword & counter change");
  // }, [keyword, counter]);

  // return (
  //   <>
  //     <input value={keyword} onChange={onChange} placeholder="Search here..." />
  //     {/* <h1 className={styles.title}>Welcome back!</h1> */}
  //     {/* <Button text={"Continue"} /> */}
  //     <h1>{counter}</h1>
  //     <button onClick={onClick}>click me</button>
  //   </>
  // );

  const [showing, setShowing] = useState(false);

  // UI 생성하면서 useEffect를 실행할 수 있다.
  // 어떻게 보면 별개의 컴포넌트이기 때문이다.
  const Hello = () => {
    const byFn = () => {
      console.log("destroyed :(");
    };

    const hiFn = () => {
      console.log("created :)");
      return byFn;
    };

    useEffect(hiFn, []);

    // useEffect(() => {
    //   console.log("created :)");

    //   // 이 부분이 cleanup function
    //   // component가 deroy될 때 뭔가 할 수 있도록 해준다.
    //   // 이걸로 component가 언제 create되었는지 언제 destroy가 되었는지 알 수 있다는 것이다.
    //   return () => console.log("destroyed :(");
    // }, []);
    return <h1>Hello</h1>;
  };

  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {/* React에서는 UI를 이렇게 생성하고 삭제시킬 수 있다. */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
