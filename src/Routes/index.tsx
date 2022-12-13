import React, { useEffect } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import useGlobalStyle from "../theme/useGlobalStyle.style";
import LayoutBase from "../components/LayoutBase";
import HomePage from "../pages/Dashboard/HomePage";
import { getMenu } from "../services/api";
import { componentsMap } from "./componentsMap";
import { setMenu, getAuthState } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "../store/store";

const AppRoutes = ({ menu }: any) => {
  useGlobalStyle();

  const routesObj: any = [
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <HomePage /> },
  ];
  menu?.map((item: any) => {
    item.items?.map((in_item1: any) => {
      in_item1?.items.map((in_item2: any) => {
        routesObj.push({
          path: `${in_item2.to}`,
          element: componentsMap[in_item2.to],
        });
      });
    });
  });
  let routes = useRoutes(routesObj);
  return routes;
};

export default function Routes() {
  const dispatch = useDispatch();
  const { menu }: any = useSelector(getAuthState);

  const fetchMenu = async () => {
    try {
      const res: any = await getMenu();

      const { data } = res;
      dispatch(setMenu(data));
    } catch (error) {}
  };
  useEffect(() => {
    if (!menu) fetchMenu();
  }, []);

  return (
    <Router>
      <LayoutBase>
        <AppRoutes menu={menu} />
      </LayoutBase>
    </Router>
  );
}
