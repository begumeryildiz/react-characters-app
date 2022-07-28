import './CharacterList.css';

function CharacterList(props) {

    const renderCharacters = () => {
        const result = props.characters.map((element, index) => {
            return (
                <div key={index} className='character'>
                    <h2>{element.name}</h2>
                    <p>Occupation: {element.occupation}</p>
                    <p>Weapon: {element.weapon}</p>

                    <button onClick={() => { props.callbackToDelete(element.id) }}>Delete</button>
                </div>
            );
        });

        return result;
    }


    return (
        <div>
            {props.characters === null
                ? <p>loading...</p>
                : renderCharacters()
            }
        </div>
    )
}

export default CharacterList;