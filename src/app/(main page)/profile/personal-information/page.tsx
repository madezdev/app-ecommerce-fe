'use client'
import { useState } from 'react'
import { Title } from '@/components/ui/font-style/title'
import { paragraph, titleFont } from '@/config/fonts'
import { useInput } from '@/hooks/useInput'
import Button from '@/components/ui/button/button'
import { BtnVolver } from '@/components/ui/btn-volver/btnVolver'
import { validateBirthdate, validateCuit, validatePhone, validateUserId } from '@/utils/validations-inputs'

export default function PersonalInformationPage () {
  const cuit = useInput('20304962047', validateCuit)
  const userId = useInput('30406204', validateUserId)
  const birthdate = useInput('1993-06-04', validateBirthdate)
  const phone = useInput('1123456789', validatePhone)
  const [editingField, setEditingField] = useState<string | null>(null)

  const handleEditClick = (field: string) => {
    setEditingField(field)
  }

  const handleSaveClick = () => {
    setEditingField(null)
  }

  const name = 'Ricardo Martin Florea'
  const lastname = 'Hernandez'
  const email = 'madezdev@gmail.com'

  return (
    <div className='max-w-[1000px] mx-auto px-4 md:px-8 mt-[160px] flex flex-col min-h-[calc(100vh-160px)]'>
      <div className='flex flex-col gap-8 w-full mb-8'>
        <BtnVolver path='profile'/>
        <Title title='Información personal' />
        <div className='flex flex-col gap-4 bg-nwhite p-4 rounded-md shadow-md'>
          {/* Nombre y Apellido */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>Nombre y apellido</p>
            <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{name} {lastname}</span>
          </div>

          {/* Correo Electrónico */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>Correo electrónico</p>
            <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{email}</span>
          </div>

          {/* Teléfono */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>Teléfono</p>
            {editingField === 'phone' ? (
              <div className='flex items-center justify-between gap-2'>
                <input type='number' {...phone} className='w-full p-2 text-[16px] border border-sgray rounded-md' />
                <Button onClick={handleSaveClick} variant='action' >
                  Guardar
                </Button>
              </div>
            ) : (
              <div className='flex items-center justify-between gap-2'>
                <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{phone.value}</span>
                <button onClick={() => handleEditClick('phone')} className='bg-sgray text-sblue/50 hover:scale-105 hover:text-sblue transition-all delay-150 ease-in-out px-3 py-1 rounded-md text-sm'>
                  Editar
                </button>
              </div>
            )}
          </div>

          {/* CUIT */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>CUIT</p>
            {editingField === 'cuit' ? (
              <div className='flex items-center justify-between gap-2'>
                <input type='number' {...cuit} className='w-full p-2 text-[16px] border border-sgray rounded-md' />
                <Button onClick={handleSaveClick} variant='action' >
                  Guardar
                </Button>
              </div>
            ) : (
              <div className='flex items-center justify-between gap-2'>
                <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{cuit.value}</span>
                <button onClick={() => handleEditClick('cuit')} className='bg-sgray text-sblue/50 hover:scale-105 hover:text-sblue transition-all delay-150 ease-in-out px-3 py-1 rounded-md text-sm'>
                  Editar
                </button>
              </div>
            )}
          </div>

          {/* DNI */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>DNI</p>
            {editingField === 'userId' ? (
              <div className='flex items-center justify-between gap-2'>
                <input type='number' {...userId} className='w-full p-2 border border-sgray rounded-md' />
                <Button onClick={handleSaveClick} variant='action'>
                  Guardar
                </Button>
              </div>
            ) : (
              <div className='flex items-center justify-between gap-2'>
                <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{userId.value}</span>
                <button onClick={() => handleEditClick('userId')} className='bg-sgray  text-sblue/50 hover:scale-105 hover:text-sblue transition-all delay-150 ease-in-out px-3 py-1 rounded-md text-sm'>
                  Editar
                </button>
              </div>
            )}
          </div>

          {/* Fecha de Nacimiento */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>Fecha de Nacimiento</p>
            {editingField === 'birthdate' ? (
              <div className='flex items-center justify-between gap-2'>
                <input type='date' {...birthdate} className='w-full p-2 border border-sgray rounded-md' />
                <Button onClick={handleSaveClick} variant='action'>
                  Guardar
                </Button>
              </div>
            ) : (
              <div className='flex items-center justify-between gap-2'>
                <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{birthdate.value}</span>
                <button onClick={() => handleEditClick('birthdate')} className='bg-sgray  text-sblue/50 hover:scale-105 hover:text-sblue transition-all delay-150 ease-in-out px-3 py-1 rounded-md text-sm'>
                  Editar
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
