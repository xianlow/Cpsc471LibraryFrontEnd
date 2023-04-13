import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

function CreateNewProductPage() {
    const navigate = useNavigate();
    const navToCreateBook = () => {
        navigate('./book');
    }
    const navToCreateJournal = () => {
        navigate("./journal")
    }
    const navToCreateMovie = () => {
        navigate("./movie")
    }

    return (
        <div>
            
                <div>
                    <div>
                        <button onClick={navToCreateBook} className="btn btn-success">Add a book</button>
                    </div>
                    <div>
                        <button onClick={navToCreateJournal} className="btn btn-success">Add a journal</button>
                    </div>
                    <div>
                        <button onClick={navToCreateMovie} className="btn btn-success">Add a movie</button>
                    </div>
                </div>
            
            

        </div>

    )
}

export default CreateNewProductPage