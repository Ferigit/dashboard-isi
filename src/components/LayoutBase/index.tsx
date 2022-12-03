// import React, { useState } from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import useLayoutStyle from "./useLayout.style";
// import cs from "classnames";
// // import { Button, AutoCompleteField } from "../../components";
// import ClickAwayListener from "@mui/material/ClickAwayListener";
// import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";

// const MenuImages = {
//   setting: {
//     name: "کدساز رایتن",
//     src: "/assets/img/home-page/home.png",
//     link: "/",
//   },
//   structure: {
//     name: "مدیریت امنیت",
//     src: "/assets/img/home-page/info.png",
//     link: "/create-idea",
//   },
//   symbol: {
//     name: "مدیریت محیط اجرا",
//     src: "/assets/img/home-page/idea.png",
//     link: "/create-full-idea",
//   },
//   daneshbonyan: {
//     name: "مدیریت اطلاعات پایه",
//     src: "/assets/img/home-page/list-text.png",
//     link: "/ideas",
//   },
//   cotactus: {
//     name: "مدیریت ساختار سازمانی",
//     src: "/assets/img/home-page/questions.png",
//   },
//   // cotactus: {
//   //   name: "مدیریت رویداد نگاری",
//   //   src: "/assets/img/home-page/questions.png",
//   // },
//   // cotactus: {
//   //   name: "مدیریت رویداد نگاری",
//   //   src: "/assets/img/home-page/questions.png",
//   // },
// };

// const drawerWidth = 240;

// const openedMixin = (theme: any) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme: any) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }: any) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }: any) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function MiniDrawer({ children }: any) {
//   const theme = useTheme();
//   const [open, setOpen] = useState<any>(false);
//   const classes: any = useLayoutStyle();

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const [selectedMenu, setSelectedMenu] = useState("setting");
//   let navigate = useNavigate();

//   // const classes = useLayoutStyle()
//   return (
//     <Box
//       sx={{ display: "flex", height: "100%" }}
//       className={cs(
//         classes.root
//         // open ? classes.openDrawer : classes.closedDrawer
//       )}
//     >
//       <CssBaseline />
//       {/* <AppBar position="fixed" open={open}>
//         <div className={cs(classes.header, "p-md", open ? "pr-xs" : "pr-md")}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={(e) => {
//               e.stopPropagation();
//               handleDrawerOpen();
//             }}
//             edge="start"
//             // sx={{
//             //     marginRight: 5,
//             //     color: "rgb(88,66,226)",
//             //     ...(open && { display: 'none' }),
//             // }}
//             sx={{
//               marginRight: 5,
//               color: "rgb(88,66,226)",
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <div
//             className={cs("flex flex-1 items-center", open ? "pr-xs" : "pr-lg")}
//           >
//             <img src="/assets/img/logo.svg" className={classes.logo} />
//             <p className={classes.title}>کارگروه مشارکت و نوآوری(فکرینو)</p>
//           </div>
//           <div className="flex flex-1 justify-end">
//             <AutoCompleteField
//               value={""}
//               label="جستجو"
//               onChange={(value) => {
//                 console.log("value is:");
//                 navigate("/create-idea");
//               }}
//               className={classes.searchInput}
//               options={["label 1", "label 2", , "label 3"]}
//             />
//             <Button
//               title="ثبت ایده"
//               onClick={() => {
//                 navigate("/create-full-idea");
//               }}
//               icon={() => <img src="/assets/img/home-setting.png" />}
//               className={classes.setting}
//             />
//           </div>
//         </div>
//       </AppBar> */}
//       <ClickAwayListener onClickAway={handleDrawerClose}>
//         <Drawer
//           variant="permanent"
//           open={open}
//           style={{ width: !open ? "64px !important" : "" }}
//         >
//           <DrawerHeader>
//             <IconButton onClick={handleDrawerClose}>
//               {theme.direction === "rtl" ? (
//                 <ChevronRightIcon style={{ color: "#fff" }} />
//               ) : (
//                 <ChevronLeftIcon />
//               )}
//             </IconButton>
//           </DrawerHeader>

//           <Divider />
//           {/* <List>
//             {open && (
//               <ListItem
//                 key={"logo"}
//                 disablePadding
//                 sx={{ display: "block", textAlign: "center" }}
//               >
//                 <img src="/assets/img/sidebarlogo.png" />
//               </ListItem>
//             )}
//             <div className={open ? classes.menuBox : classes.collapseMenuBox}>
//               {["setting", "structure", "symbol"].map((text, index) => (
//                 <ListItem
//                   className={selectedMenu === text && classes.selectedMenu}
//                   key={text}
//                   disablePadding
//                   sx={{ display: "block" }}
//                 >
//                   <ListItemButton
//                     onClick={() => {
//                       navigate(MenuImages[text].link);
//                       setSelectedMenu(text);
//                     }}
//                     sx={{
//                       minHeight: 48,
//                       justifyContent: open ? "initial" : "center",
//                       px: 2.5,
//                       ...(!open && { padding: 0 }),
//                     }}
//                   >
//                     <img
//                       src={MenuImages[text].src}
//                       alt={text}
//                       className={classes.menuIcon}
//                     />
//                     {open && (
//                       <ListItemText
//                         primary={MenuImages[text].name}
//                         sx={{ opacity: open ? 1 : 0 }}
//                         className={cs(classes.menuText)}
//                       />
//                     )}
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//               <Divider className={classes.divider} />
//               {["daneshbonyan", "cotactus"].map((text, index) => (
//                 <ListItem
//                   className={selectedMenu === text && classes.selectedMenu}
//                   key={text}
//                   disablePadding
//                   sx={{ display: "block" }}
//                 >
//                   <ListItemButton
//                     className={selectedMenu === text && classes.selectedMenu}
//                     onClick={() => {
//                       navigate(MenuImages[text].link);
//                       setSelectedMenu(text);
//                     }}
//                     sx={{
//                       minHeight: 48,
//                       justifyContent: open ? "initial" : "center",
//                       px: 2.5,
//                       ...(!open && { padding: 0 }),
//                     }}
//                   >
//                     <img
//                       src={MenuImages[text].src}
//                       alt={text}
//                       className={classes.menuIcon}
//                     />
//                     {open && (
//                       <ListItemText
//                         primary={MenuImages[text].name}
//                         sx={{ opacity: open ? 1 : 0 }}
//                         className={cs(classes.menuText)}
//                       />
//                     )}
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </div>
//           </List> */}
//         </Drawer>
//       </ClickAwayListener>

//       <Box component="main" sx={{ flexGrow: 1 }}>
//         <DrawerHeader />
//         {children}
//         <Footer />
//       </Box>
//     </Box>
//   );
// }
import * as React from "react";
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

import { menu } from "./menu";

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

  return (
    <ListItem button onClick={() => navigate(item.to)}>
      <ListItemIcon>{item.icon}</ListItemIcon>
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
        <ListItemIcon>{item.icon}</ListItemIcon>
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
        {menu.map((item, key) => (
          <MenuItem key={key} item={item} />
        ))}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, paddingLeft: !open ? 5 : "" }}
      >
        <DrawerHeader />

        {children}
      </Box>
    </Box>
  );
}
