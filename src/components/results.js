/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
// some imports
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryTheme,
} from 'victory';
import {
  fetchResults,
} from '../actions/index';


class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.props.fetchResults();
    setTimeout(() => {
      const c = this.props.finalResults.tag_correct * 1;
      const i = this.props.finalResults.vis_tag * 1;
      this.setState({
        data: [
          { 'tag correct': 'incorrect', 'number of replies': i },
          { 'tag correct': 'correct', 'number of replies': c },
        ],
      });
    }, 100);
  }

  render() {
    // this.props.fetchPhoto(this.props.match.params.photoID, this.props.history);
    return (
        <div>
        <h1>Google Vision Accuracy Results</h1>
        <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        // domainPadding will add space to each side of VictoryBar
        domainPadding={80}
        >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2]}
          tickFormat={['Tags Incorrect', 'Tags Correct']}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={x => (x)}
        />
        <VictoryBar
        data={this.state.data}
        x='tag correct'
        y='number of replies'/>
        </VictoryChart>
      </div>
    );
  }
}

// enables this.props.currentPhoto
// eslint-disable-next-line class-methods-use-this
function mapStateToProps(reduxState) {
  return {
    finalResults: reduxState.photos.results,
  };
}


// enables this.props.fetchPhoto, and this.props.updatePhoto
export default connect(mapStateToProps, { fetchResults })(Results);
