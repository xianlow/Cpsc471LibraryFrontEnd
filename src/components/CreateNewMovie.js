import React, { Component } from "react";
import apiServices from "../services/apiServices";
export default class CreateNewMovie extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeDirector = this.onChangeDirector.bind(this);
        this.onChangeLengthOf = this.onChangeLengthOf.bind(this);
        this.saveMovie = this.saveMovie.bind(this);
        this.newMovie = this.newMovie.bind(this);

        this.state = {
            productid: null,
            title: "",
            director: "",
            length: 0,
            status: "Available",
            movieadminid: localStorage.getItem("userID"),
            genre: "",
            count: 1,
            submitted: false
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeGenre(e) {
        this.setState({
            genre: e.target.value
        });
    }
    onChangeDirector(e) {
        this.setState({
            director: e.target.value
        });
    }
    onChangeLengthOf(e) {
        this.setState({
            length: e.target.value
        });
    }

    saveMovie() {

        var data = {
            productid: null,
            title: this.state.title,
            director: this.state.director,
            length: this.state.length,
            status: "Available",
            movieadminid: localStorage.getItem("userID"),
            genre: this.state.genre,
            count: 1

        };


        apiServices.createMovie(data)
            .then(response => {


                this.setState({
                    title: response.data.title,
                    director: response.data.director,
                    length: response.data.length,
                    genre: response.data.genre,
                    submitted: true

                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    }

    newMovie() {
        this.setState({
            productid: null,
            title: "",
            director: "",
            length: 0,
            status: "Available",
            movieadminid: localStorage.getItem("userID"),
            genre: "",
            count: 1,
            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Movie Successfully Added!</h4>
                        <button className="btn btn-success" onClick={this.newMovie}>
                            Add Another
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Length of film (Only in numbers)</label>
                            <input
                                type="number"
                                pattern="[0-9]*"
                                className="form-control"
                                id="lengthof"

                                required
                                value={this.state.length}
                                onChange={this.onChangeLengthOf}
                                name="lengthof"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Genre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="genre"
                                required
                                value={this.state.genre}
                                onChange={this.onChangeGenre}
                                name="genre"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Director</label>
                            <input
                                type="text"
                                className="form-control"
                                id="director"
                                required
                                value={this.state.director}
                                onChange={this.onChangeDirector}
                                name="director"
                            />
                        </div>
                        <button onClick={this.saveMovie} className="btn btn-success">
                            Add the movie
                        </button>
                    </div>
                )}
            </div>
        );
    }

}