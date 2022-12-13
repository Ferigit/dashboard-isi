import HomePage from "../pages/Dashboard/HomePage";
import GroupPage from "../pages/Dashboard/GroupManagements";
import RulesPage from "../pages/Dashboard/GroupManagements";

export const componentsMap: any = {
  "/": <HomePage />,
  "/group": <GroupPage />,
  "/rules": <RulesPage />,
};
