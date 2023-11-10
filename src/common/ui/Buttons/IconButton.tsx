import { clsx } from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import { ButtonBase, ButtonBaseProps } from "@/common/ui";

export type IconButtonProps = {
    size?: "small" | "big";
    colorVariant?: "primary" | "secondary";
} & ButtonBaseProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
    const {
        size = "small",
        colorVariant = "primary",
        children,
        className = {},
        loading = false,
        ...baseButtonProps
    } = props;

    const { button: buttonClassName, loadingIcon: loadingIconClassName } = className;

    return (
        <ButtonBase
            ref={ref}
            loading={loading}
            className={{
                button: twMerge(
                    clsx(
                        "flex items-center justify-center transition-colors ease-linear",
                        {
                            "bg-gray-300":
                                (colorVariant === "primary" && loading) || ("secondary" && loading),
                            "bg-transparent rounded text-gray-500  hover:text-gray-800 hover:bg-gray-200 active:bg-gray-300":
                                colorVariant === "primary" && !loading,
                            "bg-blue-600 hover:bg-blue-400 active:bg-blue-700 disabled:bg-gray-300 text-white":
                                colorVariant === "secondary" && !loading,
                        },
                        {
                            "h-5 w-5": size === "small",
                            "h-6 w-6": size === "big",
                        },
                        buttonClassName
                    )
                ),
                loadingIcon: loadingIconClassName,
            }}
            {...baseButtonProps}>
            {children}
        </ButtonBase>
    );
});

IconButton.displayName = "IconButton";
