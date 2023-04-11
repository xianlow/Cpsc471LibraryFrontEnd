import React, { Component } from "react";
//import apiServices from "../services/apiServices";
export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.savePost = this.savePost.bind(this);
        this.newPost = this.newPost.bind(this);

        this.state = {
            //eventId: "",
            id: null,
            title: "",
            content: "",
            department: "engineering",
            submitted: false
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    savePost() {

        var data = {
            title: this.state.title,
            content: this.state.content,
            department: "engineering",
        };

        /*
                apiServices.create(data)
                    .then(response => {
        
        
                        this.setState({
                            title: response.data.title,
                            content: response.data.content,
                            department: "engineering",
                            submitted: true
                        });
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
                    */
    }

    newPost() {
        this.setState({
            id: null,
            title: "",
            content: "",
            department: "engineering",

            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Post Successfully Added!</h4>
                        <button className="btn btn-success" onClick={this.newPost}>
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
                            <label htmlFor="Content">Content</label>
                            <br />
                            <textarea
                                placeholder="Enter Post..."
                                rows="8"
                                cols="40"
                                className="form-control"
                                id="content"
                                required
                                value={this.state.content}
                                onChange={this.onChangeContent}
                                name="content"
                            />
                        </div>

                        <button onClick={this.savePost} className="btn btn-success">
                            Save Post
                        </button>
                    </div>
                )}
            </div>
        );
    }

}