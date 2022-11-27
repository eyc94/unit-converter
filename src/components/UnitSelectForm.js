const UnitSelectForm = ({ unitValue, changeHandler }) => {

  return (
    <select value={unitValue} onChange={changeHandler} className="form-select-sm mb-3">
      <option value="" defaultChecked>Choose Unit</option>
      <option value="inch">inch</option>
      <option value="foot">foot</option>
      <option value="meter">meter</option>
      <option value="kilometer">kilometer</option>
      <option value="centimeter">centimeter</option>
      <option value="millimeter">millimeter</option>
      <option value="micrometer">micrometer</option>
      <option value="nanometer">nanometer</option>
      <option value="mile">mile</option>
      <option value="yard">yard</option>
    </select>
  );
};

export default UnitSelectForm;
