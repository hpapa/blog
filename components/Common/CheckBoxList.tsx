import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckBoxList = ({items = [], onChange}) => {
  return (
    <FormGroup>
      {items.map((el, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              name={el.name}
              checked={el.checked}
              onChange={onChange}
            />
          }
          label={el.label}
        />
      ))}
    </FormGroup>
  );
}

export default CheckBoxList;