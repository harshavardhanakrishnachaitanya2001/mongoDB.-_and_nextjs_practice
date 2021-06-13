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
                                <h2>{song.Title}</h2>
                                <h2>{song.Movie}</h2>
                                <h2>{song.Hero}</h2>
                                <h2>{song.Heroine}</h2>
                            </li>
                        )})
                    }
                </ul>
        </div>
    )
}