<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/components/common/ProductsSection.vue -->
<template>
  <!-- ===== PRODUCTS SECTION START ===== -->
  <!-- Mobile-first product showcase optimized for Ghana users -->
  <section 
    class="
      w-full py-12 sm:py-16 md:py-20
      bg-gray-50
    "
    role="region"
    aria-label="Our Concrete Products"
  >
    <!-- Section Container -->
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- ===== SECTION HEADER ===== -->
      <!-- Clear title and description for B2B customers -->
      <div class="text-center mb-12">
        <h2 class="
          text-2xl sm:text-3xl md:text-4xl 
          font-bold text-gray-900 mb-4
        ">
          🧱 Our Products
        </h2>
        <p class="
          text-lg text-gray-600 max-w-2xl mx-auto
          leading-relaxed
        ">
          Premium concrete products manufactured to international standards. 
          Trusted by contractors and developers across Ghana since 1991.
        </p>
      </div>
      
      <!-- ===== PRODUCTS GRID ===== -->
      <!-- Mobile-first responsive grid with touch-optimized cards -->
      <div class="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-6 mb-12
      ">
        
        <!-- Product Card Component for each product -->
        <div 
          v-for="product in products" 
          :key="product.id"
          @click="handleProductClick(product)"
          class="
            group bg-white rounded-lg shadow-md hover:shadow-xl
            transition-all duration-300 ease-in-out
            transform hover:scale-105 active:scale-95
            cursor-pointer
            min-h-[280px] flex flex-col
            border border-gray-200 hover:border-blue-300
            focus-within:ring-4 focus-within:ring-blue-200
          "
          :aria-label="`Learn more about ${product.name}`"
          tabindex="0"
          @keydown.enter="handleProductClick(product)"
          @keydown.space.prevent="handleProductClick(product)"
        >
          
          <!-- Product Image Container -->
          <div class="
            relative h-48 bg-gradient-to-br from-blue-50 to-blue-100
            rounded-t-lg overflow-hidden
            flex items-center justify-center
          ">
            <!-- Product Icon/Image Placeholder -->
            <div class="
              text-6xl opacity-70 group-hover:opacity-100
              transition-opacity duration-300
              text-blue-600
            ">
              {{ product.icon }}
            </div>
            
            <!-- "Popular" badge for featured products -->
            <div 
              v-if="product.isPopular"
              class="
                absolute top-3 right-3
                bg-orange-500 text-white text-xs font-bold
                px-2 py-1 rounded-full
                shadow-md
              "
            >
              Popular
            </div>
          </div>
          
          <!-- Product Content -->
          <div class="p-6 flex-1 flex flex-col">
            
            <!-- Product Name -->
            <h3 class="
              text-xl font-bold text-gray-900 mb-2
              group-hover:text-blue-600 transition-colors
            ">
              {{ product.name }}
            </h3>
            
            <!-- Product Description -->
            <p class="
              text-gray-600 text-sm leading-relaxed mb-4
              flex-1
            ">
              {{ product.description }}
            </p>
            
            <!-- Product Features/Specs -->
            <div class="space-y-2 mb-4">
              <div 
                v-for="feature in product.keyFeatures" 
                :key="feature"
                class="flex items-center text-sm text-gray-700"
              >
                <span class="text-green-500 mr-2">✓</span>
                {{ feature }}
              </div>
            </div>
            
            <!-- Learn More Arrow -->
            <div class="
              flex items-center text-blue-600 font-medium text-sm
              group-hover:text-blue-700 transition-colors
            ">
              Learn More
              <svg 
                class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
          </div>
        </div>
        
      </div>
      
      <!-- ===== VIEW ALL PRODUCTS CTA ===== -->
      <!-- Central call-to-action for product catalog -->
      <div class="text-center">
        <button
          @click="handleViewAllProducts"
          class="
            bg-blue-600 hover:bg-blue-700 
            text-white font-semibold 
            px-8 py-4 rounded-lg
            min-h-[48px] min-w-[200px]
            transition-all duration-300 ease-in-out
            transform hover:scale-105 active:scale-95
            shadow-lg hover:shadow-xl
            focus:outline-none focus:ring-4 focus:ring-blue-300
            inline-flex items-center justify-center gap-2
          "
          aria-label="View complete product catalog"
        >
          📋 View All Products
          <svg 
            class="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      
    </div>
  </section>
  <!-- ===== PRODUCTS SECTION END ===== -->
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
/**
 * Product data structure for concrete products
 * Designed for B2B customers who need technical specifications
 */
