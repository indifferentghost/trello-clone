import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ErrorHandler extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(/* error */) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <span>There was an error</span>;
    }

    return children;
  }
}

ErrorHandler.propTypes = {
  children: PropTypes.element,
};
