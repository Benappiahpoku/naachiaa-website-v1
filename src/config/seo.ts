/**
 * SEO Configuration for Naachiaa Estates
 * Centralized SEO data for consistent optimization across all pages
 */

export interface PageSEO {
    title: string
    description: string
    keywords: string
    ogImage?: string
    structuredDataType?: 'WebPage' | 'Product' | 'Organization'
    additionalStructuredData?: Record<string, any>
}

/**
 * Base business information for SEO
 */
export const BUSINESS_INFO = {
    name: 'Naachiaa Estates Ltd',
    shortName: 'Naachiaa Estates',
    description: 'Ghana\'s leading concrete products manufacturer since 1991, specializing in quality blocks, tiles, kerbs, culverts and construction materials.',
    phone: '+233500000839',
    email: 'info@naachiaa.com',
    address: {
        street: 'No. 8 Darfur Road, Esreso',
        city: 'Kumasi',
        region: 'Ashanti Region',
        country: 'Ghana',
        coordinates: {
            latitude: 6.6885,
            longitude: -1.6244
        }
    },
    social: {
        whatsapp: 'https://wa.me/233500000839',
        twitter: '@naachiaa_estates'
    },
    foundingYear: 1991,
    services: [
        'Concrete Blocks',
        'Roofing Tiles',
        'Paving Stones',
        'Kerbs',
        'Culverts',
        'Construction Materials'
    ]
}

/**
 * SEO configuration for each page
 */
export const SEO_CONFIG: Record<string, PageSEO> = {
    home: {
        title: 'Naachiaa Estates - Ghana\'s Premier Concrete Products Manufacturer | Quality Construction Materials',
        description: 'Leading supplier of quality concrete blocks, tiles, kerbs and construction materials in Ghana since 1991. Trusted by contractors nationwide with fast delivery and competitive pricing.',
        keywords: 'concrete blocks Ghana, construction materials, paving stones, roofing tiles, culverts, kerbs, building materials Accra, construction supplies Ghana, concrete manufacturer, building supplies',
        ogImage: '/og-image.jpg',
        structuredDataType: 'WebPage'
    },

    products: {
        title: 'Concrete Products | Blocks, Tiles, Kerbs & Construction Materials - Naachiaa Estates',
        description: 'Browse our complete range of concrete products: solid blocks, roofing tiles, paving stones, kerbs, and culverts. Quality construction materials with competitive pricing and fast delivery across Ghana.',
        keywords: 'concrete products Ghana, concrete blocks, roofing tiles, paving blocks, kerbs, culverts, construction materials, building supplies, solid blocks, interlocking pavers',
        ogImage: '/solidblocks.JPG',
        structuredDataType: 'WebPage',
        additionalStructuredData: {
            mainEntity: {
                '@type': 'ItemList',
                numberOfItems: 7,
                itemListElement: [
                    {
                        '@type': 'Product',
                        name: 'Concrete Blocks',
                        description: 'Premium quality concrete blocks for construction'
                    },
                    {
                        '@type': 'Product',
                        name: 'Roofing Tiles',
                        description: 'Durable concrete roofing tiles'
                    },
                    {
                        '@type': 'Product',
                        name: 'Paving Stones',
                        description: 'Quality paving stones and blocks'
                    }
                ]
            }
        }
    },

    projects: {
        title: 'Our Projects | Construction Success Stories - Naachiaa Estates Ghana',
        description: 'Explore our portfolio of successful construction projects across Ghana. From residential buildings to commercial developments, see how our concrete products build lasting structures.',
        keywords: 'construction projects Ghana, building projects, concrete construction, residential projects, commercial construction, Naachiaa projects, construction portfolio',
        ogImage: '/estatesheropic.webp',
        structuredDataType: 'WebPage'
    },

    about: {
        title: 'About Naachiaa Estates | 30+ Years of Excellence in Concrete Manufacturing',
        description: 'Learn about Naachiaa Estates\' journey since 1991 as Ghana\'s trusted concrete products manufacturer. Our commitment to quality, innovation, and serving Ghana\'s construction industry.',
        keywords: 'Naachiaa Estates history, concrete manufacturer Ghana, construction company, building materials supplier, Ghana construction industry, concrete products company',
        ogImage: '/NaachiaaLogo.webp',
        structuredDataType: 'Organization',
        additionalStructuredData: {
            foundingDate: '1991',
            numberOfEmployees: '50-100',
            industry: 'Construction Materials Manufacturing',
            areaServed: {
                '@type': 'Country',
                name: 'Ghana'
            }
        }
    },

    contact: {
        title: 'Contact Naachiaa Estates | Get Quotes & Expert Advice on Concrete Products',
        description: 'Contact Ghana\'s leading concrete products manufacturer. Get quotes, technical advice, and fast delivery for all your construction material needs. Call, WhatsApp, or visit us today.',
        keywords: 'contact Naachiaa Estates, concrete quotes Ghana, construction materials quotes, building supplies contact, concrete blocks quotes, construction advice Ghana',
        ogImage: '/og-image.jpg',
        structuredDataType: 'WebPage',
        additionalStructuredData: {
            mainEntity: {
                '@type': 'ContactPage',
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: BUSINESS_INFO.phone,
                    contactType: 'Sales',
                    areaServed: 'GH',
                    availableLanguage: ['English']
                }
            }
        }
    }
}

