import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button component adhering to the Fakiha Dental design system.
 * Supports variants: 'primary', 'secondary', 'charcoal', 'outline', 'ghost'.
 * Supports sizes: 'sm', 'md', 'lg'.
 * Avoids gradients; relies on crisp solid colors and responsive feedback.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  target,
  rel,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs tracking-wide",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base font-medium",
  };

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover shadow-sm",
    secondary: "bg-soft text-charcoal hover:bg-primary-light hover:text-primary border border-borderSoft",
    charcoal: "bg-charcoal text-white hover:bg-charcoal-light active:bg-charcoal",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent",
    ghost: "text-charcoal hover:text-primary hover:bg-soft bg-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 ml-2 flex-shrink-0" aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
