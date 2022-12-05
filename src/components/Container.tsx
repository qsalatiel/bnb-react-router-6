import clsx from "clsx";

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export function Container({ children, className }: Props) {
  return (
    <main className={clsx("w-full max-w-[1280px] px-4 mx-auto", className)}>
      {children}
    </main>
  );
}
