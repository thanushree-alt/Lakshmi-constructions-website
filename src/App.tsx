import { useEffect } from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDashed,
  Construction,
  Factory,
  Hammer,
  HardHat,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Users,
  Wrench,
  X
} from 'lucide-react'

type Project = {
  slug: string
  title: string
  category: string
  location: string
  status: string
  image: string
  description: string
  overview: string
  client: string
  type: string
  duration: string
  scope: string[]
  highlights: string[]
}

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Capabilities', to: '/capabilities' },
  { label: 'Safety & Quality', to: '/safety-quality' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' }
]

const projectData: Project[] = [
  {
    slug: 'highway-infrastructure-project',
    title: 'Highway Infrastructure Project',
    category: 'Highways',
    location: 'Location',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    description: 'Sample project data for a large-scale highway development initiative with major civil works and route continuity improvements.',
    overview:
      'A flagship infrastructure development project designed to improve connectivity, road safety and construction quality across a major route network.',
    client: 'Client / Add company name',
    type: 'Highway Construction',
    duration: 'Add project duration',
    scope: ['Road widening and pavement construction', 'Structural improvements and drainage works', 'Traffic management and site execution'],
    highlights: ['Infrastructure improvement', 'Large-scale deployment', 'Quality-controlled execution']
  },
  {
    slug: 'industrial-road-network',
    title: 'Industrial Road Network',
    category: 'Infrastructure',
    location: 'Location',
    status: 'Ongoing',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    description: 'Industrial access road and utility network designed to support high-capacity logistics and infrastructure requirements.',
    overview:
      'This project was conceptualized to deliver efficient, durable infrastructure capable of meeting the operational needs of a major industrial site.',
    client: 'Client / Add company name',
    type: 'Road & Infrastructure',
    duration: 'Add project duration',
    scope: ['Road layout and grading', 'Utility integration', 'Site supervision and quality checks'],
    highlights: ['Heavy-duty logistics access', 'Engineered drainage planning', 'Coordinated project delivery']
  },
  {
    slug: 'commercial-civil-development',
    title: 'Commercial Civil Development',
    category: 'Commercial',
    location: 'Location',
    status: 'Completed',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Large-scale commercial construction and utility coordination focused on structural strength, execution discipline and project control.',
    overview:
      'This sample portfolio entry reflects the type of commercial construction and civil deliverables expected from a large project management and execution team.',
    client: 'Client / Add company name',
    type: 'Commercial Construction',
    duration: 'Add project duration',
    scope: ['Civil works and site preparation', 'Structural execution coordination', 'Commercial project management'],
    highlights: ['Commercial facility optimization', 'Structured project governance', 'Execution excellence']
  },
  {
    slug: 'institutional-project',
    title: 'Institutional Project',
    category: 'Institutional',
    location: 'Location',
    status: 'In Planning',
    image:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80',
    description: 'Institutional development project sample with planning, civil execution and structured site coordination requirements.',
    overview:
      'Designed as a placeholder for large organizational and institutional infrastructure work requiring disciplined coordination and engineering oversight.',
    client: 'Client / Add company name',
    type: 'Institutional Construction',
    duration: 'Add project duration',
    scope: ['Design coordination', 'Site logistics planning', 'Civil and building works oversight'],
    highlights: ['Institutional-scale execution', 'Project governance', 'Quality-first delivery']
  }
]

const services = [
  {
    title: 'Highway & Road Construction',
    description: 'Construction and development of major road and highway infrastructure with a focus on reliability, route efficiency and long-term durability.',
    icon: Construction
  },
  {
    title: 'Civil Infrastructure',
    description: 'Large-scale civil engineering and infrastructure development for public and private projects requiring coordinated execution.',
    icon: Wrench
  },
  {
    title: 'Commercial Construction',
    description: 'Construction of large commercial and business facilities, with a disciplined approach to quality, safety and schedule control.',
    icon: Building2
  },
  {
    title: 'Industrial Construction',
    description: 'Civil and structural construction for industrial facilities designed to support operational efficiency and long-term growth.',
    icon: Factory
  },
  {
    title: 'Institutional Projects',
    description: 'Construction projects for institutions and large organizations, delivered through careful planning and structured execution.',
    icon: Users
  },
  {
    title: 'Project Execution & Management',
    description: 'End-to-end project planning, coordination, execution and monitoring designed to keep major works on track and within control.',
    icon: Hammer
  }
]

