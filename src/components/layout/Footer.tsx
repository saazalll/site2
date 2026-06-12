export default function Footer() {
  return (
    <footer className="bg-primary pt-[var(--space-2xl)] pb-[var(--space-lg)] border-t border-border">
      <div className="container mx-auto px-6 md:px-10 max-w-screen-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 space-y-8 md:space-y-0">
          <div>
            <h3 className="text-h2 font-serif mb-6 text-textPrimary">Studio V</h3>
            <p className="text-textSecondary text-body max-w-sm">
              Documenting spaces, faces, and places with quiet intention. Available for commissions worldwide.
            </p>
          </div>
          <div className="flex space-x-12 text-small uppercase tracking-widest text-textMuted">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent transition-colors">Behance</a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="mailto:studio@example.com" className="hover:text-accent transition-colors">Email</a>
              <a href="tel:+442071234567" className="hover:text-accent transition-colors">Phone</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-eyebrow text-textMuted pt-8 border-t border-border">
          <p>&copy; {new Date().getFullYear()} Studio V. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Design by Antigravity</p>
        </div>
      </div>
    </footer>
  );
}
