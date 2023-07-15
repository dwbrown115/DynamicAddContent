// Child component
import React, { useState, useEffect } from "react";

function Child({ doSomethingMethod }) {
  const [sections, setSections] = useState([]);
  const addSection = () => {
    setSections([...sections, { sectionName: "", sectionContent: [] }]);
  };
  const addContent = (index) => {
    const newSections = [...sections];
    newSections[index].sectionContent.push({ title: "", text: "" });
    setSections(newSections);
  };
  const handleChange = (e, index, type) => {
    const newSections = [...sections];
    if (type === "sectionName") {
      newSections[index].sectionName = e.target.value;
    } else if (type === "title") {
      newSections[index].sectionContent[e.target.dataset.contentIndex].title =
        e.target.value;
    } else if (type === "text") {
      newSections[index].sectionContent[e.target.dataset.contentIndex].text =
        e.target.value;
    }
    setSections(newSections);
  };
  useEffect(() => {
    doSomethingMethod(sections);
  }, [sections]);
  return (
    <div className="App">
      <h1>React JS Form</h1>
      {sections.map((section, index) => (
        <div key={index} className="section">
          <label htmlFor={`sectionName${index}`}>Section Name:</label>
          <input
            id={`sectionName${index}`}
            type="text"
            value={section.sectionName}
            onChange={(e) => handleChange(e, index, "sectionName")}
          />
          <button type="button" onClick={() => addContent(index)}>
            Add Content
          </button>
          {section.sectionContent.map((content, contentIndex) => (
            <div key={contentIndex} className="content">
              <label htmlFor={`title${index}${contentIndex}`}>Title:</label>
              <input
                id={`title${index}${contentIndex}`}
                type="text"
                value={content.title}
                data-content-index={contentIndex}
                onChange={(e) => handleChange(e, index, "title")}
              />
              <label htmlFor={`text${index}${contentIndex}`}>Text:</label>
              <input
                id={`text${index}${contentIndex}`}
                type="text"
                value={content.text}
                data-content-index={contentIndex}
                onChange={(e) => handleChange(e, index, "text")}
              />
            </div>
          ))}
        </div>
      ))}
      <button onClick={addSection}>Add Section</button>
      {/* <button onClick={doingSomething}>Click me</button> */}
      {/* <div>
        <h3>Array</h3>
        <pre>{JSON.stringify(sections, null, 2)}</pre>
      </div> */}
    </div>
  );
}

export default Child;
