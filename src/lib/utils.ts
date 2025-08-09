import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Basic class variance authority implementation
export function cva(base: string, config?: {
  variants?: Record<string, Record<string, string>>;
  defaultVariants?: Record<string, string>;
}) {
  return (props: Record<string, string> = {}) => {
    if (!config) return base;
    
    let result = base;
    
    if (config.variants) {
      Object.keys(config.variants).forEach(key => {
        const variant = props[key] || config.defaultVariants?.[key];
        if (variant && config.variants![key][variant]) {
          result += ' ' + config.variants![key][variant];
        }
      });
    }
    
    return result;
  };
}