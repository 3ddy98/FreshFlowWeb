'use client';

type ConversionLinkButtonProps = {
  url: string;
  children: React.ReactNode;
  className?: string;
};

export default function ConversionLinkButton({ url, children, className }: ConversionLinkButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      const callback = () => {
        window.location.href = url;
      };
      window.gtag('event', 'conversion', {
        send_to: 'AW-16936450849/LVEACLbqkq8aEKH29os_',
        transaction_id: '',
        event_callback: callback,
      });
    } else {
      // fallback if gtag isn't ready
      window.location.href = url;
    }
  };

  return (
    <a href={url} onClick={handleClick}>
      <button className={className}>{children}</button>
    </a>
  );
}
