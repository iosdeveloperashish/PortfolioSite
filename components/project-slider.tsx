'use client'

import { useRef } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

const projects = [
  { number: '01', name: 'Morrow', type: 'Mindful wellness', description: 'A softer way to build a daily mindfulness habit.', tone: 'morrow', labels: ['iOS', 'Product design'] },
  { number: '02', name: 'Good Food Club', type: 'Food & community', description: 'Discover your next favorite neighborhood table.', tone: 'food', labels: ['React Native', 'Android'] },
  { number: '03', name: 'Wanderly', type: 'Travel companion', description: 'Little local discoveries, all in one pocket-sized guide.', tone: 'wander', labels: ['iOS', 'Maps'] },
  { number: '04', name: 'Pocketwise', type: 'Personal finance', description: 'Make money feel a little less complicated.', tone: 'pocket', labels: ['Fintech', 'Flutter'] },
]

function AppArtwork({ tone }: { tone: string }) {
  if (tone === 'morrow') return (
    <div className="art-morrow flex h-full items-center justify-center p-5 sm:p-8">
      <div className="phone-frame -rotate-3"><div className="phone-island" /><div className="flex h-full flex-col items-center px-4 pt-10 text-center"><span className="text-[9px] font-semibold uppercase tracking-[.17em] text-[#4d5b43]">MORROW</span><div className="mt-5 grid size-24 place-items-center rounded-full bg-[#f6c98b]"><span className="text-4xl" aria-hidden="true">☼</span></div><p className="mt-5 text-[11px] font-semibold text-[#334133]">Take a moment<br />for yourself.</p><div className="mt-4 w-full rounded-full bg-[#4d6749] py-2 text-[8px] font-semibold text-white">Begin your day</div><div className="mt-4 h-1 w-16 rounded-full bg-[#e5ded2]" /></div></div>
      <div className="absolute right-5 top-6 rotate-6 rounded-full bg-white/80 px-3 py-2 text-[10px] font-semibold text-[#53644a] shadow-sm">breathe in ✳</div>
    </div>
  )
  if (tone === 'food') return (
    <div className="art-food flex h-full items-center justify-center p-5 sm:p-8">
      <div className="phone-frame rotate-3"><div className="phone-island" /><div className="px-3 pt-9"><div className="flex items-center justify-between text-[8px] font-semibold"><span>12:08</span><span>•••</span></div><p className="mt-5 text-[13px] font-bold leading-tight text-[#342b25]">Good afternoon,<br />Jamie <span aria-hidden="true">✳</span></p><div className="mt-3 h-20 rounded-xl bg-[linear-gradient(135deg,#f8b86a,#f07c5a_52%,#b85b43)] p-2"><span className="rounded-full bg-white/80 px-2 py-1 text-[7px] font-semibold">THIS WEEK</span><p className="mt-5 text-[9px] font-bold text-white">A table worth sharing</p></div><p className="mt-3 text-[8px] font-bold text-[#473c34]">Near you</p><div className="mt-2 flex gap-2"><div className="h-14 flex-1 rounded-lg bg-[#d7a072]"/><div className="h-14 flex-1 rounded-lg bg-[#a4b080]"/></div><div className="mt-3 flex justify-around text-[8px] text-[#8a8179]">⌂　⌕　♡　◉</div></div></div>
      <span className="absolute bottom-7 left-5 -rotate-6 rounded-xl bg-[#ffdf9c] px-3 py-2 text-[10px] font-semibold text-[#6d5131] shadow-sm">made for sharing</span>
    </div>
  )
  if (tone === 'wander') return (
    <div className="art-wander flex h-full items-center justify-center p-5 sm:p-8">
      <div className="phone-frame -rotate-2"><div className="phone-island" /><div className="px-3 pt-9"><div className="flex items-center justify-between text-[8px] font-semibold text-[#334048]"><span>WANDERLY</span><span>◉</span></div><div className="mt-4 h-28 rounded-xl bg-[linear-gradient(165deg,#e8b56f_0%,#eee0bf_42%,#96a99a_43%,#567a70_100%)] p-2"><span className="rounded-full bg-white/80 px-2 py-1 text-[7px]">PORTO, PORTUGAL</span></div><p className="mt-3 text-[11px] font-bold text-[#293b3b]">A slower kind<br />of Saturday.</p><div className="mt-2 flex items-center gap-2 rounded-lg bg-[#edf2ea] p-2"><span className="grid size-6 place-items-center rounded-full bg-[#d3e1d4] text-[10px]">✦</span><div><p className="text-[7px] font-semibold">Garden coffee</p><p className="text-[6px] text-[#88958c]">A local favorite · 8 min</p></div></div><div className="mt-3 h-1 w-16 rounded-full bg-[#e5e9e2] mx-auto" /></div></div>
      <span className="absolute right-5 top-7 rotate-6 rounded-full bg-white/80 px-3 py-2 text-[10px] font-semibold text-[#486859] shadow-sm">take the scenic route</span>
    </div>
  )
  return (
    <div className="art-pocket flex h-full items-center justify-center p-5 sm:p-8">
      <div className="phone-frame rotate-3"><div className="phone-island" /><div className="px-3 pt-9"><div className="flex items-center justify-between text-[8px] font-semibold"><span>POCKETWISE</span><span>•••</span></div><p className="mt-4 text-[8px] text-[#e9eee5]">YOUR BALANCE</p><p className="mt-1 text-[19px] font-bold tracking-tight text-white">$4,280<span className="text-[9px]">.50</span></p><div className="mt-3 flex h-12 items-end gap-1 rounded-lg bg-white/10 px-2 pb-2"><span className="h-3 flex-1 rounded-t bg-[#b6d3bd]"/><span className="h-5 flex-1 rounded-t bg-[#b6d3bd]"/><span className="h-4 flex-1 rounded-t bg-[#b6d3bd]"/><span className="h-7 flex-1 rounded-t bg-[#e8ca7a]"/><span className="h-6 flex-1 rounded-t bg-[#b6d3bd]"/><span className="h-9 flex-1 rounded-t bg-[#e8ca7a]"/></div><p className="mt-3 text-[8px] font-semibold text-white">Recent activity</p><div className="mt-2 flex items-center justify-between rounded-lg bg-white/10 p-2"><span className="text-[8px]">☕ Coffee shop</span><span className="text-[8px]">−$4.80</span></div><div className="mt-2 flex items-center justify-between rounded-lg bg-white/10 p-2"><span className="text-[8px]">↗ Freelance</span><span className="text-[8px]">+$850</span></div></div></div>
      <span className="absolute bottom-6 right-5 -rotate-6 rounded-xl bg-[#e1f0ce] px-3 py-2 text-[10px] font-semibold text-[#405943] shadow-sm">money, made simple</span>
    </div>
  )
}

