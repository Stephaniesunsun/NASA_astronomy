import React from "react";
import { Nav, Story, News, Profile } from "../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeWrapper } from "./HomeStyle";

const Home = () => {
  return (
    <HomeWrapper>
      <Router>
        <Nav />
        <Switch>
          <Story path="/" exact component={Story} />
          <News path="/news" exact component={News} />
          <Profile path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </HomeWrapper>
  );
};

export default Home;
