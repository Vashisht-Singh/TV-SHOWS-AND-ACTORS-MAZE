const Details = props => {
  const { status, premired, network } = props;
  return (
    <div>
      <p>Staus:{status}</p>
      <p>
        Premired {premired} {!!network && `on ${network.name}`}
      </p>
    </div>
  );
};

export default Details;
