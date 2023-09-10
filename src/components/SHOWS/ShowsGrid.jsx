import ShowsCard from './ShowsCard';

const ShowsGrid = ({ apiData }) => {
  return (
    <div>
      {apiData.map(data => (
        <ShowsCard
          id={data.show.id}
          key={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/Not-Found-Image'}
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};
export default ShowsGrid;
