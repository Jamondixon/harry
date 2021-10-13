import CharactersCard from "./CharactersCard"


function CharactersContainer({ characters, clickAction }) {
    
    const displayCharacters = () => characters.map(character => {
        return <CharactersCard key={character.id} character={character}  clickAction={clickAction}/>
    })

    return (
        <div className="character-container">
            {displayCharacters()}
        </div>
    )
}

export default CharactersContainer