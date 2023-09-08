import { Link } from 'react-router-dom';

const MAN = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Starred',
    to: '/Starred',
  },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {MAN.map(item => (
          <li key={item.to}>
            <Link to={item.to}> {item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navs;
