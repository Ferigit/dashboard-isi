import {
  Dialog as MUIDialog,
  DialogActions as MUIDialogActions,
  DialogContent as MUIDialogContent,
  DialogTitle as MUIDialogTitle,
  IconButton,
} from "@mui/material";

// import { ReactComponent as CloseIcon } from 'assets/icons/light/CloseSquare.svg'
import { Typography } from "@mui/material";
import cs from "classnames";
import { useStyles } from "./styles";

const Modal = (props: any) => {
  const {
    children,
    open,
    title,
    dialogFooter,
    onClose,
    dataTestId,
    defaultWidth,
    classContent,
    classTitle,
    className,
    ...rest
  } = props;
  const styles = useStyles();

  return (
    <MUIDialog
      data-testid={dataTestId}
      // className={cs(className, styles.root)}
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      {...rest}
    >
      {title && (
        <MUIDialogTitle className={cs(classTitle, styles.title)}>
          {/* <Typography variant="h">{title}</Typography> */}
          {title}
          {onClose ? (
            <IconButton
              className={styles.closeButton}
              aria-label="close"
              onClick={(event) => onClose(event, "buttonClick")}
            >
              {/* <CloseIcon className="closeIcon" /> */}
            </IconButton>
          ) : null}
        </MUIDialogTitle>
      )}
      <MUIDialogContent dividers className={classContent}>
        {children}
      </MUIDialogContent>
      {dialogFooter && (
        <MUIDialogActions className={styles.actions}>
          {dialogFooter}
        </MUIDialogActions>
      )}
    </MUIDialog>
  );
};

export default Modal;
