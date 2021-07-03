import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
    return (
      <div>
        <form data-testid="add-movie-form">
          <section>
            <label htmlFor="title" data-testid="title-input-label">
              Título
              <input
                data-testid="title-input"
                type="text"
                name="title"
                value={ title }
                onChange={ this.changeHandler }
              />
            </label>
          </section>
        </form>
      </div>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
export default AddMovie;
