export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  helperText?: string;
}
