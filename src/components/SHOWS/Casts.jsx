const Casts = ({ cast }) => {
  return (
    <div>
      {cast.map(item => (
        <div key={item.person.id}>
          <div>
            <img
              src={
                item.person.image
                  ? item.person.image.medium
                  : '/Not-Found-I6999mage.png'
              }
            />
          </div>
          <div>
            {item.person.name}
            {item.character.name}
            {item.voice && '|Voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Casts;
