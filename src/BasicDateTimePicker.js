import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
//import { TodoList } from './TodoList';

export default function BasicDateTimePicker() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField variant="standard" {...props} />}
        label="DateTimePicker"
        ampm={false}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          //TodoList.setTodo({...TodoList.todo, [TodoList.todo.date]: dayjs(value).toString()} );
        }}
      />
    </LocalizationProvider>
  );
}
