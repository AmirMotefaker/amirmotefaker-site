import type { Metadata } from "next";
import type { Locale } from "@/content/founder-site";

const base=process.env.NEXT_PUBLIC_SITE_URL||"https://amirmotefaker.ir";

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
 const {locale:raw}=await params; const locale:Locale=raw==="en"?"en":"fa"; const fa=locale==="fa";
 const title=fa?"ورود و ثبت‌نام | امیر متفکر":"Sign in & register | Amir Motefaker";
 const description=fa?"ورود و ساخت حساب کاربری با ایمیل در AmirMotefaker.ir":"Sign in or create an AmirMotefaker.ir account with email.";
 return {title,description,alternates:{canonical:`${base}/${locale}/login`},robots:{index:false,follow:true}};
}

export default async function LoginPage({params}:{params:Promise<{locale:string}>}){
 const {locale:raw}=await params; const fa=raw!=="en";
 return <main style={{minHeight:"72vh",padding:"clamp(110px,14vw,160px) 20px 90px",display:"grid",placeItems:"center"}}>
  <section style={{width:"min(100%,480px)",border:"1px solid var(--border)",borderRadius:24,padding:"clamp(24px,5vw,42px)",background:"var(--surface)"}}>
   <div style={{fontSize:11,color:"var(--text-faint)",marginBottom:14}}>{fa?"AMIR MOT EFAKER / ACCOUNT":"AMIR MOTEFAKER / ACCOUNT"}</div>
   <h1 style={{fontSize:"clamp(1.8rem,5vw,2.7rem)",lineHeight:1.35,margin:0}}>{fa?"ورود یا ساخت حساب":"Sign in or create an account"}</h1>
   <p style={{color:"var(--text-dim)",fontSize:13,lineHeight:1.9,margin:"12px 0 28px"}}>{fa?"حساب کاربری با ایمیل ساخته می‌شود. برای امنیت، فعال‌سازی نهایی پس از اتصال سرویس تأیید ایمیل انجام خواهد شد.":"Accounts use email. Final activation will be enabled after the secure email-verification service is connected."}</p>
   <form style={{display:"grid",gap:10}}>
    <label htmlFor="email" style={{fontSize:11,color:"var(--text-dim)"}}>{fa?"ایمیل":"Email"}</label>
    <input id="email" name="email" type="email" autoComplete="email" placeholder="name@example.com" required style={{width:"100%",minHeight:50,border:"1px solid var(--border)",borderRadius:12,padding:"0 14px",background:"var(--background)",color:"var(--text)",fontFamily:"var(--font-en)",direction:"ltr"}}/>
    <button type="button" disabled aria-disabled="true" style={{minHeight:50,border:0,borderRadius:12,marginTop:6,background:"var(--text)",color:"var(--background)",fontWeight:650,opacity:.55,cursor:"not-allowed"}}>{fa?"ادامه با ایمیل":"Continue with email"}</button>
   </form>
   <p style={{fontSize:10,color:"var(--text-faint)",lineHeight:1.8,margin:"16px 0 0"}}>{fa?"ورود واقعی هنوز فعال نشده؛ این Preview فقط UI نهایی حساب کاربری است.":"Live authentication is not enabled yet; this Preview shows the final account UI only."}</p>
  </section>
 </main>;
}
