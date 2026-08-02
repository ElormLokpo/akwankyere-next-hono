import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";


const inputVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: "border border-gray-200 rounded-2xl bg-white text-gray-900 w-full focus:ring-2 focus:ring-primary-green-500",
      
      },
      inputSize: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg",
      },
      errorState: {
        true: "border-red-500 bg-red-50/30 text-red-900 focus:border-red-500 focus:ring-red-100",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "md",
      errorState: false,
    },
  }
);


export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  errorText?: string;
}


export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, errorText, label, helperText, id, ...props }, ref) => {
    const hasError = Boolean(errorText);
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label 
            htmlFor={inputId} 
            className={cn(
              "text-xs font-semibold tracking-wide transition-colors duration-200",
              hasError ? "text-red-600" : "text-gray-700"
            )}
          >
            {label}
          </label>
        )}
        
        <input
          id={inputId}
          ref={ref}
          className={cn(inputVariants({ variant, inputSize, errorState: hasError, className }))}
          {...props}
        />

        {(errorText || helperText) && (
          <span 
            className={cn(
              "text-xs font-medium tracking-normal px-1",
              hasError ? "text-red-500" : "text-gray-400"
            )}
          >
            {errorText || helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";