import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-sm sticky top-0 z-50 bg-[#0a0a0a]/80">
        <div className="flex items-center gap-3">
          <span className="text-[#c9a84c] text-2xl">🀄</span>
          <span className="text-lg font-bold tracking-widest uppercase text-white">Mリーグ名鑑</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-white/50">
          <Link href="/players" className="hover:text-[#c9a84c] transition-colors">選手</Link>
          <Link href="/teams" className="hover:text-[#c9a84c] transition-colors">チーム</Link>
          <Link href="/glossary" className="hover:text-[#c9a84c] transition-colors">用語集</Link>
        </nav>
      </header>
      <section className="relative px-6 py-32 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c9a84c]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-6">Japan's Pro Mahjong League</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6">
            M<span className="text-[#c9a84c]">リーグ</span><br />名鑑
          </h1>
          <p className="text-white/40 text-lg mb-12 leading-relaxed">
            プロ麻雀リーグ・Mリーグの選手・チーム・用語を<br className="hidden md:block" />徹底的にまとめたデータベース
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/players" className="px-8 py-3 bg-[#c9a84c] text-black font-bold text-sm tracking-widest uppercase hover:bg-[#e0c070] transition-colors">選手を見る</Link>
            <Link href="/teams" className="px-8 py-3 border border-white/20 text-white/70 font-bold text-sm tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">チームを見る</Link>
          </div>
        </div>
      </section>
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <p className="text-white/20 text-xs tracking-[0.3em] uppercase mb-10 text-center">Contents</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          <Link href="/players" className="group bg-[#0a0a0a] p-10 hover:bg-[#111] transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <p className="text-4xl mb-6">👤</p>
            <h2 className="text-xl font-bold mb-3 group-hover:text-[#c9a84c] transition-colors">選手名鑑</h2>
            <p className="text-white/30 text-sm leading-relaxed">Mリーグに所属する全選手のプロフィール・成績・戦術スタイルを徹底解説</p>
            <p className="mt-6 text-[#c9a84c] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">View All →</p>
          </Link>
          <Link href="/teams" className="group bg-[#0a0a0a] p-10 hover:bg-[#111] transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <p className="text-4xl mb-6">🏆</p>
            <h2 className="text-xl font-bold mb-3 group-hover:text-[#c9a84c] transition-colors">チーム名鑑</h2>
            <p className="text-white/30 text-sm leading-relaxed">全チームの紹介・歴史・シーズン成績をまとめて確認できるデータベース</p>
            <p className="mt-6 text-[#c9a84c] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">View All →</p>
          </Link>
          <Link href="/glossary" className="group bg-[#0a0a0a] p-10 hover:bg-[#111] transition-colors relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <p className="text-4xl mb-6">📖</p>
            <h2 className="text-xl font-bold mb-3 group-hover:text-[#c9a84c] transition-colors">用語集</h2>
            <p className="text-white/30 text-sm leading-relaxed">麻雀・Mリーグ初心者にもわかりやすく用語を解説。観戦がもっと楽しくなる</p>
            <p className="mt-6 text-[#c9a84c] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">View All →</p>
          </Link>
        </div>
      </section>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/20 text-xs tracking-widest">
        <p>© 2025 Mリーグ名鑑 — 非公式ファンサイト</p>
      </footer>
    </main>
  );
}
