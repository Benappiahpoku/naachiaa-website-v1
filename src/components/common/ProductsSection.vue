<template>
  <!-- ===== NAACHIAA ESTATES PRODUCTS SECTION START ===== -->
  <section class="py-10 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl md:text-3xl font-extrabold">Our Products</h2>
        <button @click="viewAllProducts"
          class="hidden sm:inline-flex items-center gap-2 text-sm text-slate-700 bg-white border border-slate-200 px-3 py-2 rounded-lg shadow-sm hover:shadow-md"
          type="button">
          View all
        </button>
      </div>

      <!-- Products grid: mobile-first single column, sm:2, lg:4 -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard v-for="product in products" :key="product.id" :product="product" @request-quote="viewProduct"
          @share="openWhatsApp" @contact="callNow" />
      </div>

      <!-- View all CTA for small screens -->
      <div class="mt-8 text-center sm:hidden">
        <button @click="viewAllProducts"
          class="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 min-h-[48px]">
          View All Products
        </button>
      </div>
    </div>
  </section>
  <!-- ===== NAACHIAA ESTATES PRODUCTS SECTION END ===== -->
</template>

<script setup lang="ts">
import { readonly } from 'vue'
import ProductCard from '@/components/layout/ProductCard.vue'

// ===== Types =====
interface Product {
  id: string
  title: string
  description: string
  image: string
}

// ===== Business contact =====
const businessPhone = '0500000839'
const businessWhatsApp = '0500000839'
const businessName = 'Naachiaa Estates'

// ===== Products (static, served from public/) =====
const products: Readonly<Product[]> = readonly([
  { id: 'solidblocks', title: 'Concrete Blocks', description: 'Durable, high-strength concrete blocks.', image: '/solidblocks.JPG', inStock: true },
  { id: 'paving', title: 'Paving Blocks', description: 'Interlocking paving blocks.', image: '/pavingblocks.JPG', inStock: true },
  { id: 'kerbs', title: 'Road Kerbs', description: 'Precast concrete kerbs.', image: '/kerbs.JPG', inStock: true },
  { id: 'culverts', title: 'Culverts', description: 'Robust culvert solutions.', image: '/culverts.jpg', inStock: true }
])

// ===== Actions =====
// function viewProduct(product: Product): void {
//   if (product?.image) {
//     window.open(product.image, '_blank', 'noopener,noreferrer')
//   }
// }
function viewProduct(product: Product): void {
  const message = `Hello ${businessName}, I would like information and a quote for: ${product.title}`
  const encoded = encodeURIComponent(message)
  const clean = businessWhatsApp.replace(/\D/g, '')
  const url = `https://wa.me/${clean}?text=${encoded}`
  try {
    window.open(url, '_blank', 'noopener,noreferrer')
  } catch (err) {
    alert(`Unable to open WhatsApp. Please call ${businessPhone}`)
  }
}


function openWhatsApp(product: Product): void {
  const message = `Hello ${businessName}, I would like information and a quote for: ${product.title}`
  const encoded = encodeURIComponent(message)
  const clean = businessWhatsApp.replace(/\D/g, '')
  const url = `https://wa.me/${clean}?text=${encoded}`
  try {
    window.open(url, '_blank', 'noopener,noreferrer')
  } catch (err) {
    alert(`Unable to open WhatsApp. Please call ${businessPhone}`)
  }
}

function callNow(): void {
  try {
    window.location.href = `tel:${businessPhone}`
  } catch (err) {
    navigator.clipboard?.writeText(businessPhone)
    alert(`Call failed to open. Number copied: ${businessPhone}`)
  }
}

function viewAllProducts(): void {
  try {
    window.location.href = '/products'
  } catch (err) {
    const msg = `Hello ${businessName}! I'd like to see your complete product catalog.`
    window.open(`https://wa.me/${businessWhatsApp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
  }
}
</script>
