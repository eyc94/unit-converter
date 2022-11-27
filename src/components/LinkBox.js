import Link from "./Link";

const LinkBox = ({ selectedUnit }) => {
  if (selectedUnit !== '') {
    return (
      <div>
        To learn more about <em>{selectedUnit}</em>:
        <div>
          <Link selectedUnit={selectedUnit} />
        </div>
      </div>
    );
  }

  return (
    <></>
  );
};

export default LinkBox;
