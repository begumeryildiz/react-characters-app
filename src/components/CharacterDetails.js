import axios from "axios";
import { useParams } from "react-router-dom";

function CharacterDetails(){

    const {characterId} = useParams();

    axios

    return <h1>Character with id: {characterId}</h1>
}

export default CharacterDetails;