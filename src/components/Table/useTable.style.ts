import makeStyles from "../../theme/helpers";

const useTableStyle = makeStyles(
  ({ spacing, palette }) => ({
    container: {
      height: 420,
      width: "100%",
      background: "#fff",
      marginTop: 20,
    },
    actionContainer: {
      margin: "10px 0",
    },
    actionBtn: {
      marginRight: 10,
    },
  }),
  { name: "SkeletonPage" }
);
export default useTableStyle;
