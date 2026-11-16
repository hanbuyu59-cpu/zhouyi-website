
export default function Home() {
  return (
    <main className="min-h-screen bg-[#100d1b] text-[#e8e0d2]">

      {/* 首頁主視覺 */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">

        {/* 背景光暈 */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(109,82,140,0.22),transparent_60%)]" />

        {/* 古典圓形裝飾 */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-200/[0.06] md:h-[650px] md:w-[650px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-200/[0.04] md:h-[550px] md:w-[550px]" />

        {/* 主視覺內容 */}
        <div className="relative z-10">

          <p className="mb-10 text-xs tracking-[0.6em] text-[#b8a0d9] md:text-sm">
            易經 · 命理 · 人生指引
          </p>

          <h1 className="text-4xl font-medium leading-[1.8] tracking-[0.2em] md:text-6xl">
            承易經之道
            <br />
            <span className="text-[#d8c5b0]">明人生之理</span>
          </h1>

          <div className="mx-auto mt-10 flex items-center justify-center gap-5">
            <div className="h-px w-12 bg-[#8b70aa]/60" />
            <div className="h-2 w-2 rotate-45 border border-[#b8a0d9]" />
            <div className="h-px w-12 bg-[#8b70aa]/60" />
          </div>

          <p className="mt-8 text-sm tracking-[0.35em] text-[#a49aaf] md:text-base">
            世事皆有象，萬事皆有解
          </p>

          <a
            href="#services"
            className="mt-16 inline-block border border-[#8b70aa]/50 px-12 py-4 text-sm tracking-[0.25em] text-[#d8c5e8]"
          >
            探索命理服務
          </a>

        </div>
      </section>

      
{/* 服務介紹 */}
<section
  id="services"
  className="relative mx-auto max-w-4xl px-6 py-32 text-center"
>
  <p className="mb-5 text-xs tracking-[0.5em] text-[#b8a0d9]">
    OUR SERVICES
  </p>

  <h2 className="text-3xl font-medium tracking-[0.25em] md:text-4xl">
    命理諮詢服務
  </h2>

  <div className="mx-auto mt-10 flex items-center justify-center gap-4">
    <div className="h-px w-12 bg-[#8b70aa]/50" />
    <div className="h-2 w-2 rotate-45 border border-[#b8a0d9]" />
    <div className="h-px w-12 bg-[#8b70aa]/50" />
  </div>

  <p className="mx-auto mt-10 max-w-2xl text-sm leading-9 tracking-[0.15em] text-[#bdb3c8] md:text-base">
    以易經智慧為根本，參悟天地之象與人生之理。
    <br />
    透過傳統命理的思維，為人生各階段提供方向與參考。
  </p>

  <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-x-12 md:grid-cols-2">
    {[
      "事業運勢",
      "財運分析",
      "感情姻緣",
      "人生疑惑解答",
      "婚姻家庭",
      "學業考試",
      "人生方向指引",
    ].map((service, index) => (
      <div
        key={service}
        className={`flex items-center justify-center gap-4 border-b border-[#8b70aa]/20 py-7 ${
          index === 6 ? "md:col-span-2" : ""
        }`}
      >
        <span className="text-xs tracking-widest text-[#8b70aa]">
          {String(index + 1).padStart(2, "0")}
        </span>

        <p className="text-base tracking-[0.25em] text-[#e0d6e8] md:text-lg">
          {service}
        </p>
      </div>
    ))}
  </div>
</section>


      
{/* 聯絡方式 */}
<section
  id="contact"
  className="relative overflow-hidden px-6 py-32 text-center"
>
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(109,82,140,0.15),transparent_60%)]" />

  <div className="relative z-10">
    <p className="mb-5 text-xs tracking-[0.5em] text-[#b8a0d9]">
      CONTACT
    </p>

    <h2 className="text-3xl font-medium tracking-[0.25em] md:text-4xl">
      尋求命理指引
    </h2>

    <div className="mx-auto mt-10 flex items-center justify-center gap-4">
      <div className="h-px w-12 bg-[#8b70aa]/50" />
      <div className="h-2 w-2 rotate-45 border border-[#b8a0d9]" />
      <div className="h-px w-12 bg-[#8b70aa]/50" />
    </div>

    <p className="mt-10 text-sm leading-8 tracking-widest text-[#bdb3c8]">
      若您有任何人生疑惑，歡迎與命理師聯絡。
      <br />
      讓易經智慧，為您指引前行之路。
    </p>

    <div className="mx-auto mt-14 flex max-w-sm flex-col gap-5">
      <a
        href="https://line.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#8b70aa]/40 bg-transparent px-8 py-5 text-sm tracking-[0.25em] text-[#e0d6e8] transition-colors hover:bg-[#8b70aa]/10"
      >
        LINE ｜ 立即聯絡命理師
      </a>
      <a
        href="#wechat-contact"
        className="border border-[#8b70aa]/40 bg-transparent px-8 py-5 text-sm tracking-[0.25em] text-[#e0d6e8] transition-colors hover:bg-[#8b70aa]/10"
      >
        WECHAT ｜ 微信聯絡
      </a>

      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-[#8b70aa]/40 bg-transparent px-8 py-5 text-sm tracking-[0.25em] text-[#e0d6e8] transition-colors hover:bg-[#8b70aa]/10"
      >
        FACEBOOK ｜ Facebook 聯絡
      </a>
    </div>
  </div>
</section>
    </main>
  );
}
