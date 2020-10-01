import React from 'react';
import { InputLabel, Select, FormControl, FormHelperText, withStyles } from '@material-ui/core';
import styles from './styles';
const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return;
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>;
    }
  };
const renderSelectField = ({
    classes,
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <FormControl className = {classes.formControl} error={touched && error}>
      <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
      <Select
        {...input}
        {...custom}
        inputProps={{
          name: input.name,
          id: 'color-native-simple'
        }}
        value = { input.value}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
  export default withStyles(styles)(renderSelectField);