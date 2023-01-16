import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = function () {
  return (
    <header>
      <Link to='/' style={{textDecoration: 'none'}}>
        <h1>
          Movies & Series <FaReact />
        </h1>
      </Link>
      
    </header>
  );
};

export default Header;
