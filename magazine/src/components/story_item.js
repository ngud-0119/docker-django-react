import React from "react";

const StoryItem = props => {
  const story = props.story;
  const onUserSelected = props.onUserSelected;
  const imageUrl = story.thumbnail_url;

  return (
    <div onClick={() => onUserSelected(story)} className="related-story-list">
      <div className="">
        <div className="row media-left">
          <img className="media-object" src={imageUrl} alt="story thumbnail" />
        </div>
        <div className="row">
          <strong>{story.title}</strong>
        </div>
        <div className="row">{story.excerpt}</div>
      </div>
    </div>
  );
};

export default StoryItem;
