'use client'
import React, { useEffect, useRef } from 'react'
import { ItemSolution } from './itemSolution'
import Image from 'next/image'

export const SolutionHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => console.error('Error reproduciendo el video:', error))
    }
  }, [])
  return (

    <div className="grid grid-cols-1 grid-rows-7 md:grid-cols-3 md:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4 gap-4 justify-center items-center w-full">
      <div className="col-start-1 row-start-1 col-span-1 row-span-1 md:col-span-3 md:row-span-1 xl:col-span-2 xl:row-span-2 xl:col-start-2 xl:row-start-1 rounded-xl h-[240px] relative">
        <video
          src="video/Astronergy.mp4"
          autoPlay
          loop
          muted
          playsInline
          ref={videoRef}
          className="w-full h-[240px] object-cover object-center rounded-xl"
        ></video>

        {/* Contenedor del logo centrado */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className='flex justify-center items-center w-[280px] h-[86px] ml-4 lg:ml-0 bg-nwhite rounded-full shadow-lg'>
            <Image
              src='/images/logo.png'
              width={240}
              height={240}
              alt='Mercado Solar'
            />
          </div>
        </div>
      </div>
      <div className="xl:row-span-2 xl:col-start-1 xl:row-start-1 justify-self-center">
        <ItemSolution
          title="Podes almacenar tu energía"
          description="Guarda el excedente de energía solar y úsalo cuando más lo necesites, garantizando suministro continuo y ahorro."
          img="/images/svg/battery.svg"
        />
      </div>
      <div className="xl:row-span-2 xl:col-start-1 xl:row-start-3 justify-self-center">
        <ItemSolution
          title="Alto retorno de la inversión"
          description="Recupera tu inversión rápidamente con energía solar confiable y de bajo mantenimiento."
          img="/images/svg/return.svg"
        />
      </div>
      <div className="xl:row-span-2 xl:col-start-2 xl:row-start-3 justify-self-center">
        <ItemSolution
          title="Ahorro en la factura de energía"
          description="Reduce tus gastos en electricidad aprovechando la energía solar y beneficiándote de tarifas más económicas."
          img="/images/svg/panel-solar.svg"
        />
      </div>
      <div className="xl:row-span-2 xl:col-start-3 xl:row-start-3 justify-self-center">
        <ItemSolution
          title="Soluciones para comercios"
          description="Optimiza el consumo energético de tu empresa con sistemas solares adaptados a tus necesidades y demanda."
          img="/images/svg/industry-solar.svg"
        />
      </div>
      <div className="xl:row-span-2 xl:col-start-4 xl:row-start-3 justify-self-center">
        <ItemSolution
          title="Soluciones para hogares"
          description="Energía limpia y accesible para tu hogar, garantizando independencia energética y menor impacto ambiental."
          img="/images/svg/comercial-solar.svg"
        />
      </div>
      <div className="xl:row-span-2 xl:col-start-4 xl:row-start-1 justify-self-center">
        <ItemSolution
          title="Energía solar fotovoltaica"
          description="Convierte la luz solar en electricidad limpia y renovable para alimentar tu hogar o negocio de manera sostenible."
          img="/images/svg/panel-solar-2.svg"
        />
      </div>

    </div>

  )
}
