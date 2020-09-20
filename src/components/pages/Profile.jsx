import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Profile.css'

const Profile = () => {
    const { name } = useParams();
    const [Character, setCharacter] = useState([]);
    const [quote, setQuote] = useState([]);

    //to set no of quotes made by the character
    var i = 1;

    useEffect(() => {
        fetchCharacter();
        fetchAllQuotes();
    }, []);

    //fetch character details from api
    const fetchCharacter = async () => {
        const result = await axios(
            `https://www.breakingbadapi.com/api/characters?name=${name}`
        )
        console.log(result.data)
        setCharacter(result.data)
    }

    //fetch quotes made by character 
    const fetchAllQuotes = async () => {
        const quotes = await axios(
            `https://www.breakingbadapi.com/api/quote?author=${name}`
        )
        console.log(quotes.data)
        setQuote(quotes.data)
    }

    return (
        <>
            {Character.map(character => (
                <div className="details">

                    {/* image of the character */}
                    <img className="profileImage" src={character.img} />

                    {/* name of the character */}
                    <h3 className="Name">{character.name}</h3>

                    {/* details of the character */}
                    <div style={{padding: "30px"}} className="content">
                        <div className="quotes-bold">About the Character :</div>
                        <div style={{ margin: "10px" }}>
                            <div className="information">
                                <p className="bold">Date of Birth :</p>
                                <p>{character.birthday}</p>
                            </div>
                            <div className="information">
                                <p className="bold">Occupation :</p>
                                <p>{character.occupation}</p>
                            </div>
                            <div className="information">
                                <p className="bold">Status :</p>
                                <p>{character.status}</p>
                            </div>
                            <div className="information">
                                <p className="bold">Nickname :</p>
                                <p>{character.nickname}</p>
                            </div>
                            <div className="information">
                                <p className="bold">Actor who portrays the character :</p>
                                <p>{character.portrayed}</p>
                            </div>
                            <div className="information">
                                <p className="bold">Seasons :</p>
                                {character.appearance.map(seasons => (
                                    <p>Season {seasons} , </p>
                                ))}
                            </div>
                        </div>

                        {/* maps all the quotes made by the character */}
                        <div className="quotes">
                            <p className="quotes-bold">All quotes by the character :</p>
                            {quote.map(quotes => (
                                <p className="quotesList">{i++}) {quotes.quote}</p>
                            ))}
                        </div>
                    </div>

                </div>
            ))}
        </>

    )
}

export default Profile;