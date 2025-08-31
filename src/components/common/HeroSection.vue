<!-- filepath: /Users/benjaminappiah-poku/TekLumin/-webApps/projects/naachiaa-website-v1/src/components/common/HeroSection.vue -->
<!--
  HeroSection.vue
  Redesigned with a lighter color scheme and modern design elements.
  - Mobile-first layout: content on top for mobile, left for desktop.
  - Lighter colors, soft gradients, and clean typography.
  - Inspired by design elements in the `views` folder.
-->

<template>
  <!-- ===== NAACHIAA ESTATES HERO SECTION START ===== -->
  <section class="relative bg-gradient-to-br from-white via-gray-100 to-gray-50">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- ===== Responsive Layout: mobile-first ===== -->
      <!-- ===== [New Feature] START ===== -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- On mobile: image first, content second. On desktop: content left, image right. -->
        <!-- ===== HERO IMAGE COLUMN ===== -->
        <div class="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center">
          <img src="/heroImage.jpg" alt="Naachiaa Estates - concrete and construction" loading="lazy" decoding="async"
            class="w-full h-64 md:h-[520px] object-cover rounded-lg shadow-lg" />
        </div>
        <!-- ===== HERO CONTENT COLUMN ===== -->
        <section class="relative w-full md:w-1/2 order-2 md:order-1 rounded-lg flex flex-col justify-center"
          aria-labelledby="hero-heading">
          <!-- Content -->
          <div class="relative z-10 text-gray-800">
            <h1 id="hero-heading"
              class="text-4xl md:text-6xl text-center md:text-left font-extrabold leading-tight mb-4">
              {{ heroTitle }}
            </h1>
            <p class="text-lg md:text-xl text-center md:text-left text-gray-600 mb-6">
              {{ heroSubtitle }}
            </p>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-8">
              <button @click="handleRequestQuote"
                class="btn-touch bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition active:scale-95"
                aria-label="Request a quote via WhatsApp" type="button">
                ✅ Get Quote via WhatsApp
              </button>
              <button @click="handleCallNow"
                class="btn-touch bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-6 py-4 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 transition active:scale-95"
                aria-label="Call Naachiaa Estates now" type="button">
                📞 Call Us Now
              </button>
            </div>


          </div>
        </section>
      </div>
    </div>
  </section>
  <!-- ===== NAACHIAA ESTATES HERO SECTION END ===== -->
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
type BusinessInfo = {
  phone: string
  whatsappNumber: string
  companyName: string
}

// ===== Constants & Config =====
const heroTitle = "Ghana's Trusted Concrete Partner"
const heroSubtitle = "High-quality concrete products since 1991"

const businessInfo: BusinessInfo = {
  phone: '0244314463',
  whatsappNumber: '0244314463',
  companyName: 'Naachiaa Estates'
}

// ===== Reactive State =====
import { ref, onMounted, onUnmounted } from 'vue'
const isOnline = ref<boolean>(navigator.onLine)

// ===== Helper Functions =====
/**
 * Opens WhatsApp web/app with a pre-filled message.
 */
function handleRequestQuote(): void {
  const message = `Hello ${businessInfo.companyName}! I'm interested in your concrete products for my construction project. Could you provide me with quotes and product information?`
  const encodedMessage = encodeURIComponent(message)
  const cleanNumber = businessInfo.whatsappNumber.replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMessage}`

  try {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  } catch (error) {
    alert(`WhatsApp failed to open. Please call us at: ${businessInfo.phone}`)
    console.error('WhatsApp open error:', error)
  }
}

/**
 * Initiates a phone call using tel: link.
 */
function handleCallNow(): void {
  const phoneLink = `tel:${businessInfo.phone}`
  try {
    window.location.href = phoneLink
  } catch (error) {
    navigator.clipboard?.writeText(businessInfo.phone)
    alert(`Call failed to open. Our number has been copied: ${businessInfo.phone}`)
    console.error('Call initiation error:', error)
  }
}

// ===== Network Status Handling =====
function setOnline() {
  isOnline.value = true
}
function setOffline() {
  isOnline.value = false
}

onMounted(() => {
  window.addEventListener('online', setOnline)
  window.addEventListener('offline', setOffline)
  console.log('Hero loaded', { company: businessInfo.companyName, online: isOnline.value })
})

onUnmounted(() => {
  window.removeEventListener('online', setOnline)
  window.removeEventListener('offline', setOffline)
})
</script>