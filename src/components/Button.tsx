import clsx from "clsx";

export enum ButtonVariants {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

type ButtonProps = {
  variant?: ButtonVariants;
  children: string | JSX.Element;
  className?: string;
};

const variantClasses: Record<ButtonVariants, string> = {
  primary: "bg-sky-800 text-white hover:bg-sky-600",
  secondary: "bg-yellow-500 text-yellow-900 hover:bg-yellow-400",
  tertiary:
    "bg-white text-stone-500 hover:text-stone-600 border  border-stone-200",
};

export function Button({
  variant = ButtonVariants.primary,
  children,
  className,
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={clsx(
        "inline-flex rounded-lg w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 px-4 h-10 text-base font-medium transition  focus:outline-none focus:ring-2",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
