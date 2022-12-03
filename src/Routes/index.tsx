import * as React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import useGlobalStyle from "../theme/useGlobalStyle.style";

// import SignupPage from '../pages/Auth/SignupPage'
import LayoutBase from "../components/LayoutBase";
import HomePage from "../pages/Dashboard/HomePage";
import GroupManagements from "../pages/Dashboard/GroupManagements";
// import CreateIdea from '../pages/Dashboard/CreateIdea';
// import CompleteIdea from '../pages/Dashboard/CreateIdea/CompleteIdea';
// import IdeasList from '../pages/Dashboard/IdeasList';

const AppRoutes = () => {
  useGlobalStyle();

  let routes = useRoutes([
    // { path: "/sign-up", element: <SignupPage /> },
    { path: "/", element: <HomePage /> },
    { path: "/group-managements", element: <GroupManagements /> },
    // { path: "/create-idea", element: <CreateIdea /> },
    // { path: "/create-full-idea", element: <CompleteIdea /> },
    // { path: "/ideas", element: <IdeasList /> },
  ]);
  return routes;
};

export default function Routes() {
  return (
    <Router>
      <LayoutBase>
        <AppRoutes />
      </LayoutBase>
    </Router>
  );
}
