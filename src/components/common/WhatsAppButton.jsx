import React from 'react';
import { clinicConfig } from '../../data/clinicConfig';
import { MessageCircle } from 'lucide-react';

/**
 * Dedicated WhatsApp Action Button.
 * Formats a clean prefilled inquiry and securely opens WhatsApp.
 */
export default function WhatsAppButton({
  children = "Book on WhatsApp",
  customMessage,
  variant = "primary",
  size = "md",
  className = "",
  showIcon = true,
  ...props
}) {
  const url = clinicConfig.getWhatsAppUrl(customMessage);

  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 select-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base font-medium",
  };

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover shadow-sm",
    charcoal: "bg-charcoal text-white hover:bg-charcoal-light",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent",
    soft: "bg-soft text-charcoal hover:bg-primary-light hover:text-primary border border-borderSoft",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} via WhatsApp`}
      className={combinedClasses}
      {...props}
    >
      {showIcon && <MessageCircle className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </a>
  );
}
