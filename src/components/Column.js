const Column = (props) => {
  const { colClasses, title, darkTheme, children } = props;

  const themeClasses = darkTheme ? 'text-white bg-dark' : 'bg-light border';

  return (
    <div className={colClasses}>
      <div className={`h-100 p-5 rounded-3 ${themeClasses}`}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Column;
