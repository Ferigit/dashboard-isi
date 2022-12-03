import { Autocomplete, Chip, TextField } from "@mui/material";
import classNames from "classnames";
import { nanoid } from "nanoid";
import React, { forwardRef } from "react";
import useAutoComplete from "./useAutoComplete.style";
// import { TextField } from '../../components'
// import { TextField } from '@mui/material'

const AutoCompleteField = forwardRef((props: any, ref): any => {
  const {
    id,
    multiple = false,
    renderInput,
    renderOption,
    renderTags,
    placeholder,
    className,
    classes,
    options,
    onChange,
    optionTitle = "label",
    optionLabel = "label",
    defaultValue,
    value = "",
    fullHeight,
    groupBy,
    popupIcon,
    label,
    ...rest
  } = props;

  const styles = useAutoComplete({ fullHeight });

  return (
    <Autocomplete
      value={value}
      options={options}
      classes={{
        ...classes,
        inputRoot: classNames(
          classes?.inputRoot,
          styles.inputRoot,
          styles.root
        ),
        input: classNames(styles.input, classes?.input),
      }}
      onChange={(e, newValue) => {
        onChange(newValue);
      }}
      onInputChange={(e, newValue) => {
        // onChange(newValue)
      }}
      className={classNames(styles.root, className)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          // placeholder={placeholder}
          // fullHeight={fullHeight}
        />
      )}
      freeSolo
    />
  );
});

AutoCompleteField.displayName = "AutoCompleteField";
export default AutoCompleteField;
