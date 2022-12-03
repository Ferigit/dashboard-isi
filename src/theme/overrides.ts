// FIXME : find a repacement for Ovverides
// import { Overrides } from '@material-ui/core/styles/overrides'

const overrides = {
  MuiCssBaseline: {
    styleOverrides: {
      "& .MuiTextField-root": {
        width: "100% !important",
      },
      h1: {
        fontFamily: "'IranSans'",
        fontWeight: 300,
        fontSize: "4rem",
        lineHeight: 1,
        letterSpacing: "-0.01562em",
      },
      h2: {
        fontFamily: "'IranSans'",
        fontWeight: 300,
        fontSize: "2rem",
        lineHeight: 1,
        letterSpacing: "-0.00833em",
      },
      h3: {
        fontFamily: "'IranSans'",
        fontWeight: 400,
        fontSize: "1.75rem",
        lineHeight: 1.04,
        letterSpacing: "0em",
      },
      h4: {
        fontFamily: "'IranSans'",
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: 1.17,
        letterSpacing: "0.00735em",
      },
      h5: {
        fontFamily: "'IranSans'",
        fontWeight: 400,
        fontSize: "1.25rem",
        lineHeight: 1.33,
        letterSpacing: "0em",
        margin: 0,
      },
      h6: {
        fontFamily: "'IranSans'",
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: 1.6,
        letterSpacing: "0.0075em",
      },
      button: {
        "&:focus": {
          outline: 0,
        },
      },
    },
  },
};

export default overrides;
