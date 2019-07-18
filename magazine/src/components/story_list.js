import React from "react";
import StoryItem from "./story_item";

const StoryList = props => {
  const storyItems = props.stories.map(story => {
    return (
      <StoryItem
        key={story.id}
        story={story}
        onUserSelected={props.onStorySelect}
      />
    );
  });

  return <ul>{storyItems}</ul>;
};

export default StoryList;
