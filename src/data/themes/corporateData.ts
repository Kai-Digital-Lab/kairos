import type { ISubThemeDetail } from "@/types/Theme";

export const corporateThemesEN: ISubThemeDetail[] = [
    {
        id: "LawAccountingFirm",
        name: "Law / Accounting Firm",
        layoutComponent: "StrictProfessionalLayout",
        styleClasses:
            "bg-white text-gray-900 font-serif antialiased border-t-4 border-slate-800",
        contentFocus: {
            title: "Expertise & Case Studies",
            deepNavigation: true,
            primaryCTA: "Schedule Consultation",
            metadataPriority: ["Terminology", "CaseStudies"],
        },
        description:
            "Strictly sectioned layout with deep navigation hierarchy, utilizing high volumes of professional terminology and long-form text paragraphs.",
    },
    {
        id: "ManufacturingB2B",
        name: "Manufacturing / B2B",
        layoutComponent: "IndustrialModularLayout",
        styleClasses:
            "bg-gray-200 text-gray-700 font-sans antialiased border-t-4 border-orange-600",
        contentFocus: {
            title: "Process & Capabilities",
            showFlowCharts: true,
            primaryCTA: "Request a Quote",
            metadataPriority: ["FlowCharts", "Specifications"],
        },
        description:
            "Industrial and modular design, emphasizing flow charts, specification lists, and real-life factory/equipment imagery.",
    },
    {
        id: "NonProfitNGO",
        name: "Non-Profit / NGO",
        layoutComponent: "NonProfitImpactLayout",
        styleClasses:
            "bg-blue-50 text-gray-900 font-sans antialiased border-t-4 border-sky-500",
        contentFocus: {
            title: "Our Impact & Mission",
            showImpactData: true,
            primaryCTA: "Donate Now",
            metadataPriority: ["Stories", "ImpactData"],
        },
        description:
            "Emotionally driven layout where the Hero section features beneficiary stories and impact data to encourage engagement.",
    },
    {
        id: "RestaurantCafe",
        name: "Restaurant / Café",
        layoutComponent: "RestaurantVisualLayout",
        styleClasses:
            "bg-red-900 text-white font-serif antialiased border-t-4 border-red-500",
        contentFocus: {
            title: "Menu & Reservations",
            immersivePhotos: true,
            primaryCTA: "Book a Table",
            metadataPriority: ["Menu", "Hours"],
        },
        description:
            "Visually oriented design emphasizing immersive photography. Menu, hours, and booking CTAs are highly visible.",
    },
    {
        id: "MedicalClinic",
        name: "Medical / Clinic",
        layoutComponent: "MedicalClinicLayout",
        styleClasses:
            "bg-white text-gray-800 font-sans antialiased border-t-4 border-teal-500",
        contentFocus: {
            title: "Our Physicians & Services",
            showCredentials: true,
            primaryCTA: "Book Appointment",
            metadataPriority: ["Credentials", "SecurityPolicy"],
        },
        description:
            "Design prioritizing high information security and readability, emphasizing Doctor Credentials and appointment functionality.",
    },
];

export const corporateThemesTW: ISubThemeDetail[] = [
    {
        id: "LawAccountingFirm",
        name: "法律 / 會計事務所",
        layoutComponent: "StrictProfessionalLayout",
        styleClasses:
            "bg-white text-gray-900 font-serif antialiased border-t-4 border-slate-800",
        contentFocus: {
            title: "專業領域與案例",
            deepNavigation: true,
            primaryCTA: "預約諮詢",
            metadataPriority: ["專業術語", "成功案例"],
        },
        description:
            "嚴謹的區塊佈局與深層導航結構，大量使用專業術語和長篇文字段落。",
    },
    {
        id: "ManufacturingB2B",
        name: "製造業 / B2B",
        layoutComponent: "IndustrialModularLayout",
        styleClasses:
            "bg-gray-200 text-gray-700 font-sans antialiased border-t-4 border-orange-600",
        contentFocus: {
            title: "製程與產能",
            showFlowCharts: true,
            primaryCTA: "索取報價",
            metadataPriority: ["流程圖", "規格說明"],
        },
        description:
            "工業化與模組化設計，強調流程圖、規格清單和真實工廠/設備圖像。",
    },
    {
        id: "NonProfitNGO",
        name: "非營利組織 / NGO",
        layoutComponent: "NonProfitImpactLayout",
        styleClasses:
            "bg-blue-50 text-gray-900 font-sans antialiased border-t-4 border-sky-500",
        contentFocus: {
            title: "我們的影響與使命",
            showImpactData: true,
            primaryCTA: "立即捐款",
            metadataPriority: ["受助故事", "影響力數據"],
        },
        description:
            "情感驅動的佈局，Hero 區塊展示受助者故事和影響力數據以鼓勵參與。",
    },
    {
        id: "RestaurantCafe",
        name: "餐廳 / 咖啡廳",
        layoutComponent: "RestaurantVisualLayout",
        styleClasses:
            "bg-red-900 text-white font-serif antialiased border-t-4 border-red-500",
        contentFocus: {
            title: "菜單與訂位",
            immersivePhotos: true,
            primaryCTA: "線上訂位",
            metadataPriority: ["菜單", "營業時間"],
        },
        description:
            "視覺導向設計，強調沉浸式攝影。菜單、營業時間和訂位 CTA 非常顯眼。",
    },
    {
        id: "MedicalClinic",
        name: "醫療 / 診所",
        layoutComponent: "MedicalClinicLayout",
        styleClasses:
            "bg-white text-gray-800 font-sans antialiased border-t-4 border-teal-500",
        contentFocus: {
            title: "醫師團隊與服務",
            showCredentials: true,
            primaryCTA: "預約掛號",
            metadataPriority: ["專業證照", "隱私政策"],
        },
        description:
            "優先考慮資訊安全與易讀性的設計，強調醫師資歷和預約功能。",
    },
];
