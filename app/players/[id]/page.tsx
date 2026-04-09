import Link from "next/link";
import { notFound } from "next/navigation";

const players: Record<string, {
  name: string; team: string; style: string; description: string;
  career: string; strength: string; weakness: string;
  stats: { label: string; value: string }[];
}> = {
  "tai-takaharu": { name: "多井隆晴", team: "渋谷ABEMAS", style: "攻撃型", description: "Mリーグを代表するエース。圧倒的な攻撃力と読みの深さで知られる。", career: "最高位戦所属。Mリーグ創設メンバーの一人。", strength: "高い攻撃力と鋭い読み。勝負どころでの決断力が抜群。", weakness: "攻撃的なスタイルゆえに放銃率がやや高い場面もある。", stats: [{ label: "スタイル", value: "攻撃型" }, { label: "所属団体", value: "最高位戦" }, { label: "得意役", value: "リーチ・タンヤオ" }, { label: "愛称", value: "多井" }] },
  "kobayashi-tsuyoshi": { name: "小林剛", team: "U-NEXT Pirates", style: "鳴き型", description: "副露率トップクラス。独特の鳴き読みで相手を翻弄するスタイルはMリーグ随一。", career: "麻将連合所属。理論的な麻雀で知られる。", strength: "圧倒的な副露率と鳴き判断。データに基づいた合理的な打牌。", weakness: "鳴き多用で打点が低くなりがちな場面がある。", stats: [{ label: "スタイル", value: "鳴き型" }, { label: "所属団体", value: "麻将連合" }, { label: "得意役", value: "タンヤオ・役牌" }, { label: "特徴", value: "副露率最高クラス" }] },
  "sasaki-hisato": { name: "佐々木寿人", team: "EX風林火山", style: "攻撃型", description: "通算ポイントトップクラス。ヒサトの名で親しまれるMリーグの顔。", career: "最高位戦所属。Mリーグ創設当初からのメンバー。", strength: "爆発的な攻撃力と高打点。勝負手での決め力が抜群。", weakness: "攻撃重視のため守備的な局面での対応が課題になることも。", stats: [{ label: "スタイル", value: "攻撃型" }, { label: "所属団体", value: "最高位戦" }, { label: "得意役", value: "リーチ・ドラ" }, { label: "愛称", value: "ヒサト" }] },
  "hinata-aiko": { name: "日向藍子", team: "渋谷ABEMAS", style: "守備型", description: "4着回避率トップクラス。堅実な守備で安定した成績を残す。", career: "最高位戦所属。女流プロとしてMリーグで活躍。", strength: "高い守備力と4着回避率。安定した成績が持ち味。", weakness: "守備重視のため大勝ちが少ない場面もある。", stats: [{ label: "スタイル", value: "守備型" }, { label: "所属団体", value: "最高位戦" }, { label: "得意", value: "4着回避" }, { label: "特徴", value: "安定感抜群" }] },
  "matsumoto-yoshihiro": { name: "松本吉弘", team: "渋谷ABEMAS", style: "バランス型", description: "安定した成績を誇るオールラウンダー。冷静な判断力と高い牌効率でチームを支える。", career: "最高位戦所属。安定した成績でチームに貢献。", strength: "バランスの取れた攻守と高い牌効率。", weakness: "突出した個性がない分、強烈なインパクトに欠ける場面も。", stats: [{ label: "スタイル", value: "バランス型" }, { label: "所属団体", value: "最高位戦" }, { label: "得意役", value: "オールラウンド" }, { label: "特徴", value: "高い安定感" }] },
  "shiratori-sho": { name: "白鳥翔", team: "EX風林火山", style: "バランス型", description: "正確な牌効率と冷静な判断力を持つ実力派プロ。", career: "最高位戦所属。正確な麻雀で知られる。", strength: "高精度の牌効率と冷静な状況判断。", weakness: "堅実なスタイルゆえに爆発力に欠ける場面がある。", stats: [{ label: "スタイル", value: "バランス型" }, { label: "所属団体", value: "最高位戦" }, { label: "得意", value: "牌効率" }, { label: "特徴", value: "冷静な判断力" }] },
  "murakami-jun": { name: "村上淳", team: "赤坂ドリブンズ", style: "攻撃型", description: "豪快な攻撃麻雀でファンを魅了。勝負どころでの決断力が光る。", career: "RMU所属。長年のキャリアを持つベテラン。", strength: "豪快な攻撃力と勝負どころでの決断力。", weakness: "攻撃的スタイルで放銃リスクが高い場面も。", stats: [{ label: "スタイル", value: "攻撃型" }, { label: "所属団体", value: "RMU" }, { label: "得意役", value: "高打点役" }, { label: "特徴", value: "豪快な攻め" }] },
  "seto-kuma": { name: "瀬戸熊直樹", team: "赤坂ドリブンズ", style: "攻撃型", description: "ベテランの風格漂う強打者。長年のキャリアで培った読みと攻撃力でMリーグでも活躍。", career: "最高位戦所属。数々のタイトルを獲得したレジェンド。", strength: "経験に裏打ちされた読みと攻撃力。勝負強さが抜群。", weakness: "長期戦での体力面が懸念される場面も。", stats: [{ label: "スタイル", value: "攻撃型" }, { label: "所属団体", value: "最高位戦" }, { label: "得意役", value: "高打点" }, { label: "特徴", value: "レジェンド" }] },
  "katsumata-kenji": { name: "勝又健志", team: "EX風林火山", style: "守備型", description: "緻密な守備と精度の高い放銃率で知られる技巧派プロ。", career: "最高位戦所属。守備型の技巧派として知られる。", strength: "高い守備力と低い放銃率。状況判断の精度が抜群。", weakness: "守備重視のため攻撃的な局面での積極性に欠ける場面も。", stats: [{ label: "スタイル", value: "守備型" }, { label: "所属団体", value: "最高位戦" }, { label: "得意", value: "守備・放銃回避" }, { label: "特徴", value: "技巧派" }] },
  "sonoda-ken": { name: "園田賢", team: "KONAMI麻雀格闘倶楽部", style: "バランス型", description: "論理的な麻雀が持ち味。データに基づいた合理的な判断を得意とする。", career: "麻将連合所属。理論的なアプローチで知られる。", strength: "データに基づいた合理的な判断と安定した成績。", weakness: "論理的すぎて直感的な勝負手を見逃すことがある。", stats: [{ label: "スタイル", value: "バランス型" }, { label: "所属団体", value: "麻将連合" }, { label: "得意", value: "論理的判断" }, { label: "特徴", value: "理論派" }] },
  "hori-shingo": { name: "堀慎吾", team: "KADOKAWAサクラナイツ", style: "攻撃型", description: "鋭い攻撃センスと高い打点力が武器の実力派。", career: "最高位戦所属。高い攻撃力で知られる。", strength: "鋭い攻撃センスと高打点力。勝負どころでの爆発力。", weakness: "攻撃的なスタイルでリスクが高い場面も。", stats: [{ label: "スタイル", value: "攻撃型" }, { label: "所属団体", value: "最高位戦" }, { label: "得意役", value: "高打点役" }, { label: "特徴", value: "攻撃センス" }] },
  "uchinawa-kotaro": { name: "内川幸太郎", team: "KADOKAWAサクラナイツ", style: "バランス型", description: "安定感抜群のオールラウンダー。チームの精神的支柱として活躍。", career: "最高位戦所属。サクラナイツの精神的支柱。", strength: "安定したオールラウンドな実力とチームへの貢献度。", weakness: "突出した武器がない分、強烈な個性に欠ける場面も。", stats: [{ label: "スタイル", value: "バランス型" }, { label: "所属団体", value: "最高位戦" }, { label: "得意", value: "オールラウンド" }, { label: "特徴", value: "精神的支柱" }] },
};

