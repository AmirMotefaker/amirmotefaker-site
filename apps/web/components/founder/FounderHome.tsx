import Link from "next/link";
import { type Locale } from "@/content/founder-site";
import { getVerifiedEvidence } from "@/content/evidence-registry";
import { getProductCategory, getProductDisplayName, type Product } from "@/content/product-portfolio";
import { canonicalProductPortfolio as products } from "@/content/canonical-product-portfolio";
import { brandRegistry } from "@/content/brand-registry";
import { formatSiteNumber, localeDigits } from "@/lib/locale-format";
import styles from "./FounderHomeV2.module.css";
import v13 from "./FounderHomeV13.module.css";

const thesisPrinciples = {
  fa: [["۰۱","مسئله، قبل از فناوری","ابتدا مسئله واقعی و رفتار کاربر را می‌فهمم؛ بعد سراغ ابزار می‌روم."],["۰۲","محصول، قبل از ادعا","خروجی قابل استفاده از هر روایت بازاریابی مهم‌تر است."],["۰۳","سیستم، قبل از ویژگی","محصول باید بتواند رشد کند، یاد بگیرد و به یک اکوسیستم بزرگ‌تر متصل شود."]],
  en: [["01","Problem before technology","Understand the real problem and user behavior before choosing the tool."],["02","Product before claims","A working product matters more than oversized marketing."],["03","Systems before features","Products should be able to grow, learn and connect into a wider ecosystem."]],
} as const;
const marks: Record<string,string>={linkresan:"LR",farsio:"FA",fahmio:"FH",zobdino:"ZO",filmtrack:"FT",idehjo:"IJ",tasvia:"TV",restyar:"RY",primesys:"PS"};
const industryMix={
 fa:[
  ["کسب‌وکار و سازمانی","۳"],["آموزش و دانش","۲"],["هوش مصنوعی و زبان","۱"],["فین‌تک","۱"],
  ["گردشگری","۱"],["سلامت","۱"],["نوآوری","۱"],["سرگرمی","۱"],
 ],
 en:[
  ["Business & Enterprise","3"],["Education & Knowledge","2"],["AI & Language","1"],["FinTech","1"],
  ["Tourism","1"],["Health","1"],["Innovation","1"],["Entertainment","1"],
 ],
} as const;
function lifecycle(status:Product["status"],locale:Locale){const labels={fa:{live:"فعال",development:"در حال توسعه",discovery:"در مرحله بررسی",concept:"ایده اولیه","to-confirm":"در حال تأیید"},en:{live:"Live",development:"In development",discovery:"Discovery",concept:"Concept","to-confirm":"To confirm"}} as const;return labels[locale][status];}

