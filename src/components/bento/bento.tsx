'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { BentoItem } from './bentoItem'

export const Bento = () => {

  useEffect(() => {
    const backgrounds = document.querySelectorAll('.background') as NodeListOf<HTMLElement>

    if (!window.IntersectionObserver) {
      backgrounds.forEach((bkg) => {
        bkg.style.backgroundImage = `url('${bkg.dataset.src}')`
      })
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          target.style.backgroundImage = `url('${target.dataset.src}')`
          observer.unobserve(target)
        }
      })
    }, { rootMargin: '100px' })

    backgrounds.forEach((bkg) => observer.observe(bkg))
  }, [])

  return (
    <section className="w-full  grid lg:grid-cols-10 auto-rows-[20rem] gap-4 mx-auto px-10 ">
      <BentoItem className="col-span-10 lg:col-span-4" title="Climatización" subtitle={'Sistemas solares eficientes para climatización de piscinas.'} imageSlot={'/images/svg/climatizacion.svg'} >
        <Image
          src="/images/img/portada-climatizacion.webp"
          alt="Sistemas solares eficientes para climatización de piscinas."
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="background transition-scale absolute bottom-0 left-0 top-0 -z-10 h-full w-full bg-blue-950 bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110"
        />
        <p className="max-w-xl text-base md:text-lg" />
      </BentoItem>

      <BentoItem className="col-span-10 lg:col-span-6" title="Energía renovable" subtitle="Transforma tu energía con opciones limpias y sostenibles." imageSlot={'/images/svg/energia.svg'}>
        <Image
          src="/images/img/portada-energiaRenovable.webp"
          alt="Transforma tu energía con opciones limpias y sostenibles."
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="background transition-scale absolute bottom-0 left-0 top-0 -z-10 h-full w-full bg-blue-950 bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110"
        />
        <p className="max-w-xl text-base md:text-lg" />
      </BentoItem>

      <BentoItem className="col-span-10 lg:col-span-6" title="Bombas solares" subtitle="Bombas de agua solares: potencia renovable para tu hogar o campo." imageSlot={'/images/svg/bombeo.svg'}>
        <Image
          src="/images/img/portada-bombeo.webp"
          alt="Transforma tu energía con opciones limpias y sostenibles."
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="background transition-scale absolute bottom-0 left-0 top-0 -z-10 h-full w-full bg-blue-950 bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110"
        />
        <p className="max-w-xl text-base md:text-lg"/>
      </BentoItem>

      <BentoItem className="col-span-10 lg:col-span-4" title="Termotanques solares" subtitle="Aprovecha el sol para disfrutar de agua caliente sin costos adicionales." imageSlot={'/images/svg/termotanque.svg'}>
        <Image
          src="/images/img/portada-termotanque.webp"
          alt="Transforma tu energía con opciones limpias y sostenibles."
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="background transition-scale absolute bottom-0 left-0 top-0 -z-10 h-full w-full bg-blue-950 bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity duration-1000 ease-in-out group-hover:scale-110"
        />
        <p className="max-w-xl text-base md:text-lg" />
      </BentoItem>
    </section>
  )
}
