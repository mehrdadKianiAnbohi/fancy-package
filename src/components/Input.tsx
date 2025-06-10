import React from "react";
import {
  TextField,
  Label,
  Input as ReactAriaInput,
} from "react-aria-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <TextField>
      <Label>{label}</Label>
      <ReactAriaInput {...props} />
      {error && (
        <div role="alert" style={{ color: "red" }}>
          {error}
        </div>
      )}
    </TextField>
  );
};
