// Central content for the UMEED landing page.
// Kept in one place so copy is easy to review and edit without touching markup.

// Hero collage. Drop matching files into /public/hero (see README there).
// `fallback` is the colour shown until the photo is present, so no broken images.
export const HERO_IMAGES = {
  family:  { src: '/hero/flood-family.jpg', fallback: '#5b6b73', label: 'Evacuated to safety · Assam',        pos: '38% 30%' },
  crew:    { src: '/hero/firefighters.jpg', fallback: '#4a5a3f', label: 'Fire & rescue on scene',             pos: '50% 40%' },
  heli:    { src: '/hero/heli-rescue.jpg',  fallback: '#6a6f74', label: 'Air lift · Himalayan flood zone',    pos: '50% 40%' },
}

export const NAV_LINKS = [
  { label: 'Dashboard', href: '#impact' },
  { label: 'Agencies', href: '#agencies' },
  { label: 'Live Alerts', href: '#alerts' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
]

// Scrolling alert ticker (mimics a live feed).
export const ALERTS = [
  { level: 'severe',  region: 'Assam',        text: 'Brahmaputra above danger mark, evacuation underway in 42 villages' },
  { level: 'high',    region: 'Uttarakhand',  text: 'Cloudburst warning issued for Chamoli & Rudraprayag districts' },
  { level: 'watch',   region: 'Odisha',       text: 'Cyclonic circulation over Bay of Bengal being monitored' },
  { level: 'high',    region: 'Himachal',     text: 'Landslide blocks NH-5 near Kinnaur, SDRF teams deployed' },
  { level: 'watch',   region: 'Gujarat',      text: 'Heatwave advisory extended for Saurashtra region' },
]

// Real-time impact counters.
export const STATS = [
  { id: 'rescued',  value: 3654, suffix: '',      label: 'Individuals Rescued', icon: 'people' },
  { id: 'states',   value: 36,   suffix: '/36',   label: 'States Monitoring',   icon: 'map' },
  { id: 'agencies', value: 1248, suffix: '',      label: 'Agencies Registered', icon: 'bank' },
  { id: 'ngos',     value: 2317, suffix: '',      label: 'NGOs Registered',     icon: 'hands' },
  { id: 'active',   value: 7,    suffix: '',      label: 'Active Operations',   icon: 'alert', pulse: true },
]

export const STEPS = [
  {
    n: '01',
    title: 'Report & Detect',
    text: 'Citizens, field officers and IMD sensors raise an alert. UMEED geo-tags it and pushes it to the nearest response cell within seconds.',
  },
  {
    n: '02',
    title: 'Verify & Assign',
    text: 'District coordinators confirm severity, then the system auto-assigns NDRF, SDRF and vetted NGOs based on proximity and capacity.',
  },
  {
    n: '03',
    title: 'Mobilise & Track',
    text: 'Teams move with live maps, shelter routing and supply manifests. Every unit is visible on one shared operational picture.',
  },
  {
    n: '04',
    title: 'Recover & Report',
    text: 'Displacement, relief camps and rehabilitation are logged for transparent, auditable recovery long after the headlines fade.',
  },
]

export const CAPABILITIES = [
  {
    icon: 'radar',
    title: 'Early Warning Grid',
    text: 'Flood, cyclone, landslide and heatwave feeds from IMD, CWC and ISRO stitched into a single alerting layer.',
  },
  {
    icon: 'route',
    title: 'Evacuation Routing',
    text: 'Live safe-route guidance to the nearest shelter, accounting for blocked roads and rising water levels.',
  },
  {
    icon: 'tent',
    title: 'Relief Camp Registry',
    text: 'Capacity, medical cover and ration stock for every camp, so no family is turned away at the gate.',
  },
  {
    icon: 'people',
    title: 'Family Reunification',
    text: 'A verified missing-and-found registry that reconnects displaced families across camps and states.',
  },
  {
    icon: 'truck',
    title: 'Supply Chain Tracking',
    text: 'Track relief material from warehouse to last mile with tamper-proof manifests and delivery proof.',
  },
  {
    icon: 'shield',
    title: 'Agency Coordination',
    text: 'One shared operational picture for NDRF, SDRF, district admin and NGOs, with no more parallel silos.',
  },
]

// Mock live operations for the "on the ground now" panel.
export const OPERATIONS = [
  { region: 'Majuli, Assam',        type: 'Flood Evacuation',   teams: 6, status: 'active',   pct: 72 },
  { region: 'Joshimath, Uttarakhand', type: 'Landslide Relief', teams: 4, status: 'active',   pct: 45 },
  { region: 'Puri, Odisha',         type: 'Cyclone Standby',    teams: 3, status: 'standby',  pct: 20 },
  { region: 'Kutch, Gujarat',       type: 'Heatwave Response',  teams: 2, status: 'active',   pct: 58 },
]

// Partner names for the marquee.
export const PARTNERS = [
  'NDRF', 'SDRF', 'IMD', 'ISRO', 'NDMA', 'Indian Red Cross',
  'CWC', 'Goonj', 'SEEDS India', 'Doctors For You', 'HAM Radio Corps', 'Sphere India',
]

export const INVOLVE = [
  {
    icon: 'hand-heart',
    tag: 'Volunteer',
    title: 'Join the response corps',
    text: 'Trained and untrained volunteers alike. Get matched to tasks near you, from packing kits to camp coordination.',
    cta: 'Become a volunteer',
    tone: 'teal',
  },
  {
    icon: 'building',
    tag: 'For Agencies',
    title: 'Onboard your team',
    text: 'Government bodies and NGOs get a verified dashboard, live tasking and a shared map with every other responder.',
    cta: 'Register an agency',
    tone: 'ink',
  },
  {
    icon: 'gift',
    tag: 'Support',
    title: 'Fund the frontline',
    text: 'Every rupee is traced to a camp, a kit or a rescue. Transparent ledgers, no middle layer, receipts within minutes.',
    cta: 'Contribute',
    tone: 'gold',
  },
]
