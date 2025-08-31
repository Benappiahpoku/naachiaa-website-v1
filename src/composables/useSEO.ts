/**
 * SEO Composable for Naachiaa Estates
 * Provides dynamic meta tag management for Vue 3 components
 * Ghana-specific SEO optimizations included
 */

import { ref, watchEffect, onUnmounted } from 'vue'

export interface SEOMetaData {
    title?: string
    description?: string
    keywords?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    ogUrl?: string
    twitterTitle?: string
    twitterDescription?: string
    twitterImage?: string
    canonicalUrl?: string
    structuredData?: Record<string, any>
}

/**
 * Default SEO settings for Naachiaa Estates
 */
const DEFAULT_SEO: SEOMetaData = {
    title: 'Naachiaa Estates - Ghana\'s Premier Concrete Products Manufacturer',
    description: 'Leading supplier of quality concrete blocks, tiles, kerbs and construction materials in Ghana since 1991. Trusted by contractors nationwide with fast delivery and competitive pricing.',
    keywords: 'concrete blocks Ghana, construction materials, paving stones, roofing tiles, culverts, kerbs, building materials Accra, construction supplies Ghana',
    ogTitle: 'Naachiaa Estates - Ghana\'s Premier Concrete Products Manufacturer',
    ogDescription: 'Leading supplier of quality concrete blocks, tiles, kerbs and construction materials in Ghana since 1991. Trusted by contractors nationwide.',
    ogImage: 'https://naachiaa.vercel.app/og-image.jpg',
    ogUrl: 'https://naachiaa.vercel.app/',
    twitterTitle: 'Naachiaa Estates - Ghana\'s Premier Concrete Products Manufacturer',
    twitterDescription: 'Leading supplier of quality concrete blocks, tiles, kerbs and construction materials in Ghana since 1991.',
    twitterImage: 'https://naachiaa.vercel.app/og-image.jpg'
}

/**
 * Use SEO meta tags hook
 * Dynamically updates document meta tags for better search engine optimization
 */
