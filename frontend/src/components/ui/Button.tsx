import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', href, onClick }: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-accent text-panel hover:text-panel hover:bg-foreground active:bg-foreground active:text-panel shadow-sm hover:shadow-sm",
    secondary: "bg-hover text-foreground hover:bg-hover"
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}