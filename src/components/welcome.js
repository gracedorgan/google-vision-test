/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
// some imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  getNextPhoto,
} from '../actions/index';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.onStartClick = this.onStartClick.bind(this);
    this.helperGetNext = this.helperGetNext.bind(this);
  }

  componentDidMount() {
    this.helperGetNext();
  }

  async helperGetNext() {
    const result = await this.props.getNextPhoto();
    return result;
  }

  onStartClick() {
    if (this.props.nextPhoto != null) {
      setTimeout(() => {
        if (this.props.nextPhoto != null) {
          this.props.history.push(`/photos/${this.props.nextPhoto._id}`);
        }
      }, 100);
    } else {
      this.props.history.push('/photos/results');
    }
  }

  render() {
    return (
        <div>
        <h1>Welcome to my Google Vision Accuracy Test</h1>
        <p>Click the button below to get started telling us whether the tag vision has given each picture is right or wrong.</p>
        <p>Results will display after you have analyzed all pictures in the dataset.</p>
        <button onClick={this.onStartClick}>Start Helping</button>
      </div>
    );
  }
}

// enables this.props.currentPhoto
// eslint-disable-next-line class-methods-use-this
function mapStateToProps(reduxState) {
  return {
    nextPhoto: reduxState.photos.next,
  };
}


// enables this.props.fetchPhoto, and this.props.updatePhoto
export default connect(mapStateToProps, { getNextPhoto })(Welcome);
