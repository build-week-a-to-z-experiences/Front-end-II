import React from "react";
import { Route, Switch } from "react-router-dom";
import AddExperience from "./containers/AddExperience/AddExperience";
import SingleExperience from "./containers/SingleExperience/SingleExperience";
import ExperienceList from "./containers/ExperienceList/ExperienceList";
import SignUpForm from "./containers/SignUpForm/SignUpForm";
import LoginForm from "./containers/LoginForm/LoginForm"
import LoggedIn from "./containers/LoggedIn/LoggedIn";

export default function AppRouter() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LoggedIn} />
        <Route path="/experiences/add" component={AddExperience} />
        <Route path="/experiences/all" component={ExperienceList} />
        <Route path="/experiences/:id" component={SingleExperience} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </>
  );
}
