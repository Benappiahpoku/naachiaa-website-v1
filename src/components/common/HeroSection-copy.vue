<!--
  HeroSection.vue
  Modern, mobile-first hero for Naachiaa Estates.
  - Image on right (desktop), content on left
  - On mobile: content first, image below
  - Stratonea guidelines: clear comments, simple error handling, Ghana-specific UX
-->

<template>
  <!-- ===== NAACHIAA ESTATES HERO SECTION START ===== -->
  <section class="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
    <div class="max-w-7xl mx-auto px-4 py-10">
      <!-- ===== Responsive Layout: mobile-first ===== -->
      <!--
        Change: On mobile, content is first (order-1), image is below (order-2).
        On desktop, content is left (order-1), image is right (order-2).
      -->
      <div class="flex flex-col md:flex-row items-center md:items-stretch gap-8">
        <!-- ===== HERO CONTENT COLUMN ===== -->
        <!-- Mobile: content first; Desktop: content left -->
        <section class="relative w-full md:w-1/2 order-1 md:order-1 rounded-xl flex items-center"
          aria-labelledby="hero-heading">
          <!-- ===== [New Feature] START: Modern background gradient & overlay ===== -->
          <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-900 via-primary to-gray-900"></div>
          <div class="absolute inset-0 rounded-xl bg-black bg-opacity-40"></div>
          <!-- ===== [New Feature] END ===== -->

          <div class="relative z-10 p-6 md:p-12 text-white w-full">
            <!-- ===== HERO TITLE ===== -->
            <h1 id="hero-heading" class="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              {{ heroTitle }}
            </h1>

            <!-- ===== HERO SUBTITLE ===== -->
            <p class="text-base md:text-xl text-blue-100 mb-6 max-w-lg">
              {{ heroSubtitle }}
            </p>

            <!-- ===== ACTION BUTTONS ===== -->
            <div class="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mb-8 max-w-md">
              <button @click="handleRequestQuote"
                class="btn-touch bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition active:scale-95"
                aria-label="Request a quote via WhatsApp" type="button">
                ✅ Get Quote via WhatsApp
              </button>
              <button @click="handleCallNow"
                class="btn-touch bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-4 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition active:scale-95"
                aria-label="Call Naachiaa Estates now" type="button">
                📞 Call Us Now
              </button>
            </div>

            <!-- ===== COMPANY STATS ===== -->
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 text-blue-100">
              <div class="flex-1 text-center">
                <div class="text-2xl md:text-3xl font-bold">30+</div>
                <div class="text-xs uppercase tracking-wide">Years Experience</div>
              </div>
              <div class="flex-1 text-center">
                <div class="text-2xl md:text-3xl font-bold">16</div>
                <div class="text-xs uppercase tracking-wide">Regions Served</div>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== HERO IMAGE COLUMN ===== -->
        <!-- Mobile: image below content; Desktop: image right -->
        <div class="w-full md:w-1/2 order-2 md:order-2 flex justify-center items-center">
          <img src="/heroImage.jpg" alt="Naachiaa Estates - concrete and construction" loading="lazy" decoding="async"
            class="w-full h-56 md:h-[520px] object-cover rounded-xl shadow-xl img-low-data" />
        </div>
      </div>
    </div>

    <!-- ===== OFFLINE INDICATOR ===== -->
    <div v-if="!isOnline" class="fixed top-4 left-4 right-4 offline-alert rounded-xl shadow-xl z-50" role="alert"
      aria-live="polite">
      <div class="flex items-center gap-2 text-sm">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd" />
        </svg>
        <span>You're offline — contact options still available</span>
      </div>
    </div>
  </section>
  <!-- ===== NAACHIAA ESTATES HERO SECTION END ===== -->
</template>

<script setup lang="ts">
/**
 * HeroSection.vue logic
 * - Handles WhatsApp and Call actions
 * - Tracks online/offline state for Ghanaian users
 * - All functions documented for learning
 */

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
 * - Ghana guideline: WhatsApp is primary contact channel.
 * - Simple error message if WhatsApp fails.
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
 * - If navigation fails, copies number to clipboard.
 * - Ghana guideline: simple error message.
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
  // Dev telemetry (remove in production)
  console.log('Hero loaded', { company: businessInfo.companyName, online: isOnline.value })
})

onUnmounted(() => {
  window.removeEventListener('online', setOnline)
  window.removeEventListener('offline', setOffline)
})

</script>