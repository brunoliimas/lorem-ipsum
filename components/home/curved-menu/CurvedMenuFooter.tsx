const footerLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brunoliimas/' },
  { label: 'GitHub', href: 'https://github.com/brunoliimas' },
  { label: 'WhatsApp', href: 'https://wa.me/5511960744779' },
  { label: 'E-mail', href: 'mailto:ibrunoliimas@gmail.com' },
]

export function CurvedMenuFooter() {
  return (
    <div className="flex flex-wrap gap-6">
      {footerLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="font-mono text-body-s uppercase text-grey-6 no-underline transition-colors hover:text-accent"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
