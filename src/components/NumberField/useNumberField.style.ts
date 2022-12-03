import makeStyles from "../../theme/helpers";

const useNumberFieldStyle = makeStyles(
  ({ spacing, palette }) => ({
    root: {
      height: spacing(10),
      paddingTop: spacing(3.5),
      paddingBottom: spacing(3.5),
    },
  }),
  { name: "SkeletonPage" }
);
export default useNumberFieldStyle;
