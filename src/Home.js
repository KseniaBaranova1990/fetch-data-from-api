import React, { Component } from "react";

class Person extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          items: response.results,
          loading: true,
        });
      });
  }

  render() {
    const { items, loading } = this.state;
    if (!loading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          {items.map((item) => (
            <div>
              <p>Name: {item.name.first}</p>
              <p>Gender: {item.gender}</p>
              <img src={item.picture.medium} alt={item.name.first} />
            </div>
          ))}
        </div>
      );
    }
    return <div></div>;
  }
}

export default Person;
