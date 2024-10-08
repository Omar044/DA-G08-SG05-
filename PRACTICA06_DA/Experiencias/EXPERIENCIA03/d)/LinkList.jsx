import React from "react";
import "./LinkList.css";  

const LinkList = ({ links }) => {
  return (
    <ul className="link-list">
      {links.map(link => (
        <li key={link.id}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
