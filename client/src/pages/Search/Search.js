import React, { Component } from "react";
import API from "../../utils/API"
import Navbar from "../../components/Navbar"
import Jumbotron from "../../components/Jumbotron"
import SearchBar from "../../components/SearchBar"
import Results from "../../components/Results"
import Book from "../../components/Book";
import { List } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";



class Search extends Component {

  state = {
    books:[],
    q: "",
    title: "",
    author: "",
    description: "",
    image: "",
    link: "",
    message: ""
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res => 
        this.stateState({
          books: res.data
        })    
        )
        .catch(() => 
          this.setState({
            books:[],
            message: "No New Books Found, Try a Different Query"
          })
        )
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
    console.log("test")
  }

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);
  
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks())
  };

  render() {
      return(
        <>
          <Navbar />
          <Jumbotron>
            <h1>Google Book Search</h1>
            <p>Search for and Save Books of Interest</p>
          </Jumbotron>
          <SearchBar>
            <form>
              <Input 
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
              />
              
              <FormBtn 
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </SearchBar>
          <Results>
            <header>
              <h3>Results</h3>
            </header>
           
            <List>
              {this.state.books.map(book => (
                <Book
                  key={book.id}
                  title={book.volumeInfo.title}
                  subtitle={book.volumeInfo.subtitle}
                  link={book.volumeInfo.infoLink}
                  authors={book.volumeInfo.authors.join(", ")}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  Button={() => (
                    <button
                      onClick={() => this.handleBookSave(book.id)}
                      className="btn btn-primary ml-2">
                        Save
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

export default Search;