const Title = () => {
  const titleStyle = {
    'marginLeft': 20
  };

  return(
    <nav className="navbar navbar-light bg-light">
      <span style={titleStyle} className="navbar-brand mb-0 h1">Unit Converter</span>
    </nav>
  );
};

export default Title;
