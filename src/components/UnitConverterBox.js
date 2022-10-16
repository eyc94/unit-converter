import UnitForm from "./UnitForm";

const UnitConverterBox = () => {
  const boxStyle = {
    'marginLeft': 10,
    'marginTop': 40
  };

  return(
    <div style={boxStyle} className="container">
      <UnitForm />
    </div>
  )
};

export default UnitConverterBox;