export function useSEO(metaData: Partial<SEOMetaData> = {}) {
    const currentMeta = ref<SEOMetaData>({ ...DEFAULT_SEO, ...metaData })
    const addedElements: HTMLMetaElement[] = []

    /**
     * Update or create meta tag
     */
    function setMetaTag(name: string, content: string, property = false) {
        if (!content) return

        const attribute = property ? 'property' : 'name'
        let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement

        if (meta) {
            meta.setAttribute('content', content)
        } else {
            meta = document.createElement('meta')
            meta.setAttribute(attribute, name)
            meta.setAttribute('content', content)
            document.head.appendChild(meta)
            addedElements.push(meta)
        }
    }

    /**
     * Update document title
     */
    function setTitle(title: string) {
        if (title) {
            document.title = title
        }
    }

    /**
     * Set canonical URL
     */
    function setCanonical(url: string) {
        if (!url) return

        let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement

        if (canonical) {
            canonical.setAttribute('href', url)
        } else {
            canonical = document.createElement('link')
            canonical.setAttribute('rel', 'canonical')
            canonical.setAttribute('href', url)
            document.head.appendChild(canonical)
        }
    }

    /**
     * Add structured data (JSON-LD)
     */
    function setStructuredData(data: Record<string, any>) {
        if (!data) return

        // Remove existing structured data
        const existing = document.querySelector('script[type="application/ld+json"][data-dynamic]')
        if (existing) {
            existing.remove()
        }

        // Add new structured data
        const script = document.createElement('script')
        script.setAttribute('type', 'application/ld+json')
        script.setAttribute('data-dynamic', 'true')
        script.textContent = JSON.stringify(data)
        document.head.appendChild(script)
    }

    /**
     * Apply all meta tags
     */
    function applyMeta() {
        const meta = currentMeta.value

        // Basic meta tags
        setTitle(meta.title || DEFAULT_SEO.title || '')
        setMetaTag('description', meta.description || '')
        setMetaTag('keywords', meta.keywords || '')
        setMetaTag('robots', 'index, follow')

        // Open Graph tags
        setMetaTag('og:title', meta.ogTitle || meta.title || '', true)
        setMetaTag('og:description', meta.ogDescription || meta.description || '', true)
        setMetaTag('og:image', meta.ogImage || '', true)
        setMetaTag('og:url', meta.ogUrl || '', true)
        setMetaTag('og:type', 'website', true)
        setMetaTag('og:site_name', 'Naachiaa Estates', true)
        setMetaTag('og:locale', 'en_GH', true)

        // Twitter Card tags
        setMetaTag('twitter:card', 'summary_large_image')
        setMetaTag('twitter:title', meta.twitterTitle || meta.title || '')
        setMetaTag('twitter:description', meta.twitterDescription || meta.description || '')
        setMetaTag('twitter:image', meta.twitterImage || meta.ogImage || '')
        setMetaTag('twitter:site', '@naachiaa_estates')

        // Ghana-specific geo tags
        setMetaTag('geo.region', 'GH')
        setMetaTag('geo.placename', 'Ghana')

        // Canonical URL
        if (meta.canonicalUrl) {
            setCanonical(meta.canonicalUrl)
        }

        // Structured data
        if (meta.structuredData) {
            setStructuredData(meta.structuredData)
        }
    }

    /**
     * Update meta data reactively
     */
    function updateMeta(newMeta: Partial<SEOMetaData>) {
        currentMeta.value = { ...currentMeta.value, ...newMeta }
    }

    /**
     * Create page-specific structured data
     */
    function createPageStructuredData(type: 'WebPage' | 'Product' | 'Organization' = 'WebPage', additionalData: Record<string, any> = {}) {
        const baseData: Record<string, any> = {
            '@context': 'https://schema.org',
            '@type': type,
            name: currentMeta.value.title,
            description: currentMeta.value.description,
            url: currentMeta.value.ogUrl || window.location.href,
            image: currentMeta.value.ogImage,
            inLanguage: 'en-GH',
            ...additionalData
        }

        if (type === 'WebPage') {
            baseData.isPartOf = {
                '@type': 'WebSite',
                name: 'Naachiaa Estates',
                url: 'https://naachiaa.vercel.app/'
            }
        }

        return baseData
    }

    /**
     * Get product structured data helper
     */
    function getProductStructuredData(product: {
        name: string
        description: string
        price?: string | number
        image?: string
        category?: string
    }) {
        return createPageStructuredData('Product', {
            brand: {
                '@type': 'Brand',
                name: 'Naachiaa Estates'
            },
            category: product.category,
            offers: {
                '@type': 'Offer',
                price: typeof product.price === 'string' ? product.price.split(' - ')[0] : product.price,
                priceCurrency: 'GHS',
                availability: 'https://schema.org/InStock',
                seller: {
                    '@type': 'Organization',
                    name: 'Naachiaa Estates Ltd'
                }
            },
            manufacturer: {
                '@type': 'Organization',
                name: 'Naachiaa Estates Ltd',
                url: 'https://naachiaa.vercel.app/'
            }
        })
    }

    // Apply meta tags when component mounts or data changes
    watchEffect(() => {
        if (typeof document !== 'undefined') {
            applyMeta()
        }
    })

    // Cleanup function
    onUnmounted(() => {
        // Remove dynamically added elements
        addedElements.forEach(element => {
            if (element.parentNode) {
                element.parentNode.removeChild(element)
            }
        })

        // Remove dynamic structured data
        const dynamicScript = document.querySelector('script[type="application/ld+json"][data-dynamic]')
        if (dynamicScript) {
            dynamicScript.remove()
        }
    })

    return {
        updateMeta,
        createPageStructuredData,
        getProductStructuredData,
        currentMeta: currentMeta.value
    }
}
