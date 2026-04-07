import Link from "next/link";

const teams = [
  { id: "abemas", name: "渋谷ABEMAS", sponsor: "AbemaTV", color: "#00d4ff", description: "多井隆晴を擁する強豪チーム。攻撃的なスタイルで常に優勝候補筆頭。", players: ["多井隆晴", "松本吉弘", "日向藍子", "白鳥翔"] },
  { id: "furinkazan", name: "EX風林火山", sponsor: "EX", color: "#ff6b35", description: "佐々木寿人・勝又健志らベテランを擁する老舗チーム。安定した実力が武器。", players: ["佐々木寿人", "勝又健志", "白鳥翔", "二階堂瑠美"] },
  { id: "drivens", name: "赤坂ドリブンズ", sponsor: "赤坂", color: "#ff3366", description: "村上淳・瀬戸熊直樹らを擁するチーム。経験豊富なベテランが揃う。", players: ["村上淳", "瀬戸熊直樹", "園田賢", "岡田紗佳"] },
  { id: "sakura-knights", name: "KADOKAWAサクラナイツ", sponsor: "KADOKAWA", color: "#ff69b4", description: "堀慎吾・内川幸太郎らを擁するチーム。バランスの取れた布陣が強み。", players: ["堀慎吾", "内川幸太郎", "松ヶ瀬隆弥", "渋川難波"] },
  { id: "phoenix", name: "セガサミーフェニックス", sponsor: "セガサミー", color: "#ffd700", description: "瑞原明奈・醍醐大らを擁するチーム。若手と実力派のバランスが魅力。", players: ["瑞原明奈", "醍醐大", "魚谷侑未", "茅森早香"] },
  { id: "mfk", name: "KONAMI麻雀格闘倶楽部", sponsor: "KONAMI", color: "#00ff88", description: "仲林圭・高橋侑希らを擁するチーム。緻密な戦略と安定感が持ち味。", players: ["仲林圭", "高橋侑希", "滝沢和典", "伊達朱里紗"] },
  { id: "raiден", name: "チーム雷電", sponsor: "雷電", color: "#a855f7", description: "土田浩翔・本田朋広らを擁するチーム。ベテランの知恵と若手の勢いが融合。", players: ["土田浩翔", "本田朋広", "黒沢咲", "鈴木たろう"] },
  { id: "pirates", name: "U-NEXT Pirates", sponsor: "U-NEXT", color: "#06b6d4", description: "小林剛・石橋伸洋らを擁するチーム。独特の鳴き麻雀で相手を翻弄する。", players: ["小林剛", "石橋伸洋", "鈴木優", "瀬戸熊直樹"] },
];

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-sm sticky top-0 z-50 bg-[#0a0a0a]/80">
        <div className="flex items-center gap-3">
          <span className="text-[#c9a84c] text-2xl">🀄</span>
          <Link href="/" className="text-lg font-bold tracking-widest uppercase text-white hover:text-[#c9a84c] transition-colors">Mリーグ名鑑</Link>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-white/50">
          <Link href="/players" className="hover:text-[#c9a84c] transition-colors">選手</Link>
          <Link href="/teams" className="text-[#c9a84c]">チーム</Link>
          <Link href="/glossary" className="hover:text-[#c9a84c] transition-colors">用語集</Link>
        </nav>
      </header>

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Teams</p>
        <h1 className="text-4xl font-black mb-2">チーム名鑑</h1>
        <p className="text-white/30 mb-12">Mリーグに所属する全チームの紹介と所属選手</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {teams.map((team) => (
            <Link
              key={team.id}
              href={`/teams/${team.id}`}
              className="group bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                style={{ backgroundColor: team.color }}
              />
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-bold group-hover:transition-colors" style={{ color: "white" }}>
                  <span className="group-hover:text-[#c9a84c] transition-colors">{team.name}</span>
                </h2>
                <span
                  className="text-xs px-2 py-1 border rounded-full"
                  style={{ color: team.color, borderColor: `${team.color}40`, backgroundColor: `${team.color}15` }}
                >
                  {team.sponsor}
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{team.description}</p>
              <div className="flex flex-wrap gap-2">
                {team.players.map((player) => (
                  <span key={player} className="text-xs text-white/30 border border-white/10 px-2 py-1 rounded">
                    {player}
                  </span>
                ))}
              </div>
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
