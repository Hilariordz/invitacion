export default function Footer() {
  return (
    <footer className="w-full bg-[#1f5143] px-6 py-8 text-[#f4f2e8] sm:px-10 sm:py-10">
      <div className="mx-auto max-w-6xl border-t border-[#f4f2e8]/80 pt-6 sm:pt-7">
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#f4f2e8]/85 sm:text-sm">
          Desarrollado por{' '}
          <a
            href="https://www.instagram.com/webster_ss?stkn=M296cDh5N2pudDBm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f4f2e8] underline decoration-[#f4f2e8]/50 underline-offset-4 transition-colors hover:text-white"
          >
            Webster
          </a>
        </p>
      </div>
    </footer>
  );
}
