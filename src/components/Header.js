import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon className='header--icon' icon={faFile} />
      <h1 className='header--title'>CV App</h1>
    </header>
  );
}
 
export default Header;