import makeStyles from "../../theme/helpers";

const useTextFieldStyle = makeStyles(
  ({ spacing, palette }) => ({
    // inputRoot: {
    //   width: "100% !important",
    // },
    // input: {
    //   width: "100% !important",
    // },
    // root: {
    //   height: spacing(10),
    //   paddingTop: spacing(3.5),
    //   paddingBottom: spacing(3.5),
    //   "& .MuiTextField-root": {
    //     width: "100% !important",
    //   },
    //   // input:
    // },
    textField: {
      width: "100% !important",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
    },
    input: {
      color: "white",
    },
    // input: {
    //   width: "100% !important",
    // },
  }),
  { name: "SkeletonPage" }
);
export default useTextFieldStyle;
