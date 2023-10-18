import { useStarredShows } from '../../lib/useStarredShows';
import ShowsCard from './ShowsCard';

// import { useReducer, useEffect } from 'react';

// const usePersistedReducer = (reducer, initialstate, localStoragekey) => {
//   const [state, dispatch] = useReducer(reducer, initialstate, initial => {
//     const persistentValue = localStorage.getItem(localStoragekey);
//     return persistentValue ? JSON.parse(persistentValue) : initial;
//   });
//   useEffect(() => {
//     localStorage.setItem(localStoragekey, state);
//   }, [state, localStoragekey]);
//   return [state, dispatch];
// };

const ShowsGrid = ({ apiData }) => {
  const [starredShows, dispatchStarred] = useStarredShows();

  console.log(starredShows);

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: 'UNSTAR', showId });
    } else {
      dispatchStarred({ type: 'STAR', showId });
    }
  };

  return (
    <div>
      {apiData.map(data => (
        <ShowsCard
          id={data.show.id}
          key={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/Not-Found-Image'}
          summary={data.show.summary}
          onStarMeClick={onStarMeClick}
          isStarred={starredShows.includes(data.show.id)}
        />
      ))}
    </div>
  );
};
export default ShowsGrid;
