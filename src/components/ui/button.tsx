import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-[#3f3f3f] bg-transparent text-foreground hover:bg-foreground/5",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-foreground/5 text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // TitanGate style buttons
        hero: "bg-primary text-primary-foreground font-mono text-[0.7rem] tracking-spaced uppercase hover:shadow-glow rounded-sm",
        heroOutline: "border border-[#3f3f3f] text-foreground font-mono text-[0.7rem] tracking-spaced uppercase hover:border-primary hover:text-primary rounded-sm",
        dark: "bg-foreground text-background font-mono text-[0.7rem] tracking-spaced uppercase hover:bg-foreground/80 rounded-sm",
        darkOutline: "border border-[#3f3f3f] text-foreground font-mono text-[0.7rem] tracking-spaced uppercase hover:border-primary hover:text-primary rounded-sm",
        // Nav pill style
        pill: "backdrop-blur-[40px] bg-white/10 text-foreground font-mono text-[0.7rem] tracking-spaced uppercase rounded-sm hover:text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        xl: "h-14 px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
