import React from "react";

const LinkList = ({ links }) => {
  return (
    <ul>
      {links.map(link => (
        <li key={link.id}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
