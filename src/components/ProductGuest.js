import React, { Component } from "react";
//import apiServices from "../services/apiServices";
import "../styles/Product.css";

const profilePic = "./images/ess-logo.png"
export default class ProductGuest extends Component {
  constructor(props) {
    super(props);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.state = {
      books: [],
      movies: [],
      journal: [],
      currentProduct: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }


  retrieveProducts() {
    /*
    apiServices.getAll()
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      */
    this.setState({
      books: [{
        "title": "TitleVal",
        "author": "theAuthor",
        "status": false.toString()
      },
      {
        "title": "Title2",
        "author": "theAuthor2",
        "status": true.toString()
      }],

      movies: [{
        "title": "TitleVal",
        "director": "theDirector",
        "status": false.toString()
      },
      {
        "title": "Title2",
        "director": "theDirector2",
        "status": true.toString()
      }],
      journal: [{
        "title": "TitleVal",
        "author": "theAuthor",
        "status": false.toString()
      },
      {
        "title": "Title2",
        "author": "theAuthor2",
        "status": true.toString()
      }]
    })
  }

  refreshList() {
    this.retrieveProducts();
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });
  }
  /*
    removeAllPosts() {
      apiServices.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    }
  */

  render() {
    const { books, movies, journal } = this.state;

    return (

      <div className="list-group">
        <h1>Books</h1>
        {journal &&
          journal.map((BookList) => (
            <div className="journal">

              <div class="book_content">
                <div class="book_text_container">
                  <div class="book_title">
                    <h3>{BookList.title}</h3>
                    
                  </div>
                  <div class="book_author">
                    <p>{BookList.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h1>Movies</h1>
          {movies &&
          movies.map((moviesList) => (
            <div className="movies">

              <div class="movies_content">
                <div class="movies_text_container">
                  <div class="movies_title">
                    <h3>{moviesList.title}</h3>
                    
                  </div>
                  <div class="movies_director">
                    <p>{moviesList.director}</p>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
          <h1>Journals</h1>
          {journal &&
          journal.map((JournalList) => (
            <div className="journal">

              <div class="journal_content">
                <div class="journal_text_container">
                  <div class="journal_title">
                    <h3>{JournalList.title}</h3>
                    
                  </div>
                  <div class="journal_author">
                    <p>{JournalList.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

    );
  }
}