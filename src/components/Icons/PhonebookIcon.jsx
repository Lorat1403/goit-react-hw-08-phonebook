import { Link } from 'react-router-dom';
import { PhonebookIconStyled } from './Icons.styled';

const PhonebookIcon = ({ user }) => {
  return (
    <Link to="/">
      <PhonebookIconStyled size={28} user={`${user}`} />
    </Link>
  );
};

export default PhonebookIcon;
