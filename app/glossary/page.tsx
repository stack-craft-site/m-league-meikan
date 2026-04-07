import Link from "next/link";

const glossary = [
  { term: "リーチ", reading: "りーち", category: "基本", description: "テンパイ時に1000点を供託して宣言する行為。リーチ後は手牌を変えられないが、裏ドラが乗る可能性がある。" },
  { term: "ツモ", reading: "つも", category: "基本", description: "山から牌を引いて自力で和了すること。ツモ和了の場合は全員から点数を受け取る。" },
  { term: "ロン", reading: "ろん", category: "基本", description: "他の家が捨てた牌で和了すること。捨てた人から点数を受け取る。" },
  { term: "副露", reading: "ふーろ", category: "基本", description: "他の家の捨て牌を鳴くこと。チー・ポン・カンの総称。鳴くと手牌が公開される。" },
  { term: "ポン", reading: "ぽん", category: "鳴き", description: "他の家が捨てた牌を使って同じ牌3枚の刻子を作ること。誰の捨て牌でも鳴ける。" },
  { term: "チー", reading: "ちー", category: "鳴き", description: "上家（左隣）が捨てた牌を使って順子を作ること。上家からしか鳴けない。" },
  { term: "カン", reading: "かん", category: "鳴き", description: "同じ牌4枚を揃えること。カンをすると新しいドラが追加される。" },
  { term: "ドラ", reading: "どら", category: "点数", description: "持っているだけで得点が上がる特別な牌。ゲーム開始時にランダムで決まる。" },
  { term: "裏ドラ", reading: "うらどら", category: "点数", description: "リーチして和了した場合のみ公開される追加ドラ。リーチの醍醐味の一つ。" },
  { term: "満貫", reading: "まんがん", category: "点数", description: "8000点（親は12000点）の手役。点数の基本単位として使われる。" },
  { term: "跳満", reading: "はねまん", category: "点数", description: "満貫の1.5倍、12000点（親は18000点）の手役。" },
  { term: "倍満", reading: "ばいまん", category: "点数", description: "満貫の2倍、16000点（親は24000点）の手役。" },
  { term: "役満", reading: "やくまん", category: "点数", description: "最高位の手役。32000点（親は48000点）。国士無双・大三元などが代表的。" },
  { term: "国士無双", reading: "こくしむそう", category: "役満", description: "1・9・字牌13種を1枚ずつ集め、そのうち1種を2枚にした役満。" },
  { term: "大三元", reading: "だいさんげん", category: "役満", description: "白・発・中の三元牌を全て刻子または槓子にした役満。" },
  { term: "四暗刻", reading: "すーあんこう", category: "役満", description: "4つの刻子をすべて自力でツモって揃えた役満。" },
  { term: "テンパイ", reading: "てんぱい", category: "基本", description: "あと1枚で和了できる状態。リーチができるのはテンパイ時のみ。" },
  { term: "イーシャンテン", reading: "いーしゃんてん", category: "基本", description: "テンパイまであと1枚の状態。一向聴とも書く。" },
  { term: "放銃", reading: "ほうじゅう", category: "基本", description: "他の家にロンされること。振り込みとも言う。放銃率が低いほど守備力が高い。" },
  { term: "オーラス", reading: "おーらす", category: "進行", description: "最終局のこと。南4局（または東4局）がオーラス。逆転や守りの判断が重要になる。" },
  { term: "トップ", reading: "とっぷ", category: "成績", description: "1着のこと。Mリーグではトップ率が選手評価の重要指標の一つ。" },
  { term: "ラス", reading: "らす", category: "成績", description: "4着（最下位）のこと。ラス率が低いほど安定した成績と言える。" },
  { term: "ポイント", reading: "ぽいんと", category: "成績", description: "Mリーグの成績指標。順位点と素点の合計で計算される。" },
  { term: "レギュラーシーズン", reading: "れぎゅらーしーずん", category: "Mリーグ", description: "Mリーグの通常リーグ戦。上位チームがセミファイナルに進出する。" },
  { term: "セミファイナル", reading: "せみふぁいなる", category: "Mリーグ", description: "レギュラーシーズン通過チームによる準決勝。上位チームがファイナルへ進む。" },
  { term: "ファイナル", reading: "ふぁいなる", category: "Mリーグ", description: "Mリーグの決勝戦。優勝チームを決める最終ステージ。" },
];

const categories = ["すべて", "基本", "鳴き", "点数", "役満", "進行", "成績", "Mリーグ"];

const categoryColors: Record<string, string> = {
  "基本": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "鳴き": "text-green-400 border-green-400/30 bg-green-400/10",
  "点数": "text-[#c9a84c] border-[#c9a84c]/30 bg-[#c9a84c]/10",
  "役満": "text-red-400 border-red-400/30 bg-red-400/10",
  "進行": "text-purple-400 border-purple-400/30 bg-purple-400/10",
  "成績": "text-orange-400 border-orange-400/30 bg-orange-400/10",
  "Mリーグ": "text-pink-400 border-pink-400/30 bg-pink-400/10",
};

export default function GlossaryPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-sm sticky top-0 z-50 bg-[#0a0a0a]/80">
        <div className="flex items-center gap-3">
          <span className="text-[#c9a84c] text-2xl">🀄</span>
          <Link href="/" className="text-lg font-bold tracking-widest uppercase text-white hover:text-[#c9a84c] transition-colors">Mリーグ名鑑</Link>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-white/50">
          <Link href="/players" className="hover:text-[#c9a84c] transition-colors">選手</Link>
          <Link href="/teams" className="hover:text-[#c9a84c] transition-colors">チーム</Link>
          <Link href="/glossary" className="text-[#c9a84c]">用語集</Link>
        </nav>
      </header>

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-4">Glossary</p>
        <h1 className="text-4xl font-black mb-2">用語集</h1>
        <p className="text-white/30 mb-8">麻雀・Mリーグの用語をわかりやすく解説</p>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <span key={cat} className="text-xs px-3 py-1 border border-white/20 text-white/40 rounded-full cursor-pointer hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {glossary.map((item) => (
            <div key={item.term} className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-xl font-bold">{item.term}</h2>
                  <p className="text-white/20 text-xs mt-1">{item.reading}</p>
                </div>
                <span className={`text-xs px-2 py-1 border rounded-full ${categoryColors[item.category] || "text-white/40 border-white/20"}`}>
                  {item.category}
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mt-4">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/20 text-xs tracking-widest">
        <p>© 2025 Mリーグ名鑑 — 非公式ファンサイト</p>
      </footer>
    </main>
  );
}
