/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
// some imports
// eslint-disable-next-line no-unused-vars
import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
  fetchPhoto, updatePhoto, getNextPhoto, updateCount,
} from '../actions/index';


class Photo extends Component {
  constructor(props) {
    super(props);
    this.onNoClick = this.onNoClick.bind(this);
    this.onYesClick = this.onYesClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.helperGetNext = this.helperGetNext.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoID, this.props.history);
  }

  onYesClick() {
    const photo = {
      vis_tag: this.props.currentPhoto.vis_tag,
      img: this.props.currentPhoto.img,
      tag_correct: 'true',
    };
    this.props.updatePhoto(photo, this.props.match.params.photoID, this.props.history);
    setTimeout(() => {
      this.props.fetchPhoto(this.props.match.params.photoID, this.props.history);
    }, 100);
  }

  onNoClick() {
    const photo1 = {
      vis_tag: this.props.currentPhoto.vis_tag,
      img: this.props.currentPhoto.img,
      tag_correct: 'false',
    };
    this.props.updatePhoto(photo1, this.props.match.params.photoID, this.props.history);
    setTimeout(() => {
      this.props.fetchPhoto(this.props.match.params.photoID, this.props.history);
    }, 100);
  }

  async helperGetNext() {
    const result = await this.props.getNextPhoto();
    return result;
  }


  onNextClick() {
    this.helperGetNext();
    setTimeout(() => {
      if (this.props.nextPhoto != null) {
        // if statement below is "just in case" and will only trigger if methods get called very out of sync
        if (this.props.match.params.photoID === this.props.nextPhoto._id) {
          if (this.props.currentPhoto.tag_correct === 'false') {
            this.onNoClick();
            this.props.updateCount(false);
          } else {
            this.onYesClick();
            this.props.updateCount(true);
          }
        } else {
          this.props.updateCount(this.props.currentPhoto.tag_correct);
        }
        setTimeout(() => {
          if (this.props.nextPhoto != null) {
            this.props.history.push(`/photos/${this.props.nextPhoto._id}`);
            this.props.fetchPhoto(this.props.match.params.photoID, this.props.history);
          }
        }, 100);
      } else {
        this.props.updateCount(this.props.currentPhoto.tag_correct);
        setTimeout(() => {
          this.props.history.push('/results');
        }, 100);
      }
    }, 100);
  }

  render() {
    // this.props.fetchPhoto(this.props.match.params.photoID, this.props.history);
    return (
      <div className="photoPage">
        <h1>This photo has been tagged as {this.props.currentPhoto.vis_tag}</h1><br />
        <div id="imageWrapper"><img src={this.props.currentPhoto.img}></img></div><br />
        <p>Is this tag correct for the photo shown above?</p><br />
        <button onClick={this.onYesClick}>Yes, the tag is correct</button>
        <button onClick={this.onNoClick}>No, the tag is wrong</button><br />
        <button onClick={this.onNextClick}>Next photo</button>
        {/* <div id="icons">
        <i className="fas fa-trash" onClick={this.onDelete}></i>
        <i onClick ={this.toEdit} className="fas fa-edit"></i>
        </div> */}
      </div>
    );
  }
}

// enables this.props.currentPhoto
// eslint-disable-next-line class-methods-use-this
function mapStateToProps(reduxState) {
  return {
    currentPhoto: reduxState.photos.current,
    nextPhoto: reduxState.photos.next,
  };
}


// enables this.props.fetchPhoto, and this.props.updatePhoto
export default connect(mapStateToProps, {
  fetchPhoto, updatePhoto, getNextPhoto, updateCount,
})(Photo);
