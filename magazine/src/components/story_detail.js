import React from "react";
import ReactHtmlParser from "react-html-parser";

const StoryDetail = props => {
  const story = props.story;
  const story_detail = props.story_detail;
  const ratingChange = props.ratingChange;

  if (!story) {
    return <div />;
  }

  return (
    <div>
      <div className="rate">
        <span className="rate-heading">
          <strong>Rate Article: </strong>
        </span>
        <input
          type="radio"
          id="star5"
          name="rate"
          value="5"
          onChange={() => ratingChange("5")}
        />
        <label htmlFor="star5" title="text">
          5 stars
        </label>
        <input
          type="radio"
          id="star4"
          name="rate"
          value="4"
          onChange={() => ratingChange("4")}
        />
        <label htmlFor="star4" title="text">
          4 stars
        </label>
        <input
          type="radio"
          id="star3"
          name="rate"
          value="3"
          onChange={() => ratingChange("3")}
        />
        <label htmlFor="star3" title="text">
          3 stars
        </label>
        <input
          type="radio"
          id="star2"
          name="rate"
          value="2"
          onChange={() => ratingChange("2")}
        />
        <label htmlFor="star2" title="text">
          2 stars
        </label>
        <input
          type="radio"
          id="star1"
          name="rate"
          value="1"
          onChange={() => ratingChange("1")}
        />
        <label htmlFor="star1" title="text">
          1 star
        </label>
      </div>

      <div className="" />
      <img
        src={story.thumbnail_url}
        width="100%"
        height="550px"
        alt="Story Thumbnail"
      />
      <hr />
      <div>
        <div>
          <span>
            <strong>{story.title}</strong>
          </span>
        </div>
        <div>
          <span>{ReactHtmlParser(story_detail.content[0].text)}</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default StoryDetail;
