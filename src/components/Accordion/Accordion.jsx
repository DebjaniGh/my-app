import { useState, useId } from "react";
import "./Accordion.css";

const accordionData = [
  {
    id: 1,
    header: "What is React?",
    content: "React is a JavaScript library...",
  },
  {
    id: 2,
    header: "How does useState work?",
    content: "useState allows functional components...",
  },
  {
    id: 3,
    header: "What is JSX?",
    content: "JSX is a syntax extension...",
  },
];

// type AccordionItem = Readonly<{
//   value: string;
//   title: React.ReactNode;
//   content: React.ReactNode;
//   isExpanded: Boolean;
//   onToggle: (value: string) => void;
// }>;

export function Accordion() {
  /** below code used item index in the list */
  // which item is currently open
  // const [openIndex, setOpenIndex] = useState(null); // initially no accordion is open
  // const handleToggle = (index) => {
  //   setOpenIndex((prev) => (prev === index ? null : index)); // open (prev === index) -> close; close (prev === null)-> open
  // };
  // return (
  //   <div className="accordion">
  //     {accordionData.map((item, index) => {
  //       const isOpen = openIndex === index;
  //       return (
  //         <div className="accordion-item" key={item.id}>
  //           {/* Accordion Header*/}
  //           <button
  //             className="accordion-header"
  //             onClick={() => handleToggle(index)}
  //           >
  //             {item.header}
  //           </button>
  //           {/* Accordion content */}
  //           {isOpen && <div className="accordion-content">{item.content}</div>}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

  /** bewlo code uses item 'id' */
  const [openId, setOpenId] = useState(null);

  function handleToggle(id) {
    setOpenId((prev) =>
      prev === id // this item is open
        ? null // close it
        : id,
    );
  }

  return (
    <div className="accordion">
      {accordionData.map((item) => {
        const isOpen = item.id === openId;

        return (
          <div className="accordion-item" key={item.id}>
            <button
              className="accordion-header"
              onClick={() => handleToggle(item.id)}
            >
              {item.header}
            </button>
            {isOpen && <div className="accordion-content">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );

  /** for managing multiple open accordions */
  // const [openItems, setOpenItems] = useState([]);

  // const handleToggle = (id) => {
  //   setOpenItems(
  //     (prev) =>
  //       prev.includes(id) // item is currently open
  //         ? prev.filter((item) => item !== id) // remove from list of open items
  //         : [...prev, id], // otherwise add it to list of open items
  //   );
  // };

  // return (
  //   <div className="accordion">
  //     {accordionData.map((item) => {
  //       const isOpen = openItems.includes(item.id);

  //       return (
  //         <div className="accordion-item">
  //           <button
  //             className="accordion-header"
  //             onClick={() => handleToggle(item.id)}
  //           >
  //             {item.header}
  //           </button>
  //           {isOpen && <div className="accordion-content">{item.content}</div>}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}
// for accordion with accesibility
// type AccordionSection = Readonly<{
//   value: string;
//   title: React.ReactNode;
//   contents: React.ReactNode;
// }>;
// export function Accordion2(
//   { sections },
//   //: Readonly<{ sections: ReadonlyArray<AccordionSection> }>
// ) {
//   const [openSections, setOpenSections] = useState(new Set());

//   function handleToggle(value) {
//     const newOpenSections = new Set(openSections);
//     newOpenSections.has(value)
//       ? newOpenSections.delete(value)
//       : newOpenSections.add(value);
//     setOpenSections(newOpenSections);
//   }

//   return (
//     <div className="accordion">
//       {sections.map(({ value, title, contents }) => {
//         const isExpanded = openSections.has(value);

//         return (
//           <AccordionItem
//             key={value}
//             value={value}
//             title={title}
//             content={contents}
//             isExpanded={isExpanded}
//             onToggle={handleToggle}
//           />
//         );
//       })}
//     </div>
//   );
// }

// function AccordionItem({ value, title, content, isExpanded, onToggle }) {
//   const uniqId = useId();
//   const headerId = `header-${uniqId}`;
//   const panelId = `panel-${uniqId}`;

//   return (
//     <div className="accordion-item" key={value}>
//       <button
//         id={headerId}
//         className="accordion-item-title"
//         type="button"
//         aria-controls={panelId}
//         aria-expanded={isExpanded}
//         onClick={() => onToggle(value)}
//       >
//         {title}
//         <span
//           aria-hidden={true}
//           className={["accordion-icon", isExpanded && "accordion-icon--rotated"]
//             .filter(Boolean)
//             .join(" ")}
//         />
//       </button>
//       <div
//         id={panelId}
//         role="region"
//         aria-labelledby={headerId}
//         className="accordion-item-contents"
//         hidden={!isExpanded}
//       >
//         {content}
//       </div>
//     </div>
//   );
// }
