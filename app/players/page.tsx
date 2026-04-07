import Link from "next/link";

const players = [
  { id: "tai-takaharu", name: "多井隆晴", team: "渋谷ABEMAS", style: "攻撃型", description: "Mリーグを代表するエース。圧倒的な攻撃力と読みの深さで知られる。" },
  { id: "kobayashi-tsuyoshi", name: "小林剛", team: "U-NEXT Pirates", style: "鳴き型", description: "副露率トップクラス。独特の鳴き読みで相手を翻弄するスタイル。" },
  { id: "sasaki-hisato", name: "佐々木寿人", team: "EX風林火山", style: "攻撃型", description: "通算ポイントトップクラス。ヒサトの名で親しまれるMリーグの顔。" },
  { id: "matsumoto-yoshihiro", name: "松本吉弘", team: "渋谷ABEMAS", style: "バランス型", description: "安定した成績を誇るオールラウンダー。冷静な判断力が武器。" },
  { id: "hinata-aiko", name: "日向藍子", team: "渋谷ABEMAS", style: "守備型", description: "4着回避率トップクラス。堅実な守備で安定した成績を残す。" },
  { id: "shiratori-sho", name: "白鳥翔", team: "EX風林火山", style: "バランス型", description: "正確な牌効率と冷静な判断力を持つ実力派プロ。" },
  { id: "murakami-jun", name: "村上淳", team: "赤坂ドリブンズ", style: "攻撃型", description: "豪快な攻撃麻雀でファンを魅了。勝負どころでの決断力が光る。" },
  { id: "seto-kuma", name: "瀬戸熊直樹", team: "赤坂ドリブンズ", style: "攻撃型", description: "ベテランの風格漂う強打者。長年のキャリアで培った読みが武器。" },
  { id: "katsumata-kenji", name: "勝又健志", team: "EX風林火山", style: "守備型", description: "緻密な守備と精度の高い放銃率で知られる技巧派プロ。" },
  { id: "sonoda-ken", name: "園田賢", team: "KONAMI麻雀格闘倶楽部", style: "バランス型", description: "論理的な麻雀が持ち味。データに基づいた合理的な判断を得意とする。" },
  { id: "hori-shingo", name: "堀慎吾", team: "KADOKAWAサクラナイツ", style: "攻撃型", description: "鋭い攻撃センスと高い打点力が武器の実力派。" },
  { id: "uchinawa-kotaro", name: "内川幸太郎", team: "KADOKAWAサクラナイツ", style: "バランス型", description: "安定感抜群のオールラウンダー。チームの精神的支柱。" },
];

const styleColors: Record<string, string> = {
  "攻撃型": "text-red-400 border-red-400/30 bg-red-400/10",
  "守備型": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "鳴き型": "text-green-400 border-green-400/30 bg-green-400/10",
  "バランス型": "text-[#c9a84c] border-[#c9a84c]/30 bg-[#c9a84c]/10",
};

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-sm sticky top-0 z-50 bg-[#0a0a0a]/80">
        <div className="flex items-center gap-3">
          <span className="text-[#c9a84c] text-2xl">🀄</span>
          <Link href="/" className="text-lg font-bold tracking-widest uppercase text-white hover:text-[#c9a84c] transition-colors">Mリーグ名鑑</Link>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-white/50">
          <Link href="/players" className="text-[#c9a84c]">選手</Link>
          <Link href="/teams" className="hover:text-[#c9a84c] transition-colors">チーム</Link>
          <Link href="/glossary" className="hover:text-[#c9a84c] transition-colors">用語集</Link>
        </nav>
      </header>

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Players</p>
        <h1 className="text-4xl font-black mb-2">選手名鑑</h1>
        <p className="text-white/30 mb-12">Mリーグに所属する選手のプロフィールと戦術スタイル</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {players.map((player) => (
            <Link
              key={player.id}
              href={`/players/${player.id}`}
              className="group bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-bold group-hover:text-[#c9a84c] transition-colors">
                  {player.name}
                </h2>
                <span className={`text-xs px-2 py-1 border rounded-full ${styleColors[player.style]}`}>
                  {player.style}
                </span>
              </div>
              <p className="text-white/30 text-xs mb-3 tracking-wider">{player.team}</p>
              <p className="text-white/50 text-sm leading-relaxed">{player.description}</p>
              <p className="mt-4 text-[#c9a84c] text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                詳細を見る →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/20 text-xs tracking-widest">
        <p>© 2025 Mリーグ名鑑 — 非公式ファンサイト</p>
      </footer>
    </main>
  );
}
