export default function AppTitle(props) {
  const { Title, Subtitle } = props;

  return (
    <div>
      <h1>{Title}</h1>
      <p>{Subtitle}</p>
    </div>
  );
}
