<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeTab = ref('web');

const tabs = [
  { id: 'web', label: 'Web' },
  { id: 'ios', label: 'iOS' },
  { id: 'windows', label: 'Windows' },
];

const changelogs = {
  web: [
    {
      version: 'March 2026',
      date: '2026-03-25',
      changes: [
        'Last Round page: browse and filter shots from your most recent session, tap any shot to view video',
        'Multi-club selection now works reliably across all chart and data views',
        'Charts default date range set to last 30 days',
        'Download button added to all video players (shot detail, video modal, Vision page)',
        'Shot list now shows a dot indicator when a face-on video is available for a shot',
        'Public changelog page added',
      ],
    },
    {
      version: 'February 2026',
      date: '2026-02-18',
      changes: [
        'Getting started prompt on empty dashboard guides new users to connect a data source',
        'Additional distance metrics on dashboard (carry vs. total; driving range vs. driver)',
        'Cancel subscription button added to subscription settings',
        'Data Quality page: major rebuild with per-field quality scoring and field-level indicators',
        'Shot tags now visible as badges in the Shot Data table',
        'No-credit-card free trial - 7-day Pro trial now starts without requiring payment info',
        'Sync reliability improvements for large datasets',
      ],
    },
    {
      version: 'Late January 2026',
      date: '2026-01-31',
      changes: [
        'Video comparison modal: full rewrite - side-by-side swing comparison with synchronized playback and scrubbing',
        'Shot detail: slow-motion video playback controls (0.1×-1× speed)',
        'AI Swing Analysis: Claude Vision analyzes key frames from your swing video, with analysis history and monthly usage tracking',
        'Shot Data Analysis modal: per-shot AI breakdown accessible directly from the shot table',
        'Charts: smooth animated bar transitions',
        'Uneekor API data source integration',
        'Square Golf data source integration',
      ],
    },
    {
      version: 'January 2026',
      date: '2026-01-18',
      changes: [
        'GSPro data source integration - import shot data directly from GSPro',
        'Data Quality page: score your shot data completeness and accuracy by field and by source',
        'Charts page: club averages, dispersion, progress over time, session comparisons, and consistency trends',
        'Shot tagging system: add custom tags to shots, filter by tag, bulk-tag multiple shots at once',
        'Export page: CSV export with club, date, and tag filters',
        'Sessions page: browse and manage all practice sessions with per-session shot counts and source badges',
        'Deep Insights page: all-time career analytics across every session and data source',
        'Shot Data table: sortable columns, inline video indicators, tag badges, expandable row detail',
      ],
    },
  ],
  ios: [
    {
      version: 'v1.2',
      date: '2026-03-21',
      changes: [
        'Last Round tab: browse and filter all shots from your most recent session',
        'Last Round Review sub-tab: interactive dispersion chart + side-by-side video comparison (your shot vs. a saved standard)',
        'Set any shot as your club standard for ongoing side-by-side video comparison',
        'Date picker lets you review any past session\'s shots in Last Round',
        'Video scrubber with slow-motion playback: 0.1×, 0.25×, 0.5×, 0.75×, 1×',
        'Landscape video layout: compact synced playback - both videos start at the same moment',
        'Favorites rebuilt: multi-select favoriting and set-standard from any shot in any view',
        'Carry and side carry now shown in shot detail and in video comparison overlay',
        'Prominent session date shown at top of shot detail',
        'More menu simplified into cleaner navigation sections',
        'Thumbnail generated on-device and uploaded alongside each recorded video',
      ],
    },
    {
      version: 'v1.1',
      date: '2026-03-04',
      changes: [
        'Videos tab: browse all uploaded swing videos organised by session',
        'Auto-retry on failed video uploads - transient network errors no longer silently drop clips',
        'Dashboard shots loading switched to batch API endpoint for significantly faster load times',
        'Interactive charts: tap any bar to see exact values in a floating popup',
        'Chart loading indicators shown while data fetches',
        'Haptic feedback when tapping chart elements',
        'Unit conversion fixes across dashboard distance and speed cards',
        'Fix sync decode error that could occur with large datasets',
      ],
    },
    {
      version: 'v1.0',
      date: '2025-12-01',
      changes: [
        'Dashboard: club stat cards (average carry, total, ball speed, spin) and recent shots list',
        'Interactive SwiftUI Charts: dispersion, club averages, progress over time, consistency trends, session-to-session comparison',
        'Shot Data table: browse all shots with club and date filters, tap any shot for full metrics and video playback',
        'Sessions view: browse all practice sessions with per-session shot counts',
        'Deep Insights: all-time career analytics across all sessions and data sources',
        'Consistency view: club-by-club consistency scoring and trends',
        'Swing Library (Favorites): save and organise favourite swings by club',
        'AI Swing Analysis: request a Claude Vision analysis of any swing video, view history of past analyses',
        'Data Quality scoring: per-field completeness and accuracy indicators for your shot data',
        'Data Sources: connect Rapsodo, Uneekor, GSPro, and Square Golf; trigger sync; view connection status',
        'Excluded Data: review and restore shots that were excluded from analytics',
        'Settings: profile, unit preferences (yards/metres), subscription management, account',
        'Swing recording: clips recorded via the SwingNerds Vision iOS app are automatically uploaded and paired to your shot data',
      ],
    },
  ],
  windows: [
    {
      version: 'v1.0.4',
      date: '2026-03-25',
      changes: [
        'Rebranded to SwingNerds Vision (previously "SwingNerds Clip") - new window title, login header, and app metadata',
        'SwingNerds logo displayed on login page',
        'Free vs. paid messaging clarified: login page now calls out that the app is free and explains the Pro subscription',
        'Subscription banners updated throughout to say "SwingNerds Pro subscription" and link to "Start 7-day free trial"',
        'Settings page: current app version displayed',
        'Settings page: manual "Check for Updates" button with result display ("Up to date" or "Update available: vX.Y.Z")',
        'Settings page: What\'s New changelog section - fetches live changelog from R2 on open',
        '"Create account" link on login page opens swingnerds.com in the browser',
      ],
    },
    {
      version: 'v1.0.3',
      date: '2026-02-01',
      changes: [
        'Uneekor Impact Vision integration: captures Uneekor\'s screen video alongside the microphone-triggered swing clip',
        'FFmpeg auto-download on first run - no manual installation required',
        'Subscription status silently refreshed from the API on login',
        'Upload pipeline logging added for easier diagnostics',
      ],
    },
    {
      version: 'v1.0.2',
      date: '2026-01-20',
      changes: [
        'Duplicate camera angle validation: Camera 1 and Camera 2 can no longer both be set to the same angle (e.g. both "Down-the-Line")',
        'Warning dialog shown immediately when a duplicate angle is selected',
        'Additional validation gate when starting a session prevents launching with duplicate angles',
      ],
    },
    {
      version: 'v1.0.1',
      date: '2026-01-10',
      changes: [
        'Settings page added: toggle club detection (alpha) and Uneekor integration on/off',
        'Dual USB camera fix: app automatically negotiates reduced frame rate on the second camera when both share the same USB bus type',
        'Two-camera tip dialog shown the first time dual camera is enabled, recommending different USB port types',
        'UX improvements across Setup and Session views',
      ],
    },
    {
      version: 'v1.0.0',
      date: '2025-12-15',
      changes: [
        'Audio impact detection via microphone - configurable sensitivity threshold triggers clip capture on ball strike',
        'Optical flow motion confirmation (Farneback algorithm) validates audio trigger before saving a clip',
        'Optional swing zone ROI - drag a box on the camera preview to focus motion detection to a specific area',
        'Dual camera support: record two simultaneous cameras with independent exposure, gain, brightness, FPS, and angle settings',
        'Camera angles: down-the-line, face-on, or impact',
        'Circular frame buffers hold ~3 seconds of pre-impact footage so the full swing is always captured',
        'H.264 re-encoding via FFmpeg (CRF 20, faststart) for browser-compatible streaming quality',
        'Automatic upload to SwingNerds cloud - requires an active Pro subscription; clips are always saved locally regardless',
        'JWT authentication with SwingNerds account credentials',
        'Club detection via Tesseract OCR on camera frames (alpha feature)',
        'Clip viewer: frame-by-frame scrubbing, 0.1×-2× playback speed, synced dual-camera side-by-side playback',
        'Manual camera controls per camera: exposure (1/4s-1/512s), gain (0-255), brightness (0-255), requested FPS (15-120)',
        'Auto/manual exposure mode toggle per camera',
        'Auto-updates via Velopack - silent background check on launch, green banner with one-click install when update is available',
        'Settings persisted to %APPDATA%\\SwingNerdsClip\\settings.json across sessions',
      ],
    },
  ],
};

