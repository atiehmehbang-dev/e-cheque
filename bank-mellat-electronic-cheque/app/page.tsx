"use client";

import {useEffect, useState} from "react";

const journey = [
  ["doc", "صدور چک", "ثبت اطلاعات و صدور چک"],
  ["pen", "امضای دیجیتال", "امضای امن با رمز پویا"],
  ["send", "انتقال چک", "ارسال سریع به گیرنده"],
  ["inbox", "دریافت چک", "پذیرش و مشاهده چک"],
  ["bank", "وصول و ثبت", "وصول وجه و ثبت در حساب"],
];

const prerequisites = [
  ["doc", "حساب فعال در بانک ملت", "داشتن حساب جاری و دسته‌چک"],
  ["card", "اینترنت‌بانک فعال", "دسترسی به اینترنت‌بانک ملت"],
  ["phone", "همراه‌بانک ملت", "نصب و فعال‌سازی اپلیکیشن"],
  ["pen", "رمز پویا و امضای دیجیتال", "فعال‌سازی رمز و امضای امن"],
];

const operations = [
  ["doc", "صدور چک", "ثبت و صدور یک چک جدید"],
  ["pen", "امضای دیجیتال", "تضمین اصالت و امنیت چک"],
  ["send", "انتقال به دیگران", "ارسال سریع و مطمئن به گیرنده"],
  ["inbox", "دریافت و پذیرش", "مشاهده و پذیرش چک دریافت‌شده"],
  ["bank", "وصول چک", "وصول وجه و واریز به حساب"],
  ["search", "گزارش‌گیری و جستجو", "مشاهده سابقه و گزارش‌های چک"],
];

const faqs = [
  ["چک الکترونیکی چه تفاوتی با چک کاغذی دارد؟", "چک الکترونیکی همان ماهیت و اعتبار قانونی چک کاغذی را دارد؛ اما تمام مراحل صدور، امضا، انتقال و وصول آن بدون برگه کاغذی انجام می‌شود."],
  ["آیا چک الکترونیکی اعتبار قانونی دارد؟", "بله. مقررات چک کاغذی درباره چک الکترونیکی نیز اعمال می‌شود و اصالت آن با امضای دیجیتال تأیید می‌گردد."],
  ["در صورت فراموشی رمز پویا چه باید کرد؟", "از مسیر بازیابی و فعال‌سازی رمز در همراه‌بانک ملت استفاده کنید و سپس فرایند امضای چک را ادامه دهید."],
  ["آیا می‌توان چک الکترونیکی را ابطال کرد؟", "در صورت فراهم بودن شرایط قانونی، مدیریت درخواست از مسیر کارتابل چک الکترونیکی انجام می‌شود."],
];

function Icon({type}:{type:string}) { return <span className={`icon icon-${type}`} aria-hidden="true"/>; }

