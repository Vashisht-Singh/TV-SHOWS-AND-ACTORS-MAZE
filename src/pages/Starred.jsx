import { useStarredShows } from '../lib/useStarredShows';

const Starred = () => {
  const [starredShows] = useStarredShows();
  return <div>STARRED PAGE ,Starred {starredShows.length}</div>;
};
export default Starred;