function goHome() {
  router.push('/');
}
</script>

<template>
  <div class="public-page">
    <div class="page-container">
      <main class="page-content">
        <div class="content-wrapper">
          <h1>Changelog</h1>
          <p class="subtitle">What's new across SwingNerds Web, iOS, and Windows.</p>

          <!-- Tab bar -->
          <div class="tab-bar">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              :class="['tab-btn', { active: activeTab === tab.id }]"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>

          <!-- Entries -->
          <div class="entries">
            <div
              v-for="entry in changelogs[activeTab]"
              :key="entry.version"
              class="entry-card"
            >
              <div class="entry-header">
                <span class="version-badge">{{ entry.version }}</span>
                <span class="entry-date">{{ entry.date }}</span>
              </div>
              <ul class="changes-list">
                <li v-for="change in entry.changes" :key="change">{{ change }}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer class="page-footer">
        <p>© 2025 SwingNerds. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.public-page {
  --primary: var(--mk-accent);
  --primary-dark: var(--mk-accent-dark);
  --border: var(--mk-border);

  min-height: 100vh;
  background-color: var(--mk-bg);
  color: var(--mk-text);
  font-family: var(--mk-font);
}

.page-container {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-lg);
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-lg) 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: var(--space-2xl);
}

.header-brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.header-brand h1 {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
}

