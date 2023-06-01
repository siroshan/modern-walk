export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  helperText?: string;
  error: boolean;
}