/**
 * Get SEO data for a specific page
 */
export function getPageSEO(pageKey: keyof typeof SEO_CONFIG): PageSEO {
    return SEO_CONFIG[pageKey] || SEO_CONFIG.home
}

/**
 * Generate product-specific SEO
 */
export function getProductSEO(product: {
    name: string
    description: string
    category?: string
    price?: string | number
}): PageSEO {
    const categoryKeywords: Record<string, string> = {
        'Blocks': 'concrete blocks, solid blocks, hollow blocks, building blocks',
        'Tiles': 'roofing tiles, concrete tiles, building tiles',
        'Pavers': 'paving blocks, paving stones, interlocking pavers, decorative pavers',
        'Kerbs': 'road kerbs, garden kerbs, concrete kerbs',
        'Culverts': 'box culverts, drainage culverts, concrete culverts'
    }

    const categoryWord = product.category || 'Product'
    const keywords = categoryKeywords[categoryWord] || 'concrete products'

    return {
        title: `${product.name} | ${categoryWord} - Naachiaa Estates Ghana`,
        description: `${product.description} Premium ${categoryWord.toLowerCase()} from Ghana's trusted concrete manufacturer. Get competitive quotes and fast delivery.`,
        keywords: `${product.name}, ${keywords}, Ghana construction, ${product.category?.toLowerCase()} Ghana, concrete products`,
        ogImage: '/solidblocks.JPG',
        structuredDataType: 'Product',
        additionalStructuredData: {
            brand: {
                '@type': 'Brand',
                name: BUSINESS_INFO.name
            },
            manufacturer: {
                '@type': 'Organization',
                name: BUSINESS_INFO.name,
                url: 'https://naachiaa.vercel.app/'
            }
        }
    }
}

/**
 * Default meta tags for fallback
 */
export const DEFAULT_META = {
    author: BUSINESS_INFO.name,
    robots: 'index, follow',
    language: 'English',
    revisitAfter: '7 days',
    rating: 'General',
    distribution: 'Global',
    copyright: `© ${new Date().getFullYear()} ${BUSINESS_INFO.name}. All rights reserved.`,
    generator: 'Vue.js, Vite',
    // Ghana-specific
    'geo.region': 'GH',
    'geo.placename': 'Ghana',
    'geo.position': `${BUSINESS_INFO.address.coordinates.latitude};${BUSINESS_INFO.address.coordinates.longitude}`,
    'ICBM': `${BUSINESS_INFO.address.coordinates.latitude}, ${BUSINESS_INFO.address.coordinates.longitude}`
}
