import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';
import ShowsGrid from '../components/SHOWS/ShowsGrid';

// const useShowById = SHOWSID => {
//   const [showData, setShowData] = useState(null);
//   const [showError, setShowError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await getShowById(SHOWSID);
//         setShowData(response);
//       } catch (err) {
//         setShowError(err);
//       }
//     }
//     fetchData();
//   }, [SHOWSID]);

//   return { showData, showError };
// };

const Show = () => {
  const { SHOWSID } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', SHOWSID],
    queryFn: () => getShowById(SHOWSID),
  });

  // const { showData, showError } = useShowById(SHOWSID);

  if (showData) {
    return <div>Got Show Data {showData.name}</div>;
  }
  if (showError) {
    return <div>We have an error {showError.message}</div>;
  }

  return <div>Data is loading</div>;
};
export default Show;
