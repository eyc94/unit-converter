import { useEffect, useState } from "react";
import unitsService from "../services/units";

const Link = ({ selectedUnit }) => {
  const [link, setLink] = useState('');

  useEffect(() => {
    if (selectedUnit !== '') {
      unitsService
        .getUnitLink(selectedUnit)
        .then(response => {
          setLink(response);
        });
    }
  }, [selectedUnit]);

  return (
    <a rel="noreferrer" target="_blank" href={link}>
      {link}
    </a>
  );
};

export default Link;
