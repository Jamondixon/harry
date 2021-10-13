import React from 'react'

function CharactersCard({ character }) {
    return (
        <div className="card-container">
            <header className="card-title-container">
                <h1 className='card-title'>{character.name}</h1>
                <img src={character.image} alt="character"/>
            </header>
            <body className="card-body">
                <h2 className='card-house'>{character.house}</h2>
                <h3 className='card-ancestry'>{character.ancestry}</h3>
                <h4 className='character-patronus'>{character.patronus}</h4>
            </body>
        </div>
    )
}

export default CharactersCard