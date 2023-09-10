import ActorsCard from './ActorsCard';
const ActorsGrid = ({ apiData }) => {
  return (
    <div>
      {apiData.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image ? data.person.image.medium : '/Not-Found-Image'
          }
        />
      ))}
    </div>
  );
};
export default ActorsGrid;
