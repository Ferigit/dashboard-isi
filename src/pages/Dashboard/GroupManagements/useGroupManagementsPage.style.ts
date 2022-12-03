import makeStyles from "../../../theme/helpers";

const useGroupManagementsStyle = makeStyles(
  ({ spacing, palette, breakpoints }: any) => ({
    container: {
      // height: "84vh"
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    search: {
      width: 20,
    },
    banner: {
      backgroundColor: "rgb(241,244,249)",
      // height: "70%",
      [breakpoints.down("md")]: {
        height: "unset",
      },
    },
    confirmIdea: {
      backgroundColor: "rgb(223,228,234)",
      color: "rgb(135,137,140)",
      fontWeight: "bold",
      marginTop: spacing(15),
    },
    cardMore: {
      width: 18,
      transform: "rotate(90deg)",
      cursor: "pointer",
    },
    count: {
      textAlign: "center",
      fontSize: 41,
      marginTop: 5,
      marginBottom: 5,
    },
    statuses: {
      backgroundColor: "rgb(241,244,249)",
      // height: "calc(30% - 48px)",
      // height: "70%",
      [breakpoints.down("md")]: {
        flexDirection: "column",
        height: "unset",
        paddingRight: "8%",
        paddingLeft: "2%",
        "& div": {
          width: "100%",
        },
      },
    },
    card: {
      [breakpoints.down("md")]: {
        width: "90% !important",
      },
    },
  }),
  { name: "useGroupManagementsStyle" }
);
export default useGroupManagementsStyle;