const capabilities = [
  'Project Planning',
  'Civil Engineering',
  'Site Execution',
  'Infrastructure Development',
  'Construction Management',
  'Quality Control',
  'Safety Management',
  'Equipment & Machinery',
  'Project Coordination'
]

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '100+', label: 'Projects' },
  { value: 'XX+', label: 'KM of Roads' },
  { value: 'XX+', label: 'Projects Delivered' }
]

const values = [
  'Safety-first culture',
  'Quality-driven execution',
  'Strong project governance',
  'Reliable stakeholder communication',
  'Technical discipline',
  'Long-term infrastructure thinking'
]

const careerRoles = [
  { title: 'Engineering Careers', description: 'Project planning, civil engineering and technical support roles for complex infrastructure delivery.' },
  { title: 'Site & Project Roles', description: 'Site execution, supervision and field coordination opportunities across major construction environments.' }
]

function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | Lakshmi Constructions`
  }, [title])
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function SectionHeader({ kicker, title, description }: { kicker: string; title: string; description: string }) {
  return (
    <div>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  )
}

function SiteHeader() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <header className={`sticky top-0 z-50 border-b border-slate-200 ${isHome ? 'bg-slate-950/80 text-white backdrop-blur' : 'bg-white/90 text-slate-900 backdrop-blur'}`}>
      <div className="section-shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 text-sm font-black text-slate-950">
            L
          </div>
          <div>
            <div className="text-lg font-bold tracking-wide">Lakshmi Constructions</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-amber-400'
                  : isHome
                    ? 'text-slate-200 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="hidden rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 lg:inline-flex">
          Start a Project
        </Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="section-shell grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500 text-sm font-black text-slate-950">L</div>
            <div className="text-lg font-bold text-white">Lakshmi Constructions</div>
          </div>
          <p className="mt-4 max-w-sm text-sm text-slate-300">
            Large-scale civil engineering and infrastructure company focused on reliable execution, engineering excellence and long-term project value.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-amber-400" /> <span>Company address placeholder</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-400" /> <span>Phone placeholder</span></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber-400" /> <span>Email placeholder</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="section-shell flex flex-col gap-3 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Lakshmi Constructions. All rights reserved.</p>
          <p>Sample content placeholders used until official company information is provided.</p>
        </div>
      </div>
    </footer>
  )
}

function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/safety-quality" element={<SafetyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function HomePage() {
  usePageTitle('Infrastructure & Civil Engineering')

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="section-shell relative grid min-h-[620px] items-center py-20 md:py-28">
          <div className="max-w-3xl fade-in">
            <p className="section-kicker text-amber-400">Large-scale Infrastructure</p>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Building Infrastructure That Moves India Forward
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
              Lakshmi Constructions delivers large-scale civil engineering and infrastructure projects with a focus on quality, safety, reliability and execution excellence.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/projects" className="primary-btn">
                View Our Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="secondary-btn">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="section-shell grid gap-6 py-10 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900/70 p-6 text-center">
              <div className="text-3xl font-black text-amber-400">{item.value}</div>
              <div className="mt-2 text-sm text-slate-300">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeader
              kicker="About Lakshmi"
              title="Execution capability for complex, large-scale project environments."
              description="Lakshmi Constructions focuses on major civil and infrastructure work, providing structured execution across planning, engineering, construction and project management disciplines."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="card-surface p-5">
                <h3 className="flex items-center gap-3 text-lg font-semibold"><HardHat className="h-5 w-5 text-amber-500" /> Who We Are</h3>
                <p className="mt-3 text-sm text-slate-600">A project-focused company delivering infrastructure, industrial and institutional construction services with disciplined execution.</p>
              </div>
              <div className="card-surface p-5">
                <h3 className="flex items-center gap-3 text-lg font-semibold"><GaugeIcon /> Our Approach</h3>
                <p className="mt-3 text-sm text-slate-600">Thoughtful planning, engineering coordination and safe site execution support project delivery across complex environments.</p>
              </div>
            </div>
          </div>

          <div className="grid-surface rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Large infrastructure construction site"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="section-shell">
          <SectionHeader
            kicker="What We Deliver"
            title="Infrastructure services for government, industrial and commercial scale work."
            description="Our services are structured around large infrastructure and civil execution needs, from highways and roads to institutional and commercial project delivery."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, description, icon: Icon }) => (
              <div key={title} className="card-surface group p-6 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition group-hover:bg-amber-500 group-hover:text-slate-950">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  Learn more <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeader
            kicker="Project Portfolio"
            title="Sample project work that reflects the scale and discipline we aim to deliver."
            description="A premium portfolio built to highlight large infrastructure and civil engineering work with realistic placeholder data until full project information is available."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projectData.map((project) => (
              <Link to={`/projects/${project.slug}`} key={project.slug} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
                <div className="overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <span>{project.category}</span>
                    <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-700">{project.status}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{project.title}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4 text-amber-500" /> {project.location}</div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-kicker text-amber-400">Why Lakshmi</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Engineering trust through disciplined execution.</h2>
            <p className="mt-5 max-w-xl text-slate-300">We bring together planning, safety, quality and control to support infrastructure outcomes that require reliability at every stage.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Safety-first approach', icon: ShieldCheck },
              { title: 'Structured project management', icon: Briefcase },
              { title: 'Quality control', icon: BadgeCheck },
              { title: 'Skilled execution teams', icon: Users }
            ].map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  usePageTitle('About Us')

  return (
    <div className="section-shell py-20">
      <SectionHeader
        kicker="Who We Are"
        title="A construction and infrastructure company built for major project delivery."
        description="Lakshmi Constructions operates in the field of large-scale civil engineering and infrastructure development, bringing technical discipline and project management focus to complex construction environments."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="card-surface overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="Infrastructure project site"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <div className="card-surface p-6">
            <h3 className="text-2xl font-semibold text-slate-900">Our Approach</h3>
            <p className="mt-4 text-slate-600">We believe major infrastructure outcomes depend on careful planning, disciplined execution and clear communication across every delivery phase.</p>
          </div>
          <div className="card-surface p-6">
            <h3 className="text-2xl font-semibold text-slate-900">Mission</h3>
            <p className="mt-4 text-slate-600">To deliver dependable construction and infrastructure solutions that support long-term value, quality and sustainable growth.</p>
          </div>
          <div className="card-surface p-6">
            <h3 className="text-2xl font-semibold text-slate-900">Vision</h3>
            <p className="mt-4 text-slate-600">To be recognized for trusted delivery of large-scale civil works, infrastructure improvements and professional project execution.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          { title: 'Core Values', content: 'Safety, quality, accountability and integrity remain at the centre of how we work.' },
          { title: 'Project Focus', content: 'We prioritize reliable execution, technical oversight and stakeholder coordination on every project.' },
          { title: 'Future Growth', content: 'We continue to strengthen our capacity to support large infrastructure and civil development requirements.' }
        ].map((item) => (
          <div key={item.title} className="card-surface p-6">
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-slate-600">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ServicesPage() {
  usePageTitle('Services')

  return (
    <div className="section-shell py-20">
      <SectionHeader
        kicker="Our Services"
        title="Professional civil and infrastructure services for large-scale project requirements."
        description="The services below represent the company’s core areas of infrastructure and construction focus, refined for a modern corporate audience and future content expansion."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map(({ title, description, icon: Icon }) => (
          <div key={title} className="card-surface p-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-4 text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectsPage() {
  usePageTitle('Projects')

  return (
    <div className="section-shell py-20">
      <SectionHeader
        kicker="Project Portfolio"
        title="Premium infrastructure project showcase."
        description="Sample project data is used to present a professional portfolio structure until the company provides actual project details."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        {['All', 'Highways', 'Roads', 'Commercial', 'Industrial', 'Institutional', 'Infrastructure'].map((filter) => (
          <button key={filter} type="button" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-amber-400 hover:text-slate-900">
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectData.map((project) => (
          <Link to={`/projects/${project.slug}`} key={project.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
            <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                <span>{project.category}</span>
                <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-700">{project.status}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{project.title}</h3>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4 text-amber-500" /> {project.location}</div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function ProjectDetailPage() {
  const slug = window.location.pathname.split('/').pop() || ''
  const project = projectData.find((item) => item.slug === slug) || projectData[0]

  usePageTitle(project.title)

  return (
    <div className="section-shell py-20">
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
        <img src={project.image} alt={project.title} className="h-[420px] w-full object-cover" />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
        <div>
          <p className="section-kicker">Project Overview</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">{project.title}</h1>
          <p className="mt-5 text-lg text-slate-600">{project.overview}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ['Client', project.client],
              ['Location', project.location],
              ['Project Type', project.type],
              ['Project Status', project.status],
              ['Project Duration', project.duration],
              ['Category', project.category]
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</div>
                <div className="mt-2 text-base font-medium text-slate-900">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">Scope of Work</h2>
            <ul className="mt-5 space-y-3">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600"><CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-500" /> {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-slate-900">Key Highlights</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700">
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card-surface p-6">
            <h3 className="text-lg font-semibold text-slate-900">Project Snapshot</h3>
            <ul className="mt-5 space-y-4 text-sm text-slate-600">
              <li><span className="font-semibold text-slate-900">Location:</span> {project.location}</li>
              <li><span className="font-semibold text-slate-900">Status:</span> {project.status}</li>
              <li><span className="font-semibold text-slate-900">Project Type:</span> {project.type}</li>
              <li><span className="font-semibold text-slate-900">Duration:</span> {project.duration}</li>
            </ul>
          </div>
          <div className="card-surface p-6">
            <h3 className="text-lg font-semibold text-slate-900">Need a similar project?</h3>
            <Link to="/contact" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">Image Gallery</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {projectData.slice(0, 3).map((item) => (
            <img key={item.slug} src={item.image} alt={item.title} className="h-64 w-full rounded-2xl object-cover" />
          ))}
        </div>
      </div>
    </div>
  )
}

function CapabilitiesPage() {
  usePageTitle('Capabilities')

  return (
    <div className="section-shell py-20">
      <SectionHeader
        kicker="Capabilities & Expertise"
        title="Execution strength across planning, engineering and site delivery."
        description="Lakshmi Constructions is positioned to support the technical and operational demands of large-scale construction and infrastructure work."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {capabilities.map((item, index) => (
          <div key={item} className="card-surface p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <span className="text-sm font-bold">0{index + 1}</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{item}</h3>
            <p className="mt-3 text-slate-600">A core capability designed to support disciplined execution and reliable project outcomes across complex infrastructure environments.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function SafetyPage() {
  usePageTitle('Safety & Quality')

  return (
    <div className="section-shell py-20">
      <SectionHeader
        kicker="Safety & Quality"
        title="A disciplined, safety-first approach to infrastructure delivery."
        description="We prioritize safety, engineering standards, inspections, quality assurance and proactive risk management across all project stages."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {[
          { title: 'Safety-first practices', icon: ShieldCheck, desc: 'Work planning, site supervision and risk-aware execution support safe project delivery.' },
          { title: 'Quality control', icon: BadgeCheck, desc: 'Inspection, process checks and performance standards help maintain reliable construction outcomes.' },
          { title: 'Site management', icon: HardHat, desc: 'Coordination and supervision support operational control from tendering through execution.' },
          { title: 'Engineering standards', icon: Wrench, desc: 'Technical expectations are aligned to project requirements and disciplined site execution.' },
          { title: 'Inspection & compliance', icon: CircleDashed, desc: 'Monitoring and review routines support continuity, accountability and project assurance.' },
          { title: 'Risk management', icon: Construction, desc: 'Proactive identification and control of site and project risks support smooth progress.' }
        ].map(({ title, icon: Icon, desc }) => (
          <div key={title} className="card-surface p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CareersPage() {
  usePageTitle('Careers')

  return (
    <div className="section-shell py-20">
      <SectionHeader
        kicker="Careers"
        title="Build your career. Build what matters."
        description="Lakshmi Constructions is focused on building a capable team for the next generation of infrastructure and civil engineering work."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="card-surface p-8">
          <h3 className="text-2xl font-semibold text-slate-900">Why Work With Us</h3>
          <ul className="mt-6 space-y-4 text-slate-600">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-500" /> {value}</li>
            ))}
          </ul>
        </div>

        <div className="card-surface p-8">
          <h3 className="text-2xl font-semibold text-slate-900">Current Opportunities</h3>
          <div className="mt-6 space-y-4">
            {careerRoles.map((role) => (
              <div key={role.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="text-lg font-semibold text-slate-900">{role.title}</h4>
                <p className="mt-2 text-slate-600">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 card-surface p-8">
        <h3 className="text-2xl font-semibold text-slate-900">Submit Your Resume</h3>
        <p className="mt-3 text-slate-600">If you are interested in joining our team, please send your resume and profile information to the company contact details provided below.</p>
        <Link to="/contact" className="primary-btn mt-6">
          Apply Now <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function ContactPage() {
  usePageTitle('Contact')

  return (
    <div className="section-shell py-20">
      <SectionHeader
        kicker="Contact"
        title="Discuss your project with Lakshmi Constructions."
        description="We work with government, corporate and institutional clients on large-scale infrastructure and civil engineering opportunities."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface p-8">
          <h3 className="text-2xl font-semibold text-slate-900">Get in touch</h3>
          <ul className="mt-6 space-y-5 text-slate-600">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-amber-500" /> Company address placeholder</li>
            <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-amber-500" /> Phone placeholder</li>
            <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-amber-500" /> Email placeholder</li>
          </ul>
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
            Google Maps placeholder
          </div>
        </div>

        <form className="card-surface p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Name</span>
              <input type="text" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Company</span>
              <input type="text" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Your company" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Email</span>
              <input type="email" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500" placeholder="name@company.com" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Phone</span>
              <input type="tel" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Your phone" />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Project Type</span>
              <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500">
                <option>Highway Construction</option>
                <option>Road & Infrastructure</option>
                <option>Commercial Construction</option>
                <option>Industrial Construction</option>
                <option>Institutional Project</option>
                <option>Project Management</option>
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-slate-700">Message</span>
              <textarea rows={5} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-amber-500" placeholder="Tell us about your project requirements" />
            </label>
          </div>
          <button type="submit" className="primary-btn mt-6">
            Discuss Your Project <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}

function NotFoundPage() {
  usePageTitle('Page Not Found')

  return (
    <div className="section-shell flex min-h-[500px] items-center justify-center py-20">
      <div className="text-center">
        <p className="section-kicker">404</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Page not found</h1>
        <Link to="/" className="primary-btn mt-8">
          Return Home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function GaugeIcon() {
  return <div className="flex h-5 w-5 items-center justify-center rounded-full border border-amber-400 text-[10px] font-bold text-amber-600">G</div>
}

export default function App() {
  return <Layout />
}
