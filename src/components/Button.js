import { Link } from 'react-router-dom';

const Button = (props) => {
  const { btnClasses, title, link } = props;

  return (
    <Link to={link} className={btnClasses}>
      {title}
    </Link>
  );
};

export default Button;
