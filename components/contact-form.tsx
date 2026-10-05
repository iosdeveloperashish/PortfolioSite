'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Project enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:iosdeveloperashish@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-[0_16px_50px_-34px_rgba(58,46,104,.35)] backdrop-blur sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs font-semibold text-[#615b70]">Your name
          <input required autoComplete="name" name="name" placeholder="Jamie Parker" className="h-12 rounded-xl border border-[#e7e2ee] bg-white px-4 text-sm font-normal text-foreground outline-none transition focus:border-[#8d7cdd] focus:ring-4 focus:ring-[#8d7cdd]/15" />
        </label>
        <label className="grid gap-2 text-xs font-semibold text-[#615b70]">Email address
          <input required type="email" autoComplete="email" name="email" placeholder="jamie@email.com" className="h-12 rounded-xl border border-[#e7e2ee] bg-white px-4 text-sm font-normal text-foreground outline-none transition focus:border-[#8d7cdd] focus:ring-4 focus:ring-[#8d7cdd]/15" />
        </label>
        <label className="grid gap-2 text-xs font-semibold text-[#615b70] sm:col-span-2">A little about your project
          <textarea required name="message" rows={4} placeholder="What are you dreaming up?" className="resize-y rounded-xl border border-[#e7e2ee] bg-white px-4 py-3 text-sm font-normal text-foreground outline-none transition focus:border-[#8d7cdd] focus:ring-4 focus:ring-[#8d7cdd]/15" />
        </label>
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-[#6856c8] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[#6856c8]/20 transition-all hover:-translate-y-0.5 hover:bg-[#5746b1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6856c8]">
          Send a note <ArrowUpRight aria-hidden="true" className="size-4" />
        </button>
        <p aria-live="polite" className="text-xs leading-5 text-muted-foreground">{submitted ? <><Check aria-hidden="true" className="mr-1 inline size-3 text-[#53834e]" />Your email app should open with your note.</> : 'Usually replies within one or two working days.'}</p>
      </div>
    </form>
  )
}
