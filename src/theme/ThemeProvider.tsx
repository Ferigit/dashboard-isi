// import {
//   ThemeProvider as MuiThemeProvider,
//   createTheme,
// } from "@mui/material/styles";
// import React, { useCallback, useContext, useReducer } from "react";

// import baseTheme, { getThemeOptions } from "./theme";

// const CHANGE_PALETTE = "CHANGE_PALETTE";
// const ThemeContext = React.createContext({});

// function setPrimaryColor(color: any) {
//   const root = document.documentElement;

//   root.style.setProperty("--color-primary", color);
// }

// const ThemeProvider = ({ children }: any) => {
//   const [{ palette }, dispatch] = useReducer((theme: any, action: any) => {
//     switch (action.type) {
//       case CHANGE_PALETTE:
//         setPrimaryColor(action?.payload);

//         return {
//           ...theme,
//           palette: {
//             ...theme?.palette,
//             primary: {
//               ...theme?.palette?.primary,
//               "900": action?.payload,
//               "800": action?.payload,
//               main: action?.payload,
//             },
//           },
//         };

//       default:
//         return theme;
//     }
//   }, baseTheme);

//   const customTheme = createTheme({
//     ...getThemeOptions(palette),
//     direction: "rtl",
//   });
//   console.log("customTheme: ", customTheme);
//   return (
//     <MuiThemeProvider theme={customTheme}>
//       <ThemeContext.Provider value={dispatch}>{children}</ThemeContext.Provider>
//     </MuiThemeProvider>
//   );
// };

// export default ThemeProvider;

// export const useChangePalette = () => {
//   const dispatch = useContext(ThemeContext);

//   return useCallback(
//     (pal: any) => dispatch && dispatch({ type: CHANGE_PALETTE, payload: pal }),
//     [dispatch]
//   );
// };
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import React, { useCallback, useContext, useReducer } from "react";

import baseTheme, { getThemeOptions } from "./theme";

const CHANGE_PALETTE = "CHANGE_PALETTE";
const ThemeContext = React.createContext({});

function setPrimaryColor(color: string) {
  const root = document.documentElement;

  root.style.setProperty("--color-primary", color);
}

const ThemeProvider = ({ children }: any) => {
  const [{ palette }, dispatch] = useReducer((theme: any, action: any) => {
    switch (action.type) {
      case CHANGE_PALETTE:
        setPrimaryColor(action?.payload);

        return {
          ...theme,
          palette: {
            ...theme?.palette,
            primary: {
              ...theme?.palette?.primary,
              "900": action?.payload,
              "800": action?.payload,
              main: action?.payload,
            },
          },
        };

      default:
        return theme;
    }
  }, baseTheme);

  const customTheme = createTheme(getThemeOptions(palette));
  // const themeNamesDictionary = {
  //   lightTheme: lightTheme,
  // }

  // let theme =
  //   themeNamesDictionary[
  //     `${
  //       palette.length ? palette : localStorage.getItem('palette') || 'light'
  //     }Theme`
  //   ]

  return (
    <MuiThemeProvider theme={customTheme}>
      <ThemeContext.Provider value={dispatch}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;

export const useChangePalette = () => {
  const dispatch: any = useContext(ThemeContext);

  return useCallback(
    (pal: any) => dispatch && dispatch({ type: CHANGE_PALETTE, payload: pal }),
    [dispatch]
  );
};