.header-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.back-btn {
  background: none;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--text-sm);
  transition: all var(--transition-fast) ease;
}

.back-btn:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.page-content {
  padding-bottom: var(--space-3xl);
}

.content-wrapper {
  max-width: 720px;
}

.content-wrapper h1 {
  font-size: var(--text-3xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.subtitle {
  color: var(--text-secondary);
  font-size: var(--text-md);
  margin-bottom: var(--space-xl);
}

/* Tab bar */
.tab-bar {
  display: flex;
  gap: var(--space-xs);
  border-bottom: 1px solid var(--border);
  margin-bottom: var(--space-xl);
}

.tab-btn {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  color: var(--text-secondary);
  padding: var(--space-sm) var(--space-md);
  margin-bottom: -1px;
  cursor: pointer;
  font-size: var(--text-sm);
  font-weight: 500;
  transition: all var(--transition-fast) ease;
}

.tab-btn:hover {
  color: var(--text-primary);
}

.tab-btn.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

/* Entries */
.entries {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.entry-card {
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
}

.entry-header {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.version-badge {
  background-color: var(--primary);
  color: var(--text-on-primary, white);
  font-size: var(--text-sm);
  font-weight: 600;
  padding: 2px var(--space-sm);
  border-radius: var(--radius-sm);
}

.entry-date {
  color: var(--text-secondary);
  font-size: var(--text-sm);
}

.changes-list {
  margin: 0;
  padding-left: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.changes-list li {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  line-height: 1.5;
}

.page-footer {
  border-top: 1px solid var(--border);
  padding: var(--space-lg) 0;
  text-align: center;
  color: var(--text-tertiary);
  font-size: var(--text-sm);
}
</style>
