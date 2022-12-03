// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { Box, CssBaseline, Paper, Typography } from "@mui/material";

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </>
//   );
// }

// export default App;
import React from "react";
import logo from "./logo.svg";
import { CssBaseline, createTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
// import { darkTheme } from "./theme/dark";
// import { lightTheme } from "./theme/light";
// import { ColorContext } from "./context/ColorContext";
// import { SwitchModeButton } from './components/SwitchModeButton'
import Routes from "./Routes";
import ThemeProvider from "./theme/ThemeProvider";
// import { StyledEngineProvider } from "@mui/material/styles";
// import { ErrorBoundary } from "react-error-boundary";
// import { ErrorFallback } from "./components";
import "./App.css";

function App() {
  const [mode, setMode] = React.useState("light");
  // const theme = React.useMemo(
  //   () => createTheme(mode === "light" ? { ...lightTheme, direction: 'rtl' } : { ...darkTheme, direction: 'rtl' }),
  //   [mode]
  // );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <CacheProvider value={cacheRtl}>
      hello
      <ThemeProvider>
        {/* <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[]}> */}
        <div dir="rtl" id="full">
          <Routes />
        </div>
        {/* </ErrorBoundary> */}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
