import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchMovies("Antz");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
    this.setState({ search: "" })
  }

  renderMovieStuff = () => {
    if (this.state.result.Title) {
      return (<MovieDetail
        title={this.state.result.Title}
        src={this.state.result.Poster}
        director={this.state.result.Director}
        genre={this.state.result.Genre}
        released={this.state.result.Released}
      />)
    } else {
      return <h3>No film exists!</h3>
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.renderMovieStuff()}
              {/* {this.state.result.Title ? (<MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />) : (
                  <h3>Not a real movie</h3>
                )
              } */}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OmdbContainer;
