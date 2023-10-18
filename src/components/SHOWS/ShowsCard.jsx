const ShowsCard = ({ name, image, id, summary, onStarMeClick, isStarred }) => {
  const summarystripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Description';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summarystripped}</p>
      <div>
        <a href={`/SHOWS/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button
          type="button"
          onClick={() => {
            onStarMeClick(id);
          }}
        >
          {isStarred ? 'Unstar me' : 'Starme'}
        </button>
      </div>
    </div>
  );
};
export default ShowsCard;
