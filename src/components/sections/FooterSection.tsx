function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="w-full border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-5xl space-y-2 px-6 py-12 text-center text-sm text-slate-400 md:px-12 md:py-14 lg:px-20">
        <p className="text-base font-medium text-slate-200">Sowmiya S</p>
        <p>Copyright {currentYear} Sowmiya S. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default FooterSection