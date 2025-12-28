export interface IContentFocus {
    title: string;
    galleryType?: string; // e.g., 'WaterfallGrid', 'Carousel'
    primaryCTA: string;
    metadataPriority: string[];
    displayCodeBlocks?: boolean;
    showTestimonials?: boolean;
    ctaFrequency?: string;
    useMockups?: boolean;
    displayWireframes?: boolean;
    // E-Commerce specific properties
    displayCharts?: boolean;
    showPlanComparison?: boolean;
    showSpecials?: boolean;
    showPlayer?: boolean;
    // Corporate specific properties
    deepNavigation?: boolean;
    showFlowCharts?: boolean;
    showImpactData?: boolean;
    immersivePhotos?: boolean;
    showCredentials?: boolean;
    // Content/News specific properties
    hasSidebar?: boolean;
    printableLayout?: boolean;
    showMapEmbeds?: boolean;
    denseGrid?: boolean;
    centerContent?: boolean;
    // Software/SaaS specific properties
    highlightFreeTier?: boolean;
    shortForm?: boolean;
    verticalLayout?: boolean;
    showKanban?: boolean;
    showRegulatedTrust?: boolean;
}

export interface ISubThemeDetail {
    id: string;
    name: string;
    layoutComponent: string;
    styleClasses: string;
    contentFocus: IContentFocus;
    description: string;
}
