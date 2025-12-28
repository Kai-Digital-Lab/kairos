import type { ISubThemeDetail } from '@/types/Theme';

// --- ENGLISH DATA ---

export const portfolioThemesEN: ISubThemeDetail[] = [
    {
        "id": "VisualDesigner",
        "name": "Visual Designer",
        "layoutComponent": "WaterfallGridLayout",
        "styleClasses": "bg-white text-gray-900 font-sans shadow-lg border-t-4 border-pink-500",
        "contentFocus": {
            "title": "Design Works and Philosophy",
            "galleryType": "WaterfallGrid",
            "primaryCTA": "Contact for Discussion",
            "metadataPriority": [
                "Concept",
                "Guidelines"
            ]
        },
        "description": "High color saturation, experimental typography, emphasizing visual impact and personal style."
    },
    {
        "id": "SoftwareEngineer",
        "name": "Software Engineer",
        "layoutComponent": "StandardDividedLayout",
        "styleClasses": "bg-slate-50 text-slate-800 font-mono antialiased border-t-4 border-blue-600",
        "contentFocus": {
            "title": "Technical Projects and Solutions",
            "displayCodeBlocks": true,
            "primaryCTA": "View Repository",
            "metadataPriority": [
                "Stack",
                "Solution"
            ]
        },
        "description": "Clean, flat design, primarily blue/green tones, emphasizing readability and functionality."
    },
    {
        "id": "FreelanceConsultant",
        "name": "Freelance Consultant",
        "layoutComponent": "LongPageLandingLayout",
        "styleClasses": "bg-stone-50 text-stone-900 font-serif antialiased shadow-xl border-t-4 border-amber-600",
        "contentFocus": {
            "title": "Service Value and Client Testimonials",
            "showTestimonials": true,
            "ctaFrequency": "High",
            "primaryCTA": "Book Consultation",
            "metadataPriority": [
                "Testimonials",
                "ServiceProcess"
            ]
        },
        "description": "Landing Page style layout, professional, authoritative, and trustworthy feel, with frequent CTAs."
    },
    {
        "id": "PhotographerArtist",
        "name": "Photographer / Artist",
        "layoutComponent": "FullBleedCarouselLayout",
        "styleClasses": "bg-neutral-900 text-neutral-100 font-serif antialiased border-t-4 border-purple-500",
        "contentFocus": {
            "title": "Work Series and Stories",
            "galleryType": "Carousel",
            "primaryCTA": "Book a Session",
            "metadataPriority": [
                "Exif",
                "SeriesName",
                "Location"
            ]
        },
        "description": "High resolution, dark theme, prioritizing full-bleed images or carousels."
    },
    {
        "id": "UXUIDesigner",
        "name": "UX/UI Designer",
        "layoutComponent": "StructuredCaseStudyLayout",
        "styleClasses": "bg-white text-gray-800 font-sans antialiased p-6 border-t-4 border-indigo-500",
        "contentFocus": {
            "title": "Case Studies and Design Process",
            "useMockups": true,
            "displayWireframes": true,
            "primaryCTA": "View Case Study",
            "metadataPriority": [
                "ProblemDefinition",
                "DesignProcess",
                "Wireframing"
            ]
        },
        "description": "Structured page, heavy use of mockups, emphasizing the user experience process."
    }
];

// --- TRADITIONAL CHINESE DATA (TW) ---

export const portfolioThemesTW: ISubThemeDetail[] = [
    {
        "id": "VisualDesigner",
        "name": "視覺設計師",
        "layoutComponent": "WaterfallGridLayout",
        "styleClasses": "bg-white text-gray-900 font-sans shadow-lg border-t-4 border-pink-500",
        "contentFocus": {
            "title": "設計作品與理念",
            "galleryType": "WaterfallGrid",
            "primaryCTA": "聯繫討論",
            "metadataPriority": [
                "設計概念",
                "視覺規範"
            ]
        },
        "description": "高色彩飽和度，實驗性排版，強調視覺衝擊與個人風格。"
    },
    {
        "id": "SoftwareEngineer",
        "name": "軟體工程師",
        "layoutComponent": "StandardDividedLayout",
        "styleClasses": "bg-slate-50 text-slate-800 font-mono antialiased border-t-4 border-blue-600",
        "contentFocus": {
            "title": "技術專案與解決方案",
            "displayCodeBlocks": true,
            "primaryCTA": "查看程式碼",
            "metadataPriority": [
                "技術堆疊",
                "解決方案"
            ]
        },
        "description": "簡潔、扁平化設計，以藍綠色調為主，強調易讀性與功能性。"
    },
    {
        "id": "FreelanceConsultant",
        "name": "自由顧問",
        "layoutComponent": "LongPageLandingLayout",
        "styleClasses": "bg-stone-50 text-stone-900 font-serif antialiased shadow-xl border-t-4 border-amber-600",
        "contentFocus": {
            "title": "服務價值與客戶見證",
            "showTestimonials": true,
            "ctaFrequency": "High",
            "primaryCTA": "預約諮詢",
            "metadataPriority": [
                "客戶見證",
                "服務流程"
            ]
        },
        "description": "著陸頁風格佈局，營造專業、權威與值得信賴的感覺，並設有頻繁的行動呼籲。"
    },
    {
        "id": "PhotographerArtist",
        "name": "攝影師 / 藝術家",
        "layoutComponent": "FullBleedCarouselLayout",
        "styleClasses": "bg-neutral-900 text-neutral-100 font-serif antialiased border-t-4 border-purple-500",
        "contentFocus": {
            "title": "作品系列與故事",
            "galleryType": "Carousel",
            "primaryCTA": "預約攝影",
            "metadataPriority": [
                "Exif 資訊",
                "系列名稱",
                "拍攝地點"
            ]
        },
        "description": "高解析度，深色主題，優先展示全版影像或輪播畫廊。"
    },
    {
        "id": "UXUIDesigner",
        "name": "UX/UI 設計師",
        "layoutComponent": "StructuredCaseStudyLayout",
        "styleClasses": "bg-white text-gray-800 font-sans antialiased p-6 border-t-4 border-indigo-500",
        "contentFocus": {
            "title": "案例研究與設計流程",
            "useMockups": true,
            "displayWireframes": true,
            "primaryCTA": "查看完整案例",
            "metadataPriority": [
                "問題定義",
                "設計流程",
                "線框圖繪製"
            ]
        },
        "description": "結構化頁面，大量使用樣機展示，強調使用者體驗流程。"
    }
];
