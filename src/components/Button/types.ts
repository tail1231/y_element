export type ButtonType = "primary" | "success" | "warning" | "danger" | "error";
export type ButtonSize = "large" | "small";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
}
