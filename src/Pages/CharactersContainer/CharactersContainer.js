import CharactersCard from "../CharactersCard/CharactersCard"
import '../CharactersContainer/CharactersContainer.css'


function CharactersContainer({ characters, clickAction }) {
    
    const displayCharacters = () => characters.map(character => {
        return <CharactersCard key={character.id} character={character}  clickAction={clickAction}/>
    })

    return (
        <div className="characters-container">
            {displayCharacters()}
        </div>
    )
}

export default CharactersContainer