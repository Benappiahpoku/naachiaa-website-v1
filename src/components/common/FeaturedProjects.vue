<!-- filepath: /Users/benjaminappiah-poku/TekLumen/-webApps/projects/naachiaa-website-v1/src/components/common/FeaturedProjects.vue -->
<template>
  <!-- ===== FEATURED PROJECTS SECTION START ===== -->
  <!-- Mobile-first project showcase with B2B focus for Ghana contractors -->
  <section 
    class="
      w-full py-12 sm:py-16 md:py-20
      bg-white
    "
    role="region"
    aria-label="Featured Construction Projects"
  >
    <!-- Section Container -->
    <div class="max-w-6xl mx-auto px-4">
      
      <!-- ===== SECTION HEADER ===== -->
      <!-- Clear title emphasizing successful project delivery -->
      <div class="text-center mb-12">
        <h2 class="
          text-2xl sm:text-3xl md:text-4xl 
          font-bold text-gray-900 mb-4
        ">
          🏗 Featured Projects
        </h2>
        <p class="
          text-lg text-gray-600 max-w-2xl mx-auto
          leading-relaxed
        ">
          Successful projects delivered across Ghana. From residential estates 
          to major infrastructure, see how we've helped build communities.
        </p>
      </div>
      
      <!-- ===== PROJECTS GRID ===== -->
      <!-- Mobile-first responsive grid optimized for touch interaction -->
      <div class="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-6 mb-12
      ">
        
        <!-- Project Card Component for each featured project -->
        <article 
          v-for="project in featuredProjects" 
          :key="project.id"
          @click="handleProjectClick(project)"
          class="
            group bg-white rounded-lg shadow-md hover:shadow-xl
            transition-all duration-300 ease-in-out
            transform hover:scale-105 active:scale-95
            cursor-pointer
            border border-gray-200 hover:border-blue-300
            focus-within:ring-4 focus-within:ring-blue-200
            overflow-hidden
          "
          :aria-label="`View details for ${project.name} project`"
          tabindex="0"
          @keydown.enter="handleProjectClick(project)"
          @keydown.space.prevent="handleProjectClick(project)"
        >
          
          <!-- Project Image Container -->
          <div class="
            relative h-48 bg-gradient-to-br from-gray-100 to-gray-200
            overflow-hidden
          ">
            <!-- Project Image Placeholder (optimized for Ghana's bandwidth) -->
            <div class="
              w-full h-full flex items-center justify-center
              bg-gradient-to-br from-blue-50 to-blue-100
              text-blue-600
            ">
              <!-- Construction icon as placeholder until images are loaded -->
              <div class="
                text-6xl opacity-70 group-hover:opacity-100
                transition-opacity duration-300
              ">
                {{ project.icon }}
              </div>
            </div>
            
            <!-- Project Status Badge -->
            <div class="
              absolute top-3 left-3
              px-3 py-1 rounded-full text-xs font-bold
              shadow-md
            " :class="getStatusBadgeClass(project.status)">
              {{ project.status }}
            </div>
            
            <!-- Project Year Badge -->
            <div class="
              absolute top-3 right-3
              bg-gray-900 bg-opacity-80 text-white text-xs font-bold
              px-2 py-1 rounded-md
              shadow-md
            ">
              {{ project.year }}
            </div>
          </div>
          
          <!-- Project Content -->
          <div class="p-6">
            
            <!-- Project Name & Location -->
            <h3 class="
              text-xl font-bold text-gray-900 mb-2
              group-hover:text-blue-600 transition-colors
            ">
              {{ project.name }}
            </h3>
            
            <div class="flex items-center text-gray-500 text-sm mb-3">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ project.location }}
            </div>
            
            <!-- Project Description -->
            <p class="
              text-gray-600 text-sm leading-relaxed mb-4
              line-clamp-3
            ">
              {{ project.description }}
            </p>
            
            <!-- Products Used Section -->
            <div class="mb-4">
              <h4 class="text-sm font-semibold text-gray-700 mb-2">Products Used:</h4>
              <div class="flex flex-wrap gap-1">
                <span 
                  v-for="product in project.productsUsed" 
                  :key="product"
                  class="
                    inline-block bg-blue-100 text-blue-800 text-xs font-medium
                    px-2 py-1 rounded-md
                  "
                >
                  {{ product }}
                </span>
              </div>
            </div>
            
            <!-- Project Stats -->
            <div class="grid grid-cols-2 gap-4 mb-4 text-center">
              <div class="bg-gray-50 rounded-lg p-3">
                <div class="text-lg font-bold text-gray-900">{{ project.stats.duration }}</div>
                <div class="text-xs text-gray-500 uppercase tracking-wide">Duration</div>
              </div>
              <div class="bg-gray-50 rounded-lg p-3">
                <div class="text-lg font-bold text-gray-900">{{ project.stats.scale }}</div>
                <div class="text-xs text-gray-500 uppercase tracking-wide">Scale</div>
              </div>
            </div>
            
            <!-- View Details Arrow -->
            <div class="
              flex items-center justify-between
              text-blue-600 font-medium text-sm
              group-hover:text-blue-700 transition-colors
            ">
              <span>View Project Details</span>
              <svg 
                class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
          </div>
        </article>
        
      </div>
      
      <!-- ===== VIEW ALL PROJECTS CTA ===== -->
      <!-- Central navigation to complete project portfolio -->
      <div class="text-center">
        <button
          @click="handleViewAllProjects"
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
          aria-label="View all construction projects"
        >
          🏗️ View All Projects
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
  <!-- ===== FEATURED PROJECTS SECTION END ===== -->
