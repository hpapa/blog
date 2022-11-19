import TextField from '@mui/material/TextField';

const Input = ({value = "", onChange, variant = "outlined"}) => (
  <TextField
    variant={variant}
    value={value}
    onChange={onChange}
  />
);

export default Input;