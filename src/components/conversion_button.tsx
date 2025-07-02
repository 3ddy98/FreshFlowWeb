'use client';

type ConversionLinkButtonProps = {
  url: string;
  value: number;
  children: React.ReactNode;
  className?: string;
};

export default function ConversionLinkButton({ url, value, children, className }: ConversionLinkButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Track the conversion first
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16936450849/LVEACLbqkq8aEKH29os_',
        'value': value,
        'currency': 'USD'
      });
    }

    // Use requestAnimationFrame to ensure paint before navigation
    setTimeout(() => {
      window.requestAnimationFrame(() => {
        window.location.href = url;
      });
    }, 100);
  };

  return (
    <a href={url} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
