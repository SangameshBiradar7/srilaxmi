import { cn } from "@/lib/utils";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-midnight text-white border border-midnight hover:bg-midnight-deep",
        secondary:
          "bg-transparent text-midnight border border-midnight/20 hover:bg-midnight/5",
        gold:
          "bg-gold text-white border border-gold hover:bg-gold-premium",
        outline:
          "bg-transparent text-midnight border border-slate-300 hover:border-midnight hover:text-midnight",
        ghost:
          "bg-transparent text-midnight hover:bg-midnight/5 border border-transparent",
      },
      size: {
        sm: "px-4 py-2 text-sm rounded-md",
        md: "px-6 py-3 text-sm rounded-lg",
        lg: "px-8 py-4 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

export default function Button({
  variant,
  size,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
