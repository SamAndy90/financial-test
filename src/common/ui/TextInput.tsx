import { clsx } from "clsx";
import { forwardRef, useId, useState } from "react";
import { twMerge } from "tailwind-merge";

export type BaseProps = {
    label?: string;
    className?: {
        inputWrapper?: string;
        input?: string;
    };
    helperText?: string;
    error?: boolean;
    startAdornment?: React.ReactNode;
    endValue?: string;
};

export type TextInputProps = BaseProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
    const {
        label,
        className = {},
        helperText,
        error,
        startAdornment,
        endValue,
        ...inputProps
    } = props;
    const { inputWrapper: inputWrapperClassName = "", input: inputClassName = "" } = className;

    const [isFocused, setIsFocused] = useState(false);
    const id = useId();

    return (
        <div className={"flex flex-col gap-y-1 max-h-6"}>
            <div
                className={twMerge(
                    clsx(
                        "flex flex-nowrap items-center overflow-hidden rounded-sm border border-gray-300",
                        {
                            "border-blue-500": isFocused && !error,
                            "text-blue-500 bg-blue-100 border-blue-500": error,
                        },
                        inputWrapperClassName
                    )
                )}>
                {startAdornment && <div className={"px-1"}>{startAdornment}</div>}

                <input
                    id={id}
                    className={twMerge(
                        "block flex-1 p-1 outline-0 placeholder:text-sm placeholder:text-gray-500 text-gray-600",
                        inputClassName
                    )}
                    ref={ref}
                    type={inputProps.type ?? "text"}
                    {...{
                        ...inputProps,
                        onFocus: (e) => {
                            inputProps?.onFocus?.(e);
                            setIsFocused(true);
                        },
                        onBlur: (e) => {
                            inputProps?.onBlur?.(e);
                            setIsFocused(false);
                        },
                    }}
                />
                {endValue && <span className={"px-1 text-gray-400 text-xs"}>{endValue}</span>}
            </div>

            {helperText && (
                <p
                    className={clsx("font-medium", {
                        "text-red-500": error,
                        "text-gray-500": !error,
                    })}>
                    {helperText}
                </p>
            )}
        </div>
    );
});

TextInput.displayName = "TextInput";
