import { makeStyles } from "../../theme/helpers";

const useCardStyle = makeStyles(({ spacing, palette }) => ({
    root: {
        width: "fit-content",
        padding: spacing(5),
        height: "fit-content"
    }
}))

export default useCardStyle