export default function ProjectSlider() {
  const trackRef = useRef<HTMLDivElement>(null)
  const scroll = (direction: number) => trackRef.current?.scrollBy({ left: direction * trackRef.current.clientWidth * 0.78, behavior: 'smooth' })

  return (
    <div>
      <div className="mb-5 flex justify-end gap-2">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous projects" className="grid size-11 place-items-center rounded-full border border-border bg-white text-foreground transition-all hover:-translate-y-0.5 hover:bg-[#f1edff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><ArrowLeft className="size-4" /></button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next projects" className="grid size-11 place-items-center rounded-full border border-border bg-white text-foreground transition-all hover:-translate-y-0.5 hover:bg-[#f1edff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><ArrowRight className="size-4" /></button>
      </div>
      <div ref={trackRef} className="project-track flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4" aria-label="Project portfolio" tabIndex={0}>
        {projects.map((project) => (
          <article key={project.name} className="group w-[86%] shrink-0 snap-start sm:w-[55%] lg:w-[calc((100%-2.5rem)/3)]">
            <div className="relative h-[310px] overflow-hidden rounded-[1.7rem] sm:h-[360px]">
              <AppArtwork tone={project.tone} />
              <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.12em] text-[#60596e] backdrop-blur">{project.type}</span>
              <a href={`https://github.com/search?q=${encodeURIComponent(project.name)}&type=repositories`} target="_blank" rel="noreferrer" aria-label={`Search GitHub repositories for ${project.name}`} className="absolute bottom-4 right-4 grid size-10 translate-y-2 place-items-center rounded-full bg-white text-foreground opacity-0 shadow-lg transition-all group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"><ArrowUpRight className="size-4" /></a>
            </div>
            <div className="flex items-start justify-between gap-4 px-1 pt-4">
              <div><p className="text-xs font-medium text-muted-foreground">{project.number} / {project.type}</p><h3 className="mt-1 text-xl font-semibold tracking-tight">{project.name}</h3><p className="mt-1 max-w-[300px] text-sm leading-6 text-muted-foreground">{project.description}</p></div>
              <div className="mt-1 flex max-w-[120px] flex-wrap justify-end gap-1.5">{project.labels.map((label) => <span key={label} className="rounded-full bg-[#f0edf5] px-2.5 py-1 text-[10px] font-medium text-[#746c80]">{label}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-1 text-center text-xs text-muted-foreground sm:hidden">Swipe to explore more projects →</p>
    </div>
  )
}
