import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    const { name } = this.props;
    return (
      <footer className="footer">
        <h6>
          Compilado por
          {` ${name}`}
          .
        </h6>
      </footer>
    );
  }
}

Footer.propTypes = {
  name: PropTypes.string,
};

Footer.defaultProps = {
  name: 'Movie Cards Library',
};

export default Footer;
