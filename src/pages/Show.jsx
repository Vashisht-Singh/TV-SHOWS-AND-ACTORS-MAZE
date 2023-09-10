import { useParams } from 'react-router-dom';

const Show = () => {
  const { SHOWSID } = useParams();

  return <div>{`SHOWS PAGE FOR SHOW ID ${SHOWSID}`}</div>;
};
export default Show;