</template>

<script setup lang="ts">
// ===== Types & Interfaces =====
/**
 * Project data structure for construction projects
 * Designed to showcase B2B credibility and technical capabilities
 */
interface Project {
  id: string
  name: string
  location: string
  description: string
  icon: string
  year: number
  status: 'Completed' | 'In Progress' | 'Upcoming'
  productsUsed: string[]
  stats: {
    duration: string
    scale: string
  }
  category: 'residential' | 'commercial' | 'infrastructure' | 'industrial'
}

// ===== Constants & Config =====
/**
 * Featured projects data
 * Based on Naachiaa Estates successful project portfolio
 * Optimized to build B2B credibility and trust
 */
const featuredProjects: Project[] = [
  {
    id: 'housing-estate-kumasi-2024',
    name: 'Modern Housing Estate',
    location: 'Kumasi, Ashanti Region',
    description: 'Complete residential development featuring 200 housing units. Delivered high-quality concrete blocks and paving tiles for driveways and walkways. Project completed on schedule with zero quality complaints.',
    icon: '🏘️',
    year: 2024,
    status: 'Completed',
    productsUsed: ['Concrete Blocks', 'Paving Tiles', 'Kerbs'],
    stats: {
      duration: '8 Months',
      scale: '200 Units'
    },
    category: 'residential'
  },
  {
    id: 'road-infrastructure-accra-2023',
    name: 'Major Road Infrastructure',
    location: 'Accra, Greater Accra Region',
    description: 'Critical drainage and road kerb installation for 5km stretch of major highway. Supplied reinforced concrete culverts and road kerbs meeting municipal engineering standards.',
    icon: '🛣️',
    year: 2023,
    status: 'Completed',
    productsUsed: ['Road Kerbs', 'Culverts', 'Drainage Tiles'],
    stats: {
      duration: '6 Months',
      scale: '5 KM'
    },
    category: 'infrastructure'
  },
  {
    id: 'commercial-plaza-takoradi-2024',
    name: 'Commercial Shopping Plaza',
    location: 'Takoradi, Western Region',
    description: 'Multi-level commercial complex requiring specialized concrete products. Delivered architectural concrete blocks and decorative paving solutions for high-traffic areas.',
    icon: '🏢',
    year: 2024,
    status: 'In Progress',
    productsUsed: ['Architectural Blocks', 'Heavy-Duty Tiles', 'Decorative Kerbs'],
    stats: {
      duration: '12 Months',
      scale: '3 Levels'
    },
    category: 'commercial'
  }
]

// ===== Helper Functions =====
/**
 * Get appropriate CSS classes for project status badges
 * Provides visual indication of project completion status
 */
function getStatusBadgeClass(status: Project['status']): string {
  switch (status) {
    case 'Completed':
      return 'bg-green-500 text-white'
    case 'In Progress':
      return 'bg-orange-500 text-white'
    case 'Upcoming':
      return 'bg-blue-500 text-white'
    default:
      return 'bg-gray-500 text-white'
  }
}

// ===== Main Logic =====
/**
 * Handle individual project click
 * Will navigate to detailed project page with case study information
 */
function handleProjectClick(project: Project): void {
  console.log('Project clicked:', project.name)
  
  // TODO: Navigate to project detail page with router
  // For now, show project summary with contact encouragement
  const projectSummary = `
${project.name}
Location: ${project.location}
Year: ${project.year}
Status: ${project.status}

${project.description}

Products Used: ${project.productsUsed.join(', ')}
Duration: ${project.stats.duration}
Scale: ${project.stats.scale}

Interested in a similar project? Call us at +233 24 412 3456 for a consultation!
  `.trim()
  
  alert(projectSummary)
}

/**
 * Handle "View All Projects" button click
 * Will navigate to complete project portfolio page
 */
function handleViewAllProjects(): void {
  console.log('View all projects clicked')
  
  // TODO: Navigate to projects page with router
  // For now, show placeholder with contact information
  alert('Complete project portfolio coming soon!\n\nCall +233 24 412 3456 to discuss your project requirements or request our full portfolio presentation.')
}

// ===== Performance Optimization =====
/**
 * Projects are loaded statically for fast initial render
 * In production, consider:
 * - Lazy loading project images when cards enter viewport
 * - Implementing infinite scroll for large project portfolios
 * - Caching project data in localStorage for offline browsing
 * - Progressive image loading for slower Ghana network conditions
 */

// ===== SEO & Analytics =====
/**
 * Track project interactions for business intelligence
 * Helps understand which project types generate most interest
 */
// function trackProjectInteraction(project: Project): void {
//   // TODO: Implement analytics tracking
//   console.log('Analytics: Project viewed', {
//     projectId: project.id,
//     category: project.category,
//     location: project.location,
//     status: project.status
//   })
// }

// ===== Accessibility Features =====
/**
 * Component includes:
 * - Proper ARIA labels for screen readers
 * - Keyboard navigation support (Enter/Space to activate)
 * - Focus management with visual indicators
 * - Semantic HTML structure with article tags
 * - High contrast status badges for outdoor visibility
 * - Clear visual hierarchy for scanning
 */
</script>

<!-- 
  DESIGN NOTES:
  - Mobile-first grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
  - B2B focused content with technical specifications and credibility indicators
  - Status badges and year indicators build trust and show current activity
  - Product tags help contractors understand capabilities
  - Project stats (duration, scale) demonstrate delivery capacity
  - Touch-optimized cards with proper hover/active states
  - Consistent with overall site design language
  - Fast loading with static data and CSS-only animations
  - Ghana-specific locations and realistic project scenarios
-->