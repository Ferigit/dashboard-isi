import makeStyles from "../../theme/helpers";

const useAutoCompleteStyle = makeStyles(
  ({ typography, spacing, palette: { primary } }: any) => ({
    root: {
      width: "100%",
      "& .MuiFormLabel-root": {
        // marginTop: " !important",
        height: "45px !important",
      },
      "& .MuiInputBase-root": {
        borderRadius: spacing(3),
        height: "45px !important",
      },
    },
    container: {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "column",
    },
    option: {
      margin: spacing(1),
      borderRadius: spacing(1),
      "& img": {
        width: 25,
        height: 25,
        borderRadius: "50%",
        border: `1px solid transparent`,
      },
      "& span": {
        ...typography.body1,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      },
    },
    optionSelected: {
      "& img": {
        border: `1px solid ${primary.main}`,
      },
    },
    inputRoot: {
      // height: ({ fullHeight }) => (fullHeight ? '100%' : 'auto'),
      minWidth: 200,
      height: 40,
    },
    input: {
      // height: ({ fullHeight }) => (fullHeight ? '100% !important' : 'auto'),
    },
    icon: {
      width: 17,
      height: 17,
    },
  }),
  { name: "useButtonStyle" }
);
export default useAutoCompleteStyle;
