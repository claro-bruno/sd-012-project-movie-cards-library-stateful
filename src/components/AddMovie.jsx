// implement AddMovie component here
import React, { Component } from 'react';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <form data-testid="add-movie-form" />
    );
  }
}
