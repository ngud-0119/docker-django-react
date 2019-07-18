import React, { Component } from "react";
import "./App.css";

import StoryList from "./components/story_list";
import StoryDetail from "./components/story_detail";

const Latest_Articles_URL =
  "http://trivago-magazine-work-sample-server.s3-website.eu-central-1.amazonaws.com/latest_posts.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
      selectedStory: null,
      storyDetail: null,
      rating: null
    };
  }

  componentDidMount() {
    fetch(Latest_Articles_URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          stories: data,
          selectedStory: null,
          storyDetail: null,
          rating: null
        });
      });
  }

  ratingChange(rating_value) {
    this.setState({
      rating: rating_value
    });

    let story_title = this.state.storyDetail.title;
    const apiUrl = "http://127.0.0.1:8000/api/";
    const options = {
      method: "POST",
      body: JSON.stringify({
        rating: rating_value,
        title: story_title
      }),
      credentials: "same-origin", //include, same-origin
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    fetch(apiUrl, options)
      .then(alert("Rating Submitted Successfully"))
      .catch(function(error) {
        console.log(error);
      });
  }

  storySelect(selectedStory) {
    if (selectedStory) {
      fetch(selectedStory.uri, {
        method: "GET",
        credentials: "same-origin", //include, same-origin
        headers: {
          Accept: "text/json",
          "Content-Type": "text/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          this.setState({
            storyDetail: data,
            selectedStory: selectedStory
          });
        });
    } else {
      this.setState({
        selectedStory: selectedStory
      });
    }
  }

  render() {
    return (
      <div>
        <div className="row page-heading" />
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-2">
            <a
              href="javascript:{}"
              onClick={selectedStory => this.storySelect(null)}
              className="btn btn-info btn-lg"
            >
              <span className="glyphicon glyphicon-home" />
              {this.state.selectedStory ? "Back to Home" : "Home"}
            </a>
          </div>
          <div className="col-lg-2" />
          <div className="col-lg-7">
            <h1 className="page-heading">Trivago Magazine Challenge</h1>
          </div>
        </div>
        <div className="row story-panel">
          <div className="col-lg-1" />
          <div className={this.state.selectedStory ? "col-lg-10" : ""}>
            <StoryDetail
              story={this.state.selectedStory}
              story_detail={this.state.storyDetail}
              ratingChange={rating => this.ratingChange(rating)}
            />
          </div>
          <div
            className={
              this.state.selectedStory ? "hide-item col-lg-4" : "col-lg-4"
            }
          >
            <h3 className="sub-heading">
              <strong>Trending Articles</strong>
            </h3>
            <div
              className={this.state.selectedStory ? "related-story-list" : ""}
            >
              <StoryList
                onStorySelect={selectedStory => this.storySelect(selectedStory)}
                stories={this.state.stories}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