const styleColors: Record<string, string> = {
  "攻撃型": "text-red-400 border-red-400/30 bg-red-400/10",
  "守備型": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "鳴き型": "text-green-400 border-green-400/30 bg-green-400/10",
  "バランス型": "text-[#c9a84c] border-[#c9a84c]/30 bg-[#c9a84c]/10",
};

export default async function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const player = players[id];
  if (!player) notFound();

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
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <Link href="/players" className="text-white/30 text-sm hover:text-[#c9a84c] transition-colors mb-8 inline-block">← 選手一覧に戻る</Link>
        <div className="border border-white/10 p-10 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#c9a84c]" />
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-white/30 text-xs tracking-widest mb-2">{player.team}</p>
              <h1 className="text-4xl font-black">{player.name}</h1>
            </div>
            <span className={`text-xs px-3 py-1 border rounded-full ${styleColors[player.style]}`}>{player.style}</span>
          </div>
          <p className="text-white/50 leading-relaxed">{player.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-white/10 mb-8">
          {player.stats.map((stat) => (
            <div key={stat.label} className="bg-[#0a0a0a] p-6">
              <p className="text-white/20 text-xs tracking-widest mb-2">{stat.label}</p>
              <p className="text-[#c9a84c] font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/10">
          <div className="bg-[#0a0a0a] p-8"><h2 className="text-sm tracking-widest text-white/30 uppercase mb-4">経歴</h2><p className="text-white/60 leading-relaxed">{player.career}</p></div>
          <div className="bg-[#0a0a0a] p-8"><h2 className="text-sm tracking-widest text-white/30 uppercase mb-4">強み</h2><p className="text-white/60 leading-relaxed">{player.strength}</p></div>
          <div className="bg-[#0a0a0a] p-8"><h2 className="text-sm tracking-widest text-white/30 uppercase mb-4">課題</h2><p className="text-white/60 leading-relaxed">{player.weakness}</p></div>
        </div>
      </section>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/20 text-xs tracking-widest">
        <p>© 2025 Mリーグ名鑑 — 非公式ファンサイト</p>
      </footer>
    </main>
  );
}
