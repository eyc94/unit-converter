import React, { useState, useEffect } from "react";
import axios from 'axios';


const LinkBox = ({ selectedUnit }) => {
  const [link, setLink] = useState('');

  useEffect(() => {
    if (selectedUnit !== '') {
      axios
      .get(`http://127.0.0.1:5000/units/${selectedUnit}`)
      .then(response => {
        setLink(response.data.url);
      });
    }
  }, [selectedUnit]);

  if (link !== '' && selectedUnit !== '') {
    return (
      <div>
        To learn more about <em>{selectedUnit}</em>:
        <div>
          <a rel="noreferrer" target="_blank" href={link}>{link}</a>
        </div>
      </div>
    );
  }

  return (
    <></>
  );
};

export default LinkBox;