export default function FounderHome({locale}:{locale:Locale}){
 const fa=locale==="fa";
 const evidence=getVerifiedEvidence();
 const totalProducts=brandRegistry.length;
 const sectors=8;
 const featured=products.slice(0,6);
 const portfolioNames=brandRegistry;
 return <main className={`${styles.home} ${v13.home}`}>
  <section className={`${styles.hero} ${v13.hero}`}><div className={`wrap ${styles.heroShell} ${v13.heroShell}`}>
   <div className={`${styles.heroCopy} ${v13.heroCopy}`}>
    <div className={`${styles.identityLine} ${v13.identityLine}`}><i aria-hidden="true"/><span>{fa?"امیر متفکر · علاقه‌مند به فناوری":"Amir Motefaker · Tech-savvy"}</span></div>
    <h1 className={v13.headline}>{fa?<>محصول نمی‌سازم که فقط دیده شود؛ <em>سیستم‌هایی می‌سازم که اثر بگذارند.</em></>:<>I don’t build products just to be seen. <em>I build systems that create impact.</em></>}</h1>
    <p className={`${styles.heroLead} ${v13.heroLead}`}>{fa?"من امیر متفکر هستم؛ کارآفرین و سازنده مجموعه‌ای از محصولات مستقل در هوش مصنوعی، فین‌تک، آموزش، محتوا و تجربه‌های دیجیتال.":"I’m Amir Motefaker—an entrepreneur building a portfolio of independent products across AI, FinTech, education, content and digital experiences."}</p>
    <div className={styles.heroActions}><Link href={`/${locale}/products`} className={`${styles.primaryAction} ${v13.action} ${v13.primaryAction}`}>{fa?"ورود به اکوسیستم محصولات":"Enter the product ecosystem"}<span aria-hidden="true">↗</span></Link><Link href={`/${locale}/resume`} className={`${styles.secondaryAction} ${v13.action} ${v13.secondaryAction}`}>{fa?"مسیر حرفه‌ای":"Professional journey"}</Link></div>
    <div className={`${styles.heroMetrics} ${v13.heroMetrics}`}>
      <div><strong>{formatSiteNumber(totalProducts,locale)}</strong><span>{fa?"محصول و ونچر":"Products & ventures"}</span></div>
      <div><strong>{fa?"۳۰+":"30+"}</strong><span>{fa?"سال در مسیر فناوری":"Years in technology"}</span></div>
      <div><strong>{formatSiteNumber(sectors,locale)}</strong><span>{fa?"حوزه فناوری":"Technology sectors"}</span></div>
      <div><strong>{formatSiteNumber(evidence.length,locale)}</strong><span>{fa?"شاهد تأییدشده":"Verified evidence"}</span></div>
    </div>
   </div>
   <aside className={`${styles.heroVisual} ${v13.heroVisual}`} aria-label={fa?"نقشه صنایع پرتفوی امیر متفکر":"Amir Motefaker portfolio industry map"}>
    <div className={v13.industryCanvas}>
      <div className={v13.interestRail}><span></span><strong>{fa?"علاقه‌مند به فناوری":"TECH-SAVVY"}</strong></div>
      <div className={v13.industryHeader}><span>{fa?"نقشه صنایع پرتفوی":"PORTFOLIO INDUSTRY MAP"}</span><small>{fa?"۱۱ محصول · ۸ حوزه":"11 PRODUCTS · 8 SECTORS"}</small></div>
      <div className={v13.industryBody}>
        <div className={v13.donutWrap}><div className={v13.donut}><div><strong>{fa?"۱۱":"11"}</strong><span>{fa?"محصول":"products"}</span></div></div></div>
        <div className={v13.industryLegend}>{industryMix[locale].map(([label,count],index)=><div key={label}><i className={v13[`sector${index+1}`]}/><span>{label}</span><strong>{count}</strong></div>)}</div>
      </div>
      <div className={v13.industryFoot}><span>{fa?"از FoodTech تا HealthTech، FinTech و AI":"From FoodTech to HealthTech, FinTech and AI"}</span><strong>{fa?"بیش از ۳۰ سال تجربه فناوری":"30+ years in technology"}</strong></div>
    </div>
   </aside>
  </div>
  <div className={`wrap ${styles.portfolioRail}`}><span>{fa?"پرتفوی کامل":"Full portfolio"}</span><div>{portfolioNames.map(product=>product.classification==="active"?<a key={product.slug} href={`https://${product.domain}`} target="_blank" rel="noopener noreferrer">{fa?product.nameFa:product.name}</a>:<span key={product.slug} className={styles.railVenture}>{fa?product.nameFa:product.name}</span>)}</div></div></section>

  <section className={styles.venturesSection}><div className={`wrap ${styles.sectionIntro}`}><span>{fa?"پرتفوی":"Portfolio"}</span><div><h2>{fa?"محصولات مستقل در چند صنعت فناوری.":"Independent products across multiple technology sectors."}</h2><p>{fa?"هر محصول مسئله، بازار و مسیر رشد خودش را دارد.":"Each product has its own problem, market and growth path."}</p></div></div>
   <div className={`wrap ${styles.ventureGrid} ${v13.ventureGrid}`}>{featured.map((product,index)=><Link href={`/${locale}/products/${product.slug}`} key={product.slug} className={`${styles.ventureCard} ${v13.ventureCard}`}><div className={styles.ventureTop}><div className={styles.ventureMark}>{marks[product.slug]??product.slug.slice(0,2).toUpperCase()}</div><span>{localeDigits(String(index+1).padStart(2,"0"),locale)} · {lifecycle(product.status,locale)}</span></div><div className={`${styles.ventureContent} ${v13.ventureContent}`}><div><h3>{getProductDisplayName(product,locale)}</h3>{product.domain?<small>{product.domain}</small>:null}</div><p>{fa?product.shortDescriptionFa:product.shortDescriptionEn}</p></div><div className={`${styles.ventureFoot} ${v13.ventureFoot}`}><span>{getProductCategory(product,locale)}</span><strong>{fa?"مشاهده":"View"} ↗</strong></div></Link>)}</div>
   <div className={`wrap ${styles.allProducts}`}><Link href={`/${locale}/products`}>{fa?`مشاهده پرتفوی کامل ${formatSiteNumber(totalProducts,locale)} محصول`:`Explore the full portfolio of ${formatSiteNumber(totalProducts,locale)} products`}<span>↗</span></Link></div>
  </section>

  {evidence.length>0&&<section className={styles.proofSection}><div className={`wrap ${styles.sectionIntro}`}><span>{fa?"شواهد اجرا":"Proof"}</span><div><h2>{fa?"خروجی واقعی، مهم‌تر از ادعاست.":"Real output matters more than claims."}</h2></div></div><div className={`wrap ${styles.proofGrid}`}>{evidence.slice(0,6).map((item,index)=><article className={styles.proofCard} key={item.id}><span>{localeDigits(String(index+1).padStart(2,"0"),locale)}</span><h3>{fa?item.titleFa:item.titleEn}</h3>{item.url?<a href={item.url} target="_blank" rel="noopener noreferrer">{fa?"بررسی مدرک":"Inspect evidence"} ↗</a>:null}</article>)}</div></section>}
  <section className={styles.thesisSection}><div className={`wrap ${styles.sectionIntro}`}><span>{fa?"رویکرد":"Approach"}</span><div><h2>{fa?"فناوری ابزار است؛ نقطه شروع، مسئله است.":"Technology is a tool. The starting point is the problem."}</h2></div></div><div className={`wrap ${styles.thesisGrid}`}>{thesisPrinciples[locale].map(([index,title,detail])=><article className={styles.thesisCard} key={title}><span>{index}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
  <section className={styles.contactSection}><div className={`wrap ${styles.contactPanel}`}><span>{fa?"ارتباط":"Contact"}</span><h2>{fa?"برای همکاری و ساخت محصولات جدید گفتگو کنیم.":"Let's talk about building and collaborating."}</h2><div><Link href={`/${locale}/contact`} className={styles.primaryAction}>{fa?"شروع گفتگو":"Start a conversation"}<span aria-hidden="true">↗</span></Link></div></div></section>
 </main>;
}