export default function Home(){
  const [theme,setTheme]=useState<"light"|"dark">("light");
  const [menuOpen,setMenuOpen]=useState(false);
  const [mobileCtaVisible,setMobileCtaVisible]=useState(true);
  useEffect(()=>{const saved=localStorage.getItem("mellat-theme");const preferred=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";setTheme(saved==="dark"||saved==="light"?saved:preferred)},[]);
  useEffect(()=>{
    const targets=Array.from(document.querySelectorAll(".final-cta, footer"));
    const visibleTargets=new Set<Element>();
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>entry.isIntersecting?visibleTargets.add(entry.target):visibleTargets.delete(entry.target));
      setMobileCtaVisible(visibleTargets.size===0);
    },{rootMargin:"0px 0px 80px 0px",threshold:.01});
    targets.forEach(target=>observer.observe(target));
    return()=>observer.disconnect();
  },[]);
  const toggleTheme=()=>setTheme(current=>{const next=current==="light"?"dark":"light";localStorage.setItem("mellat-theme",next);return next});
  return <main dir="rtl" data-theme={theme}>
  <header className="header" id="home"><nav className="wrap nav">
    <a className="logo" href="#home"><img src="/assets/mellat-logo.png" alt="بانک ملت"/></a>
    <div className="navlinks"><a className="active" href="#home">چک الکترونیکی</a><a href="#operations">امکانات و مزایا</a><a href="#videos">آموزش‌ها</a><a href="#faq">سؤالات متداول</a><a href="#footer">اخبار و اطلاعیه‌ها</a></div>
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme==="light"?"فعال‌کردن حالت تیره":"فعال‌کردن حالت روشن"} title={theme==="light"?"حالت تیره":"حالت روشن"}><span className="theme-icon" aria-hidden="true">{theme==="light"?"☾":"☀"}</span><span className="theme-label">{theme==="light"?"تیره":"روشن"}</span></button>
    <button className={`menu ${menuOpen?"is-open":""}`} type="button" onClick={()=>setMenuOpen(v=>!v)} aria-label={menuOpen?"بستن فهرست":"باز کردن فهرست"} aria-expanded={menuOpen} aria-controls="mobile-navigation">☰</button>
  </nav></header>
  <div className={`mobile-nav ${menuOpen?"is-open":""}`} id="mobile-navigation" aria-hidden={!menuOpen}><nav><a onClick={()=>setMenuOpen(false)} href="#home">چک الکترونیکی</a><a onClick={()=>setMenuOpen(false)} href="#operations">امکانات و مزایا</a><a onClick={()=>setMenuOpen(false)} href="#videos">آموزش‌ها</a><a onClick={()=>setMenuOpen(false)} href="#faq">سؤالات متداول</a><a onClick={()=>setMenuOpen(false)} href="#footer">تماس با ما</a></nav></div>

  <section className="hero"><div className="wrap hero-grid">
    <div className="hero-copy"><span className="overline">راهکاری نوین از بانک ملت</span><h1>چک الکترونیکی،<br/><em>امضای امن</em> آینده</h1><p>چک الکترونیکی بانک ملت با امضای دیجیتال و اعتبار قانونی، تجربه‌ای سریع، امن و بدون کاغذ را برای شما رقم می‌زند.</p><div className="actions"><a className="btn primary" href="#requirements">راهنمای فعال‌سازی <b>‹</b></a><a className="btn outline" href="#videos"><i>▶</i> مشاهده آموزش</a></div></div>
    <div className="hero-art" aria-label="نمای چک الکترونیکی در همراه‌بانک ملت"><img src="/assets/electronic-cheque-hero.png" alt="گوشی همراه‌بانک، چک الکترونیکی و سپر امنیت"/></div>
  </div></section>

  <section className="trust wrap"><article><Icon type="shield"/><div><h2>اعتبار قانونی</h2><p>دارای اعتبار برابر با چک کاغذی</p></div></article><article><Icon type="pen"/><div><h2>امضای دیجیتال</h2><p>امنیت بالا با امضای دیجیتال</p></div></article><article><Icon type="clock"/><div><h2>دسترسی ۲۴ ساعته</h2><p>صدور و مدیریت چک در هر زمان</p></div></article></section>

  <section className="journey wrap" id="journey"><div className="heading"><h2>از صدور تا وصول، <em>کاملاً دیجیتال</em></h2><p>مسیر ساده و شفاف چک الکترونیکی بانک ملت</p></div><div className="journey-line">{journey.map(([i,t,d],n)=><article key={t}><div className="round"><Icon type={i}/></div><b>{n+1}. {t}</b><span>{d}</span></article>)}</div></section>

  <section className="video-section" id="videos"><div className="wrap"><div className="video-title"><h2>آموزش‌های ویدئویی</h2><p>یادگیری سریع و گام‌به‌گام</p></div><div className="video-layout">
    <a className="featured-video" href="#videos" aria-label="پخش معرفی کامل چک الکترونیکی"><img className="feature-image" src="/assets/video-featured.png" alt="نمای لپ‌تاپ و تلفن همراه در آموزش چک الکترونیکی"/><span className="play big">▶</span><div className="video-caption"><strong>معرفی کامل چک الکترونیکی بانک ملت</strong><small>با چک الکترونیکی بانک ملت بیشتر آشنا شوید.</small></div><time>۰۵:۲۴</time></a>
    <div className="lessons"><a href="#videos"><div className="lesson-thumb one"><span className="play">▶</span><time>۰۳:۱۸</time></div><div><h3>نحوه صدور چک الکترونیکی</h3><p>صدور چک در چند مرحله ساده</p></div></a><a href="#videos"><div className="lesson-thumb two"><span className="play">▶</span><time>۰۲:۴۵</time></div><div><h3>انتقال و دریافت چک</h3><p>ارسال و دریافت چک به سادگی</p></div></a><a href="#videos"><div className="lesson-thumb three"><span className="play">▶</span><time>۰۲:۳۰</time></div><div><h3>وصول و مدیریت چک‌ها</h3><p>ثبت وصول و مشاهده وضعیت</p></div></a></div>
  </div><a className="all-videos" href="#videos">مشاهده همه آموزش‌ها <b>‹</b></a></div></section>

  <section className="requirements wrap" id="requirements"><div className="heading"><h2>برای شروع آماده‌اید؟</h2><p>چند پیش‌نیاز ساده برای استفاده از چک الکترونیکی</p></div><div className="require-grid">{prerequisites.map(([i,t,d])=><article key={t}><Icon type={i}/><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>

  <section className="operations wrap" id="operations"><div className="heading"><h2>همه عملیات چک الکترونیکی در <em>یک نگاه</em></h2><p>از صدور و امضا تا انتقال و وصول؛ در یک مسیر امن و یکپارچه</p></div><div className="operations-map"><div className="op-col">{operations.slice(0,3).map(([i,t,d])=><article key={t}><Icon type={i}/><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="op-center"><span className="halo"/><div className="op-phone"><b>چک الکترونیکی</b><i/><i/><i/></div><div className="op-shield">✓</div></div><div className="op-col">{operations.slice(3).map(([i,t,d])=><article key={t}><Icon type={i}/><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="op-mobile-grid">{operations.map(([i,t,d])=><article key={t}><Icon type={i}/><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div></section>

  <section className="faq wrap" id="faq"><div className="faq-art"><span>؟</span><i>⌕</i></div><div className="faq-content"><h2>سؤالات پرتکرار</h2>{faqs.map(([q,a])=><details key={q}><summary>{q}<b>⌄</b></summary><p>{a}</p></details>)}</div></section>

  <section className="final-cta wrap"><div className="cta-shield">✓</div><div><h2>چک الکترونیکی را همین امروز فعال کنید</h2><p>امن، سریع و همیشه در دسترس</p></div><a href="#requirements">راهنمای فعال‌سازی <b>‹</b></a></section>

  <footer id="footer"><div className="wrap footer-row"><img src="/assets/mellat-logo.png" alt="بانک ملت"/><nav><a href="#home">ورود به اینترنت بانک</a><a href="#videos">پشتیبانی</a><a href="#faq">سؤالات متداول</a><a href="#footer">تماس با ما</a></nav><small>کلیه حقوق مادی و معنوی این وب‌سایت متعلق به بانک ملت است.</small></div></footer>
  <a className={`mobile-cta ${mobileCtaVisible?"is-visible":"is-hidden"}`} href="#requirements" aria-hidden={!mobileCtaVisible} tabIndex={mobileCtaVisible?0:-1}>راهنمای فعال‌سازی <b>‹</b></a>
</main>}
