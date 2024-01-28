import { forwardRef, ChangeEvent, FocusEvent, LegacyRef } from "react";

type AppInputProps = {
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "textarea"
    | "date"
    | "time"
    | "datetime-local"
    | "search"
    | "tel"
    | "url"
    | "week"
    | "month"
    | "file";
  placeholder?: string;
  name: string;
  id: string;
  autoComplete?: string;
  className?: string;
  value?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
};

const AppInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  AppInputProps
>(
  (
    {
      type = "text",
      placeholder,
      name,
      id,
      autoComplete,
      className = "",
      value,
      onChange,
      onBlur,
      onFocus,
      disabled = false,
      readOnly = false,
      ...props
    }: AppInputProps,
    ref
  ) => {
    const commonProps = {
      className: `input ${className}`,
      placeholder,
      name,
      id,
      autoComplete: id,
      value,
      onChange,
      onBlur,
      onFocus,
      disabled,
      readOnly,
      ...props,
    };

    return (
      <div>
        {type === "textarea" ? (
          <textarea
            {...commonProps}
            ref={ref as LegacyRef<HTMLTextAreaElement>}
          />
        ) : (
          <input
            type={type}
            {...commonProps}
            ref={ref as LegacyRef<HTMLInputElement>}
          />
        )}
      </div>
    );
  }
);

AppInput.displayName = "AppInput";

export default AppInput;
