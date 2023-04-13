import React, { Component } from "react";
import apiServices from "../services/apiServices";
export default class CreateNewJournal extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.saveJournal = this.saveJournal.bind(this);
        this.newJournal = this.newJournal.bind(this);

        this.state = {
            productid: null,
            title: "",
            status: "Available",
            journaladminid: localStorage.getItem("userID"),
            genre: "",
            author: "",
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
    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        });
    }

    saveJournal() {

        var data = {
            productid: null,
            title: this.state.title,
            status: "Available",
            journaladminid: localStorage.getItem("userID"),
            genre: this.state.genre,
            author: this.state.author,
            count: 1

        };


        apiServices.createJournal(data)
            .then(response => {


                this.setState({
                    title: response.data.title,
                    genre: response.data.genre,
                    author: response.data.author,
                    submitted: true

                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });

    }

    newJournal() {
        this.setState({
            productid: null,
            title: "",
            status: "Available",
            journaladminid: localStorage.getItem("userID"),
            genre: "",
            author: "",
            count: 1,
            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Journal Successfully Added!</h4>
                        <button className="btn btn-success" onClick={this.newJournal}>
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
                            <label htmlFor="title">Author</label>
                            <input
                                type="text"
                                className="form-control"
                                id="author"
                                required
                                value={this.state.author}
                                onChange={this.onChangeAuthor}
                                name="author"
                            />
                        </div>
                        <button onClick={this.saveJournal} className="btn btn-success">
                            Add the Journal
                        </button>
                    </div>
                )}
            </div>
        );
    }

}