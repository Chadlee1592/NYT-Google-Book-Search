import React, { Component } from "react";
import API from "../../utils/API"
import Navbar from "../../components/Navbar"
import Jumbotron from "../../components/Jumbotron"
import Results from "../../components/Results"
import Book from "../../components/Book";
import { List } from "../../components/List";

class Saved extends Component {

    state = {
      books:[],
    };
  
    componentDidMount() {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
          .then(res => 
            this.setState({
                books: res.data
            })
            )
            .catch(err => console.log(err))
    }

    handleBookDelete = id => {
        API.deleteBook(id).then(res => this.getSavedBooks());
    };
  
    render() {
        return(
          <>
            <Navbar />
            <Jumbotron>
              <h1>Google Book Search</h1>
              <p>Search for and Save Books of Interest</p>
            </Jumbotron>
            <Results>
            <header>
              <h3>Saved</h3>
            </header>
           
            <List>
              {this.state.books.map(book => (
                <Book
                  key={book._id}
                  title={book.title}
                  subtitle={book.subtitle}
                  link={book.link}
                  authors={book.authors.join(", ")}
                  description={book.description}
                  image={book.image}
                  Button={() => (
                    <button
                      onClick={() => this.handleBookDelete(book._id)}
                      className="btn btn-primary ml-2">
                        Delete
                      </button>
                  )}
                ></Book>
              ))}
            </List>
          </Results>
          </>  
          
        );
    }
  }
  
  export default Saved;