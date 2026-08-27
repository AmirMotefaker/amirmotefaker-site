import { getBrandOrder } from "@/content/brand-registry";
import { portfolioAssets, productPortfolio, type Product } from "@/content/product-portfolio";

/**
 * Canonical public portfolio adapter.
 *
 * The historical product dataset still contains the pre-rename ShiftPay record.
 * Public surfaces must expose the founder-confirmed Tasvia identity instead,
 * without inventing a domain or losing the verified FinTech product context.
 */
const legacySettlementProduct = portfolioAssets.find((product) => product.slug === "shiftpay");

const tasviaProduct: Product | undefined = legacySettlementProduct
  ? ({
      ...legacySettlementProduct,
      slug: "tasvia",
      name: "Tasvia",
      domain: "",
      industry: "FinTech",
      category: "Business Settlement Platform",
      positioning: "FinTech settlement infrastructure for SMEs",
      filterGroup: "FinTech",
      status: "development",
      shortDescriptionFa:
        "تسویا یک پلتفرم فین‌تک برای مدیریت شفاف و ساختاریافته پرداخت، تسویه و جریان‌های مالی کسب‌وکارهای کوچک و متوسط است.",
      shortDescriptionEn:
        "Tasvia is a FinTech platform for structured business payments, settlement and money workflows for SMEs.",
      hero: {
        ...legacySettlementProduct.hero,
        eyebrow: "FINTECH / BUSINESS SETTLEMENT",
        titleFa: "تسویه کسب‌وکار، شفاف‌تر و ساختاریافته‌تر.",
        titleEn: "Structured settlement infrastructure for SMEs.",
        descriptionFa:
          "تسویا روی جریان‌های پرداخت و تسویه کسب‌وکار تمرکز دارد و برای ساخت زیرساخت مالی شفاف، قابل پیگیری و قابل توسعه طراحی می‌شود.",
        descriptionEn:
          "Tasvia focuses on business payment and settlement workflows, designed as transparent, traceable and extensible financial infrastructure.",
        primaryCtaFa: "شناخت تسویا",
        primaryCtaEn: "Explore Tasvia",
        secondaryCtaFa: "مسیر ساخت",
        secondaryCtaEn: "Build journey",
      },
      problemFa: [
        "تسویه با تأمین‌کنندگان و ذی‌نفعان در بسیاری از کسب‌وکارهای کوچک و متوسط به فرایندهای دستی و پراکنده وابسته است.",
        "نبود یک جریان شفاف و قابل پیگیری برای پرداخت و تسویه، کنترل مالی و عملیات روزانه را دشوار می‌کند.",
      ],
      problemEn: [
        "Supplier and stakeholder settlement in many SMEs still depends on fragmented, manual workflows.",
        "Without a transparent and traceable settlement flow, financial control and daily operations become harder to manage.",
      ],
      solutionFa:
        "تسویا پرداخت و تسویه را در یک جریان مالی ساختاریافته قرار می‌دهد تا کسب‌وکار بتواند انتقال‌ها، ذی‌نفعان و وضعیت تسویه را با دید روشن‌تری مدیریت کند.",
      solutionEn:
        "Tasvia organizes payments and settlement into a structured financial workflow so businesses can manage transfers, beneficiaries and settlement status with clearer operational visibility.",
      visionFa:
        "ساخت زیرساخت تسویه دیجیتال قابل اتکا برای کسب‌وکارهای کوچک و متوسط و ساده‌کردن جریان پول میان کسب‌وکار و ذی‌نفعان آن.",
      visionEn:
        "Build dependable digital settlement infrastructure for SMEs and simplify how money moves between businesses and their stakeholders.",
      missionFa:
        "شفاف‌تر، قابل پیگیری‌تر و قابل توسعه‌تر کردن پرداخت و تسویه کسب‌وکار با کمک فناوری مالی و اتوماسیون.",
      missionEn:
        "Make business payments and settlement more transparent, traceable and extensible through financial technology and automation.",
      criticalPositioningFa:
        "تسویا یک زیرساخت تسویه و جریان مالی برای کسب‌وکارهاست و نباید به یک صنعت خاص یا یک ابزار ساده انتقال پول محدود شود.",
      criticalPositioningEn:
        "Tasvia is business settlement infrastructure and should not be positioned as an industry-specific product or a simple money-transfer utility.",
      related: ["linkresan"],
    } as Product)
  : undefined;

export const canonicalProductPortfolio: Product[] = [
  ...productPortfolio.filter((product) => product.slug !== "shiftpay"),
  ...(tasviaProduct ? [tasviaProduct] : []),
].sort((a, b) => getBrandOrder(a.slug) - getBrandOrder(b.slug) || a.name.localeCompare(b.name));

export function getCanonicalProduct(slug: string) {
  return canonicalProductPortfolio.find((product) => product.slug === slug);
}
