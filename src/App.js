// Parent component
import React, { useEffect, useState } from "react";
import Child from "./Child/Child";

function App() {
  const [arr, setArr] = useState([]);
  const [tndArr, settndArr] = useState([]);

  const doSomething = (inputArray) => {
    // Do something with your array of strings in here
    setArr({ contentType: "test", content: inputArray });
    // console.log(arr);
  };

  function test() {
    console.log(arr);
  }

  return (
    <div className="App">
      <Child doSomethingMethod={doSomething}></Child>
      <button onClick={test}>Test</button>
      <div>
        <div>Content Type:</div>
        <div>{arr.contentType}</div>
        <div>
          {arr.content?.map((item, key) => {
            return (
              <div key={key}>
                <div>Section name:</div>
                <div>{item.sectionName}</div>
                <div>
                  <div>Section content:</div>
                  <div>
                    {item.sectionContent.map((item, key) => {
                      // console.log("title:", item.title);
                      // console.log("text:", item.text);
                      return (
                        <div key={key}>
                          <div>
                            <div>Title:</div>
                            <div>{item.title}</div>
                          </div>
                          <div>
                            <div>Text:</div>
                            <div>{item.text}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
