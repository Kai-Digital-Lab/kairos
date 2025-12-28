import type { ISubThemeDetail } from "@/types/Theme";

export const softwareThemesEN: ISubThemeDetail[] = [
    {
        id: "FreemiumSoftware",
        name: "Freemium Software",
        layoutComponent: "FreemiumSinglePageLayout",
        styleClasses:
            "bg-green-50 text-gray-900 font-sans antialiased border-t-4 border-green-500",
        contentFocus: {
            title: "Features & Free Tier Value",
            highlightFreeTier: true,
            primaryCTA: "Sign Up Free",
            metadataPriority: ["Onboarding", "ValueProps"],
        },
        description:
            "Long-form single-page layout that emphasizes the onboarding process. The 'Free' tier is highly prominent in the pricing block.",
    },
    {
        id: "HighValueEnterprise",
        name: "High-Value Enterprise",
        layoutComponent: "EnterpriseSalesLayout",
        styleClasses:
            "bg-gray-100 text-gray-900 font-serif antialiased border-t-4 border-slate-700",
        contentFocus: {
            title: "Solutions for Enterprise",
            shortForm: true,
            primaryCTA: "Contact Sales",
            metadataPriority: ["CaseStudies", "TrustLogos"],
        },
        description:
            "Professional, short-form page emphasizing CTAs directed toward Contact Sales. The trust block highlights recognizable major company logos.",
    },
    {
        id: "MobileApplication",
        name: "Mobile Application (App)",
        layoutComponent: "MobileAppVerticalLayout",
        styleClasses:
            "bg-blue-600 text-white font-sans antialiased border-t-4 border-blue-400",
        contentFocus: {
            title: "App Screenshots & Features",
            verticalLayout: true,
            primaryCTA: "Download Now",
            metadataPriority: ["Mockups", "AppStoreLinks"],
        },
        description:
            "Vertical design layout with heavy emphasis on mobile mockup screenshots. Main CTAs link directly to the App Store/Play Store.",
    },
    {
        id: "ProjectManagementTool",
        name: "Project Management Tool",
        layoutComponent: "ProjectManagementKanbanLayout",
        styleClasses:
            "bg-yellow-50 text-gray-900 font-sans antialiased border-t-4 border-yellow-400",
        contentFocus: {
            title: "Team Collaboration & Pricing",
            showKanban: true,
            primaryCTA: "Try for Team",
            metadataPriority: ["TeamFeatures", "PricingTiers"],
        },
        description:
            "Visual elements include process flow/Kanban boards. Pricing block focuses on team size and feature differentiation.",
    },
    {
        id: "Fintech",
        name: "Fintech",
        layoutComponent: "FintechDataLayout",
        styleClasses:
            "bg-black text-white font-sans antialiased border-t-4 border-emerald-500",
        contentFocus: {
            title: "Security & Financial Data",
            showRegulatedTrust: true,
            primaryCTA: "Open Account",
            metadataPriority: ["Metrics", "RegulatoryTrust"],
        },
        description:
            "Data-driven design with emphasis on Charts and Metrics. The trust proof block prominently includes regulatory body logos.",
    },
];

export const softwareThemesTW: ISubThemeDetail[] = [
    {
        id: "FreemiumSoftware",
        name: "免費增值軟體",
        layoutComponent: "FreemiumSinglePageLayout",
        styleClasses:
            "bg-green-50 text-gray-900 font-sans antialiased border-t-4 border-green-500",
        contentFocus: {
            title: "功能與免費版價值",
            highlightFreeTier: true,
            primaryCTA: "免費註冊",
            metadataPriority: ["新手引導", "價值主張"],
        },
        description:
            "長篇單頁佈局，強調新手引導流程。「免費」層級在定價區塊中非常顯眼。",
    },
    {
        id: "HighValueEnterprise",
        name: "高價值企業方案",
        layoutComponent: "EnterpriseSalesLayout",
        styleClasses:
            "bg-gray-100 text-gray-900 font-serif antialiased border-t-4 border-slate-700",
        contentFocus: {
            title: "企業級解決方案",
            shortForm: true,
            primaryCTA: "聯繫業務",
            metadataPriority: ["成功案例", "信任標章"],
        },
        description:
            "專業、短篇幅頁面，強調導向「聯繫業務」的 CTA。信任區塊突出知名大公司的 Logo。",
    },
    {
        id: "MobileApplication",
        name: "行動應用程式 (App)",
        layoutComponent: "MobileAppVerticalLayout",
        styleClasses:
            "bg-blue-600 text-white font-sans antialiased border-t-4 border-blue-400",
        contentFocus: {
            title: "App 截圖與功能",
            verticalLayout: true,
            primaryCTA: "立即下載",
            metadataPriority: ["應用樣機", "商店連結"],
        },
        description:
            "垂直設計佈局，重點展示手機 App 截圖。主要 CTA 直接連結至 App Store/Play Store。",
    },
    {
        id: "ProjectManagementTool",
        name: "專案管理工具",
        layoutComponent: "ProjectManagementKanbanLayout",
        styleClasses:
            "bg-yellow-50 text-gray-900 font-sans antialiased border-t-4 border-yellow-400",
        contentFocus: {
            title: "團隊協作與定價",
            showKanban: true,
            primaryCTA: "團隊試用",
            metadataPriority: ["協作功能", "價格層級"],
        },
        description:
            "視覺元素包含流程/看板。定價區塊專注於團隊規模與功能差異。",
    },
    {
        id: "Fintech",
        name: "金融科技",
        layoutComponent: "FintechDataLayout",
        styleClasses:
            "bg-black text-white font-sans antialiased border-t-4 border-emerald-500",
        contentFocus: {
            title: "安全與金融數據",
            showRegulatedTrust: true,
            primaryCTA: "開立帳戶",
            metadataPriority: ["財務指標", "合規信任"],
        },
        description:
            "數據驅動設計，強調圖表與指標。信任證明區塊顯著包含監管機構標誌。",
    },
];
