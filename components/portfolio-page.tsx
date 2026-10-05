import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import ProjectSlider from '@/components/project-slider'
import ContactForm from '@/components/contact-form'

const services = ['iOS & Android apps', 'Product design', 'MVPs from scratch']

export default function PortfolioPage() {
  return (
    <main className="portfolio-shell min-h-screen overflow-hidden text-foreground">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between py-5 sm:py-7">
          <a href="#home" aria-label="Ashish Viltoriya, home" className="group flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground transition-transform group-hover:rotate-12">av.</span>
            <span className="text-sm font-semibold tracking-tight">Ashish Viltoriya<span className="text-muted-foreground"> / Independent developer</span></span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
            <a className="transition-colors hover:text-foreground" href="#work">Recent work</a>
            <a className="transition-colors hover:text-foreground" href="#about">About</a>
            <a className="transition-colors hover:text-foreground" href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2.5 text-xs font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:text-sm">
            Let&apos;s talk <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </header>

        <section id="home" className="relative grid min-h-[650px] items-center gap-10 pb-16 pt-10 md:grid-cols-[1.08fr_.92fr] md:pb-24 md:pt-14">
          <div className="relative z-10 max-w-[670px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dce8d1] bg-white/75 px-3.5 py-2 text-xs font-medium text-[#536a49] shadow-sm">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-[#7fba73] opacity-60" /><span className="relative inline-flex size-2 rounded-full bg-[#67a85e]" /></span>
              Available for discussion on projects
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#756c82]">Independent app developer · Noida, IN</p>
            <h1 className="max-w-[760px] text-[clamp(3.7rem,8.4vw,7.35rem)] font-semibold leading-[.91] tracking-[-.075em]">
              I make apps <span className="relative inline-block text-[#6856c8]">people<span className="absolute -bottom-1 left-0 -z-10 h-3 w-full -rotate-2 rounded-full bg-[#d9d0ff] sm:h-5" /></span> love.
            </h1>
            <p className="mt-7 max-w-[510px] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              From first sketch to App Store launch, I help ambitious teams turn big ideas into delightful mobile experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-[#282349]/10 transition-all hover:-translate-y-1 hover:shadow-xl">
                Explore my work <ArrowDown aria-hidden="true" className="size-4" />
              </a>
              <a href="#contact" className="rounded-full px-5 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/70">Start a project <ArrowUpRight aria-hidden="true" className="ml-1 inline size-4" /></a>
            </div>
            <div className="mt-12 flex flex-wrap gap-2">
              {services.map((service) => <span key={service} className="rounded-full border border-white bg-white/60 px-3.5 py-2 text-xs font-medium text-[#6b6479] shadow-sm">{service}</span>)}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px] md:ml-auto">
            <div aria-hidden="true" className="absolute -right-4 top-0 h-24 w-24 rounded-[30px] bg-[#ffcf72] sm:-right-7 sm:-top-3 sm:h-32 sm:w-32" />
            <div aria-hidden="true" className="absolute -bottom-6 -left-5 h-28 w-28 rounded-full border-[18px] border-[#b9e7da] sm:-left-9 sm:h-36 sm:w-36" />
            <div aria-hidden="true" className="absolute -left-5 top-1/3 z-10 grid size-14 -rotate-12 place-items-center rounded-2xl bg-[#f9a8a9] text-white shadow-lg sm:-left-9 sm:size-16"><Sparkles className="size-7" /></div>
            <div className="relative z-[1] aspect-[4/4.7] overflow-hidden rounded-[2rem] border-[9px] border-white bg-[#f7d9c8] shadow-[0_24px_80px_-28px_rgba(67,46,91,.35)] sm:rounded-[2.5rem] sm:border-[12px]">
              <Image src="/images/portfolio-portrait.png" alt="Ashish Viltoriya, independent mobile app developer" fill priority sizes="(max-width: 768px) 90vw, 430px" className="object-cover object-center" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/85 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:p-5">
                <p className="text-xs font-medium uppercase tracking-[.16em] text-[#7a7188]">A little about me</p>
                <p className="mt-1 text-sm font-semibold text-[#2c2740] sm:text-base">Curious by nature. Builder by heart.</p>
              </div>
            </div>
            <div className="absolute right-0 top-5 z-10 rotate-3 rounded-2xl bg-[#fff3c7] px-3 py-2 shadow-lg sm:-right-8 sm:bottom-14 sm:top-auto sm:px-4 sm:py-3 sm:rotate-6">
              <p className="text-[10px] font-semibold uppercase tracking-[.13em] text-[#83723c]">App Store shipped</p>
              <p className="mt-0.5 text-lg font-bold tracking-tight text-[#42381d]">5+ apps <span aria-hidden="true">↗</span></p>
            </div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute -left-36 top-12 -z-10 size-[430px] rounded-full bg-[#fff1c8]/60 blur-3xl" />
        </section>

        <section id="work" className="scroll-mt-8 border-t border-[#e7e1eb] py-16 sm:py-24">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-[#756c82]">A few recent favorites</p>
              <h2 className="text-4xl font-semibold tracking-[-.055em] sm:text-5xl">Recent work<span className="text-[#f19a76]">.</span></h2>
            </div>
            <p className="max-w-[360px] text-sm leading-6 text-muted-foreground">Thoughtful little details. Big ideas made useful. Swipe through a few things I&apos;ve helped bring to life.</p>
          </div>
          <ProjectSlider />
        </section>

        <section id="about" className="scroll-mt-8 py-12 sm:py-20">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#e8f4ed] md:grid-cols-[.8fr_1.2fr]">
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#d2ebdd] p-8 sm:min-h-[400px]">
              <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 sm:size-[380px]" />
              <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 sm:size-[300px]" />
              <div className="relative z-10 grid size-52 rotate-[-4deg] place-items-center rounded-[2.5rem] bg-[#fff8e8] shadow-[0_22px_50px_-22px_rgba(46,74,59,.34)] sm:size-64">
                <div className="grid size-36 place-items-center rounded-[2rem] bg-[#7868cb] text-6xl text-white shadow-inner sm:size-44 sm:text-7xl"><span aria-hidden="true">✳</span></div>
                <span className="absolute bottom-5 text-xs font-semibold tracking-wide text-[#71676d]">MADE WITH CARE</span>
              </div>
              <span className="absolute right-[16%] top-[18%] rotate-12 rounded-full bg-[#ffcd70] px-4 py-2 text-xs font-semibold text-[#57431f]">good things take craft</span>
            </div>
            <div className="flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14 lg:px-16">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-[#66856f]">The person behind the pixels</p>
              <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-[-.045em] sm:text-4xl">Hey, I&apos;m Ashish. I turn complicated into <span className="text-[#6856c8]">clear.</span></h2>
              <p className="mt-5 max-w-[560px] leading-7 text-[#627068]">I&apos;m an independent mobile app developer who loves pairing thoughtful design with dependable technology. I work closely with founders and small teams to make products that feel effortless to use—and are built to last.</p>
              <p className="mt-4 max-w-[560px] leading-7 text-[#627068]">When I&apos;m not deep in a build, you&apos;ll find me looking for a new tea spot, collecting ideas on long walks, or testing an app that should probably still be in beta.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['Swift', 'React Native', 'Flutter', 'Product thinking', 'Design systems'].map((tag) => <span key={tag} className="rounded-full border border-[#cce1d3] bg-white/65 px-3 py-1.5 text-xs font-medium text-[#5b7161]">{tag}</span>)}
              </div>
              <a href="#contact" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#4d6a57] hover:text-[#6856c8]">More about working together <ArrowRight aria-hidden="true" className="size-4" /></a>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-8 py-16 sm:py-24">
          <div className="grid gap-10 rounded-[2rem] bg-[#f1edff] p-6 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:p-14">
            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-[#756c82]">Have something in mind?</p>
                <h2 className="max-w-md text-4xl font-semibold leading-[1.05] tracking-[-.06em] sm:text-5xl">Let&apos;s make a little <span className="text-[#6856c8]">magic.</span></h2>
                <p className="mt-5 max-w-sm leading-7 text-[#746d84]">Have a product idea, a tricky problem, or just want to say hello? My inbox is open.</p>
              </div>
              <div className="rounded-2xl border border-white/80 bg-white/55 p-5">
                <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#817a8e]">Prefer email?</p>
                <a href="mailto:iosdeveloperashish@gmail.com" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#4a3d9c]">iosdeveloperashish@gmail.com <ArrowUpRight aria-hidden="true" className="size-4" /></a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-[#e7e1eb] py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ashish Viltoriya. Made with care (and too much tea).</p>
          <div className="flex flex-wrap gap-5"><a className="hover:text-foreground" href="https://github.com/iosdeveloperashish" target="_blank" rel="noreferrer">GitHub profile search</a><a className="hover:text-foreground" href="#home">Back to top ↑</a><a className="hover:text-foreground" href="mailto:iosdeveloperashish@gmail.com">Email me</a></div>
        </footer>
      </div>
    </main>
  )
}
