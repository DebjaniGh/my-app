import { useState } from "react";
import "./Tabs.css";

const tabs = [
  {
    id: 0,
    title: "HTML",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: 1,
    title: "CSS",
    content:
      " Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    id: 2,
    title: "JavaScript",
    content:
      " JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export function Tabs() {
  // state to keep track of active tab
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  // derived state -- since we are using "id" instead of index,
  // get the active tab object using find()
  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  const handleTabClick = (id) => {
    setActiveTabId(id);
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTabId === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">{activeTab.content}</div>
    </div>
  );
}
