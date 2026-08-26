import Image from "next/image";
import Link from "next/link";
import { founder, type Locale } from "@/content/founder-site";
import { getVerifiedEvidence } from "@/content/evidence-registry";
import { getProductCategory, getProductDisplayName, productPortfolio as products, type Product } from "@/content/product-portfolio";
import { formatSiteNumber, localeDigits } from "@/lib/locale-format";
import styles from "./FounderHomeV2.module.css";

const thesisPrinciples = {
  fa: [["۰۱","مسئله، قبل از فناوری","ابتدا مسئله واقعی و رفتار کاربر را می‌فهمم؛ بعد سراغ ابزار می‌روم."],["۰۲","محصول، قبل از ادعا","خروجی قابل استفاده از هر روایت بازاریابی مهم‌تر است."],["۰۳","سیستم، قبل از ویژگی","محصول باید بتواند رشد کند، یاد بگیرد و به یک اکوسیستم بزرگ‌تر متصل شود."]],
  en: [["01","Problem before technology","Understand the real problem and user behavior before choosing the tool."],["02","Product before claims","A working product matters more than oversized marketing."],["03","Systems before features","Products should be able to grow, learn and connect into a wider ecosystem."]],
} as const;
const marks: Record<string,string>={linkresan:"LR",farsio:"FA",fahmio:"FH",zobdino:"ZO",filmtrack:"FT",idehjo:"IJ",restyar:"RY",primesys:"PS",shiftpay:"SP"};
function lifecycle(status:Product["status"],locale:Locale){const labels={fa:{live:"فعال",development:"در حال توسعه",discovery:"در مرحله بررسی",concept:"ایده اولیه","to-confirm":"در حال تأیید"},en:{live:"Live",development:"In development",discovery:"Discovery",concept:"Concept","to-confirm":"To confirm"}} as const;return labels[locale][status];}

