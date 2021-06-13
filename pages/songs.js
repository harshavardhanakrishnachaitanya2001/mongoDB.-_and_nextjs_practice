import {connectToDatabase} from '../util/mongodb'
export async function getStaticProps(){
    const {db}=await connectToDatabase()
    const songs=await db.collection("songs").find().toArray()
    return {
        props:{
            songs:JSON.parse(JSON.stringify(songs))
        }
    }   
}

export default function Songs({songs}){
    return (
        <div>
            <h1>All the songs I love</h1>
                <ul>
                    {
                        songs.map(song => {return (
                            <li>
                                <h2>Song title: {song.Title}</h2>
                                <h2>Movie: {song.Movie}</h2>
                                <h2>Hero: {song.Hero}</h2>
                                <h2>Heroine: {song.Heroine1}</h2>
                            </li>
                        )})
                    }
                </ul>
        </div>
    )
}