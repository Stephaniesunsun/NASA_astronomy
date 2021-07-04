/*
1. the story of the day
*/
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ScreenWrapper, Title, Section, Content, Image } from "./StoryStyle";

const Story = () => {
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;
  const [story, setStory] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setStory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ScreenWrapper>
      <Section>
        <Title>{story.title}</Title>
        <Content>{story.explanation}</Content>
      </Section>
      <Section>
        {loading ? <h2>Loading...</h2> : ""}
        <Image src="https://apod.nasa.gov/apod/image/2107/Walk_Milkyway.jpg" />
      </Section>
    </ScreenWrapper>
  );
};

export default Story;
