import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<string, string> = {
  primary:
    "bg-accent text-accent-foreground shadow-lg shadow-accent/30 hover:bg-accent/90 focus-visible:ring-accent/60 focus-visible:ring-offset-background",
  ghost:
    "bg-transparent text-foreground hover:bg-foreground/10 focus-visible:ring-foreground/30 focus-visible:ring-offset-background",
  outline:
    "border border-border bg-background/80 text-foreground hover:bg-background/60 focus-visible:ring-border focus-visible:ring-offset-background",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  icon?: ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      icon,
      asChild = false,
      children,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";
    const componentProps = asChild ? props : { type, ...props };

    const content = (
      <>
        {icon ? (
          <span className="inline-flex items-center justify-center">
            {icon}
          </span>
        ) : null}
        {children}
      </>
    );

    if (asChild) {
      return (
        <Component
          className={cn(baseStyles, variantStyles[variant], className)}
          {...componentProps}
        >
          {children}
        </Component>
      );
    }

    return (
      <Component
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...componentProps}
      >
        {content}
      </Component>
    );
  },
);

Button.displayName = "Button";
