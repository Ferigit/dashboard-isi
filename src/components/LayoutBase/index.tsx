import React, { useEffect } from "react";
import { useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse"; //"@material-ui/core/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { getMenu } from "../../services/api";
import { iconsMap } from "./IconsMap";
import {
  setMenu,
  setMenuTabs,
  getAuthState,
} from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "../../store/store";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { componentsMap } from "../../routes/componentsMap";
import "react-tabs/style/react-tabs.css";
// import { Tabs, TabPane } from "rc-tabs";
// import TabPane from "rc-tabs";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const hasChildren = (item: any) => {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
};

const MenuItem = ({ item }: any) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};
const SingleLevel = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { menuTabs }: any = useSelector(getAuthState);
  const handleAddTab = (tab: string) => {
    console.log("handleAddTab: ", tab);
    if (menuTabs.indexOf(tab) < 0)
      dispatch(setMenuTabs([...menuTabs, item.to]));
  };
  return (
    <ListItem button onClick={() => handleAddTab(item.to)}>
      <ListItemIcon>{iconsMap[item.icon]}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

const MultiLevel = ({ item }: any) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{iconsMap[item.icon]}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ px: 1 }}>
          {children.map((child: any, key: any) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default function MiniDrawer({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { menu }: any = useSelector(getAuthState);
  console.log("redux menu: ", menu);
  const { menuTabs }: any = useSelector(getAuthState);
  let breadCrupm = "";
  menu?.map((item: any) => {
    if (item.items) {
      item?.items?.map((in_item: any) => {
        if (in_item.items) {
          in_item?.items?.map((in_2_item: any) => {
            if (in_2_item.to === menuTabs[selectedIndex]) {
              breadCrupm = in_2_item.breadCrump;
            }
          });
        }
      });
    }
  });
  console.log("breadCrupm: ", breadCrupm);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  const tabNamesMap: any = {
    "/group": "Rules",
    "/rules": "Groups",
  };

  const getTabTitle = (tab: string) => {
    return tabNamesMap[tab];
  };
  const handleCloseTab = (tab: string) => {
    dispatch(setMenuTabs(menuTabs.filter((item: any) => item !== tab)));
  };
  console.log("tabContent menuTabs: ", menuTabs);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            داشبورد
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            width: !open ? "50px !important" : "",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {menu ? (
          menu?.map((item: any, key: any) => <MenuItem key={key} item={item} />)
        ) : (
          <Skeleton count={3} />
        )}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, paddingLeft: !open ? 5 : "" }}
      >
        <DrawerHeader />
        <Tabs
          selectedIndex={selectedIndex}
          onSelect={(index) => {
            console.log("active tab is: ", index);
            setSelectedIndex(index);
          }}
        >
          <TabList>
            {menuTabs.map((tab: any) => (
              <Tab>
                {getTabTitle(tab)}{" "}
                <span onClick={() => handleCloseTab(tab)}>X</span>
              </Tab>
            ))}
          </TabList>
          <h6>{breadCrupm}</h6>
          {menuTabs.map((tabContent: any) => (
            <TabPanel>{componentsMap[tabContent]}</TabPanel>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
