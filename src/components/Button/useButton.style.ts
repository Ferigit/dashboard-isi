import makeStyles from "../../theme/helpers";

const useButtonStyle = makeStyles(
  ({ spacing, palette }) => ({
    container: {
      margin: 5,
    },
  }),
  { name: "useButtonStyle" }
);
export default useButtonStyle;
