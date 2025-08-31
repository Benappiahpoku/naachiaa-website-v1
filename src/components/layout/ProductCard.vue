<!-- filepath: /Users/benjaminappiah-poku/TekLumin/-webApps/projects/naachiaa-website-v1/src/components/layout/ProductCard.vue -->
<template>
    <!-- Reusable Product Card -->
    <article
        class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
        <!-- Image -->
        <div class="relative w-full aspect-[4/3] overflow-hidden">
            <img :src="imageSrc" :alt="displayName" class="w-full h-full object-cover" loading="lazy" />
            <div class="absolute top-4 left-4">
                <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">{{ category }}</span>
            </div>
            <div class="absolute bottom-4 right-4">
                <span
                    :class="inStock ? 'bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs' : 'bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs'">
                    {{ inStock ? 'In Stock' : 'Out of Stock' }}
                </span>
            </div>
        </div>

        <!-- Body -->
        <div class="p-6 flex-1 flex flex-col">
            <div class="flex items-start justify-between mb-3">
                <h3 class="text-xl font-bold text-gray-900">{{ displayName }}</h3>
                <div class="text-right">
                    <div class="text-lg font-bold text-blue-600">{{ formattedPrice }}</div>
                    <div class="text-xs text-gray-500">{{ unit }}</div>
                </div>
            </div>

            <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{{ description }}</p>

            <ul class="mt-3 mb-4 space-y-2 text-sm text-gray-700">
                <li v-for="f in features" :key="f" class="flex items-center gap-2">
                    <span class="text-green-500">✓</span>
                    <span>{{ f }}</span>
                </li>
            </ul>

            <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button @click="onRequestQuote" :disabled="!product.inStock"
                    class="w-full inline-flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                    Get Quote
                </button>

                <button @click="onShare"
                    class="w-full inline-flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm hover:bg-slate-100">
                    Share
                </button>

                <button @click="onContact"
                    class="w-full inline-flex justify-center items-center gap-2 px-3 py-2 rounded-lg bg-transparent border border-slate-200 text-slate-800 text-sm hover:bg-slate-50">
                    Contact
                </button>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
// Reusable product card props and emits
import { computed } from 'vue'

// Flexible Product shape: supports both 'name' and 'title' variants used in different lists
interface Product {
    id: string
    name?: string
    title?: string
    description?: string
    category?: string
    price?: number | string // Adjusted to allow for a range (e.g., "9.50 - 13.00")
    unit?: string
    inStock?: boolean
    features?: string[]
    image?: string
}

const props = defineProps<{ product: Product }>()
const emit = defineEmits<{
    (e: 'request-quote', product: any): void
    (e: 'share', product: any): void
    (e: 'contact'): void
}>()

// Destructure and provide computed fallbacks so component works with both product shapes
const { product } = props

const displayName = computed(() => product.name ?? product.title ?? 'Product')
const description = computed(() => product.description ?? '')
const imageSrc = computed(() => product.image ?? '/solidblocks.JPG')
const formattedPrice = computed(() => {
    if (typeof product.price === 'string') {
        return `₵${product.price}` // For price ranges like "9.50 - 13.00"
    }
    return product.price != null ? `₵${product.price}` : null // For single prices
})
const unit = computed(() => product.unit ?? '')
const features = computed(() => product.features ?? [])
const category = computed(() => product.category ?? '')
const inStock = computed(() => (product.inStock == null ? true : product.inStock))

function onRequestQuote() {
    emit('request-quote', product)
}

function onShare() {
    emit('share', product)
}

function onContact() {
    emit('contact')
}
</script>

<!-- Styling is done with Tailwind in templates per project guidelines -->