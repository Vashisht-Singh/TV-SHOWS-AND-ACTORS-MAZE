import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getShowById } from '../api/tvmaze';
import ShowMainData from '../components/SHOWS/ShowMainData';
import Details from '../components/SHOWS/Details';
import Seasons from '../components/SHOWS/Seasons';
import Casts from '../components/SHOWS/Casts';

const Show = () => {
  const { SHOWSID } = useParams();
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', SHOWSID],
    queryFn: () => getShowById(SHOWSID),
    refetchOnWindowFocus: false,
  });

  if (showData) {
    return (
      <div>
        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />
        <div>
          <h2>DETAILS</h2>
          <Details
            status={showData.status}
            premired={showData.premired}
            network={showData.network}
          />
        </div>
        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>
        <div>
          <h2>Casts</h2>
          <Casts cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }
  if (showError) {
    return <div>We have an error {showError.message}</div>;
  }

  return <div>Data is loading</div>;
};
export default Show;