export default function FounderHome({locale}:{locale:Locale}){
 const fa=locale==="fa"; const evidence=getVerifiedEvidence(); const sectors=new Set(products.map(p=>p.filterGroup)).size; const featured=products.slice(0,4); const portfolioNames=products.slice(0,6);
 return <main className={styles.home}>
  <section className={styles.hero}><div className={`wrap ${styles.heroShell}`}>
   <div className={styles.heroCopy}>
    <div className={styles.identityLine}><span>{fa?"امیر متفکر، علاقه‌مند به فناوری":"Amir Motefaker, Tech-savvy"}</span></div>
    <h1>{fa?<>محصولات دیجیتال برای <em>مسئله‌های واقعی.</em></>:<>Digital products for <em>real problems.</em></>}</h1>
    <p className={styles.heroLead}>{fa?"ساخت و توسعه محصولات دیجیتال با تمرکز بر هوش مصنوعی، فین‌تک، آموزش، سلامت، گردشگری و زیرساخت دیجیتال.":"Building and developing digital products across AI, FinTech, education, health, tourism and digital infrastructure."}</p>
    <div className={styles.heroActions}><Link href={`/${locale}/products`} className={styles.primaryAction}>{fa?"مشاهده محصولات":"Explore products"}<span aria-hidden="true">↗</span></Link><Link href={`/${locale}/about`} className={styles.secondaryAction}>{fa?"درباره من":"About me"}</Link></div>
    <div className={styles.heroMetrics}><div><strong>{formatSiteNumber(products.length,locale)}</strong><span>{fa?"محصول":"Products"}</span></div><div><strong>{formatSiteNumber(sectors,locale)}</strong><span>{fa?"حوزه فناوری":"Technology sectors"}</span></div><div><strong>{formatSiteNumber(evidence.length,locale)}</strong><span>{fa?"شاهد تأییدشده":"Verified evidence"}</span></div></div>
   </div>
   <aside className={styles.heroVisual}><div className={styles.portraitCard}><Image src="/assets/profile/amir-motefaker.png" alt={fa?founder.nameFa:founder.nameEn} fill priority sizes="(max-width:980px) 54vw, 24vw" className={styles.portrait}/><div className={styles.portraitShade}/><div className={styles.portraitMeta}><span>{fa?"علاقه‌مند به فناوری":"Tech-savvy"}</span><strong>{fa?founder.nameFa:founder.nameEn}</strong></div></div></aside>
  </div>
  <div className={`wrap ${styles.portfolioRail}`}><span>{fa?"محصولات منتخب":"Selected products"}</span><div>{portfolioNames.map(product=><Link key={product.slug} href={`/${locale}/products/${product.slug}`}>{getProductDisplayName(product,locale)}</Link>)}</div></div></section>
  <section className={styles.venturesSection}><div className={`wrap ${styles.sectionIntro}`}><span>{fa?"پرتفوی":"Portfolio"}</span><div><h2>{fa?"محصولات مستقل در چند صنعت فناوری.":"Independent products across multiple technology sectors."}</h2><p>{fa?"هر محصول مسئله، بازار و مسیر رشد خودش را دارد.":"Each product has its own problem, market and growth path."}</p></div></div>
   <div className={`wrap ${styles.ventureGrid}`}>{featured.map((product,index)=><Link href={`/${locale}/products/${product.slug}`} key={product.slug} className={styles.ventureCard}><div className={styles.ventureTop}><div className={styles.ventureMark}>{marks[product.slug]??product.slug.slice(0,2).toUpperCase()}</div><span>{localeDigits(String(index+1).padStart(2,"0"),locale)} · {lifecycle(product.status,locale)}</span></div><div className={styles.ventureContent}><div><h3>{getProductDisplayName(product,locale)}</h3><small>{product.domain}</small></div><p>{fa?product.shortDescriptionFa:product.shortDescriptionEn}</p></div><div className={styles.ventureFoot}><span>{getProductCategory(product,locale)}</span><strong>{fa?"مشاهده":"View"} ↗</strong></div></Link>)}</div>
   <div className={`wrap ${styles.allProducts}`}><Link href={`/${locale}/products`}>{fa?`مشاهده هر ${formatSiteNumber(products.length,locale)} محصول`:`Explore all ${formatSiteNumber(products.length,locale)} products`}<span>↗</span></Link></div>
  </section>
  {evidence.length>0&&<section className={styles.proofSection}><div className={`wrap ${styles.sectionIntro}`}><span>{fa?"شواهد اجرا":"Proof"}</span><div><h2>{fa?"خروجی واقعی، مهم‌تر از ادعاست.":"Real output matters more than claims."}</h2></div></div><div className={`wrap ${styles.proofGrid}`}>{evidence.slice(0,6).map((item,index)=><article className={styles.proofCard} key={item.id}><span>{localeDigits(String(index+1).padStart(2,"0"),locale)}</span><h3>{fa?item.titleFa:item.titleEn}</h3>{item.url?<a href={item.url} target="_blank" rel="noopener noreferrer">{fa?"بررسی مدرک":"Inspect evidence"} ↗</a>:null}</article>)}</div></section>}
  <section className={styles.thesisSection}><div className={`wrap ${styles.sectionIntro}`}><span>{fa?"رویکرد":"Approach"}</span><div><h2>{fa?"فناوری ابزار است؛ نقطه شروع، مسئله است.":"Technology is a tool. The starting point is the problem."}</h2></div></div><div className={`wrap ${styles.thesisGrid}`}>{thesisPrinciples[locale].map(([index,title,detail])=><article className={styles.thesisCard} key={title}><span>{index}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
  <section className={styles.contactSection}><div className={`wrap ${styles.contactPanel}`}><span>{fa?"ارتباط":"Contact"}</span><h2>{fa?"برای همکاری و ساخت محصولات جدید گفتگو کنیم.":"Let's talk about building and collaborating."}</h2><div><Link href={`/${locale}/contact`} className={styles.primaryAction}>{fa?"شروع گفتگو":"Start a conversation"}<span aria-hidden="true">↗</span></Link></div></div></section>
 </main>;
}