interface Product {
  id: string
  name: string
  description: string
  icon: string
  keyFeatures: string[]
  isPopular?: boolean
  category: 'blocks' | 'tiles' | 'kerbs' | 'culverts' | 'other'
}

// ===== Constants & Config =====
/**
 * Product catalog data
 * Based on Naachiaa Estates actual product offerings
 * Optimized for mobile display with concise descriptions
 */
const products: Product[] = [
  {
    id: 'concrete-blocks',
    name: 'Concrete Blocks',
    description: 'High-strength concrete blocks for residential and commercial construction. Available in various sizes.',
    icon: '🧱',
    keyFeatures: [
      'Multiple sizes available',
      'High compressive strength', 
      'Weather resistant'
    ],
    isPopular: true,
    category: 'blocks'
  },
  {
    id: 'paving-tiles',
    name: 'Paving Tiles',
    description: 'Durable interlocking paving tiles for driveways, walkways, and outdoor spaces.',
    icon: '🔲',
    keyFeatures: [
      'Interlocking design',
      'Slip-resistant surface',
      'Easy installation'
    ],
    isPopular: true,
    category: 'tiles'
  },
  {
    id: 'road-kerbs',
    name: 'Road Kerbs',
    description: 'Precast concrete kerbs for road construction and drainage systems. Built to municipal standards.',
    icon: '🛣️',
    keyFeatures: [
      'Municipal standards',
      'Precise dimensions',
      'Durable construction'
    ],
    category: 'kerbs'
  },
  {
    id: 'culverts',
    name: 'Culverts',
    description: 'Reinforced concrete culverts for drainage and water management infrastructure projects.',
    icon: '🚇',
    keyFeatures: [
      'Reinforced design',
      'Various diameters',
      'Long-lasting durability'
    ],
    category: 'culverts'
  }
]

// ===== Main Logic =====
/**
 * Handle individual product click
 * Will eventually navigate to product detail page or show more info
 */
function handleProductClick(product: Product): void {
  console.log('Product clicked:', product.name)
  
  // TODO: Navigate to product detail page or show product modal
  // For now, show basic product info
  alert(`${product.name}\n\n${product.description}\n\nFeatures:\n${product.keyFeatures.map(f => `• ${f}`).join('\n')}\n\nCall us for pricing and availability!`)
}

/**
 * Handle "View All Products" button click
 * Will navigate to complete product catalog page
 */
function handleViewAllProducts(): void {
  console.log('View all products clicked')
  
  // TODO: Navigate to products page with router
  // For now, show placeholder message
  alert('Complete product catalog coming soon! Call us at +233 24 412 3456 for immediate product information.')
}

// ===== Performance Optimization =====
/**
 * Products are loaded statically for fast initial render
 * In production, consider:
 * - Lazy loading product images when they enter viewport
 * - Caching product data in localStorage for offline access
 * - Progressive image loading for slower connections
 */

// ===== Accessibility Features =====
/**
 * Component includes:
 * - Proper ARIA labels for screen readers
 * - Keyboard navigation support (Enter/Space to activate)
 * - Focus management with visual indicators
 * - Semantic HTML structure with proper headings
 * - High contrast colors for outdoor visibility
 */
</script>

<!-- 
  DESIGN NOTES:
  - Mobile-first grid layout (1 column on mobile, 2 on tablet, 4 on desktop)
  - Touch-optimized cards with proper hover/active states
  - Visual hierarchy with clear product names and descriptions
  - Trust indicators (features, popular badges) for B2B credibility
  - Consistent with hero section color scheme (blues and oranges)
  - Fast loading with static data and CSS-only animations
  - Ghana-optimized with large touch targets and clear typography
-->