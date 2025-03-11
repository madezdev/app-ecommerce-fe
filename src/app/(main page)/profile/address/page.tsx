'use client'
import { useState } from 'react'
import { BtnVolver } from '@/components/ui/btn-volver/btnVolver'
import Button from '@/components/ui/button/button'
import { Title } from '@/components/ui/font-style/title'
import { paragraph, titleFont } from '@/config/fonts'
import { useInput } from '@/hooks/useInput'
import { states } from '@/constants/states'
import { validateCity, validatePostalCode, validateStreet, validateStreetNumber } from '@/utils/validations-inputs'

export default function AddressPage () {
  const streetValue = useInput('Monseñor Pablo Cabrera', validateStreet)
  const streetNumberValue = useInput('4800', validateStreetNumber)
  const cityValue = useInput('Villa Carlos Paz', validateCity)
  const postalCodeValue = useInput('5000', validatePostalCode)
  const [editingField, setEditingField] = useState<string | null>(null)
  const [state, setState] = useState('Córdoba') // 'Córdoba' como valor por defecto

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value)
  }

  const handleEditClick = (field: string) => {
    setEditingField(field)
  }

  const handleSaveClick = () => {
    setEditingField(null)
  }

  return (
    <div className='max-w-[1000px] mx-auto px-4 md:px-8 mt-[160px] flex flex-col min-h-[calc(100vh-160px)]'>
      <div className='flex flex-col gap-8 w-full mb-8'>
        <BtnVolver path='profile'/>
        <Title title='Datos de envío' />
        <div className='flex flex-col gap-4 bg-nwhite p-4 rounded-md shadow-md'>

          {/* Calle */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>Calle</p>
            {editingField === 'streetValue' ? (
              <div className='flex items-center justify-between gap-2'>
                <input type='text' {...streetValue} placeholder='Nombre de la calle' className='w-full p-2 text-[16px] border border-sgray rounded-md' />
                <Button onClick={handleSaveClick} variant='action'>Guardar</Button>
              </div>
            ) : (
              <div className='flex items-center justify-between gap-2'>
                <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{streetValue.value}</span>
                <button onClick={() => handleEditClick('streetValue')} className='bg-sgray text-sblue/50 hover:text-sblue px-3 py-1 rounded-md text-sm'>Editar</button>
              </div>
            )}
          </div>

          {/* Número de calle */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>Altura</p>
            {editingField === 'streetNumberValue' ? (
              <div className='flex items-center justify-between gap-2'>
                <input type='number' {...streetNumberValue} className='w-full p-2 border border-sgray rounded-md' />
                <Button onClick={handleSaveClick} variant='action'>Guardar</Button>
              </div>
            ) : (
              <div className='flex items-center justify-between gap-2'>
                <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{streetNumberValue.value}</span>
                <button onClick={() => handleEditClick('streetNumberValue')} className='bg-sgray text-sblue/50 hover:text-sblue px-3 py-1 rounded-md text-sm'>Editar</button>
              </div>
            )}
          </div>

          {/* Provincia */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>Provincia</p>
            {editingField === 'state' ? (
              <div className='flex items-center justify-between gap-2'>
                <select
                  value={state}
                  onChange={handleStateChange}
                  className='w-full p-2 border border-sgray rounded-md'
                >
                  {states.map(({ id, value }) => (
                    <option key={id} value={value}>{value}</option>
                  ))}
                </select>
                <Button onClick={handleSaveClick} variant='action'>Guardar</Button>
              </div>
            ) : (
              <div className='flex items-center justify-between gap-2'>
                <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{state}</span>
                <button onClick={() => handleEditClick('state')} className='bg-sgray text-sblue/50 hover:text-sblue px-3 py-1 rounded-md text-sm'>Editar</button>
              </div>
            )}
          </div>
          {/* Localidad */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>Localidad</p>
            {editingField === 'cityValue' ? (
              <div className='flex items-center justify-between gap-2'>
                <input type='text' {...cityValue} placeholder='Nombre de la calle' className='w-full p-2 text-[16px] border border-sgray rounded-md' />
                <Button onClick={handleSaveClick} variant='action'>Guardar</Button>
              </div>
            ) : (
              <div className='flex items-center justify-between gap-2'>
                <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{cityValue.value}</span>
                <button onClick={() => handleEditClick('cityValue')} className='bg-sgray text-sblue/50 hover:text-sblue px-3 py-1 rounded-md text-sm'>Editar</button>
              </div>
            )}
          </div>
          {/* Codigo Postal */}
          <div>
            <p className={`${titleFont.className} text-sblue text-[18px] font-medium`}>Código postal</p>
            {editingField === 'postalCodeValue' ? (
              <div className='flex items-center justify-between gap-2'>
                <input type='text' {...postalCodeValue} placeholder='Nombre de la calle' className='w-full p-2 text-[16px] border border-sgray rounded-md' />
                <Button onClick={handleSaveClick} variant='action'>Guardar</Button>
              </div>
            ) : (
              <div className='flex items-center justify-between gap-2'>
                <span className={`${paragraph.className} text-sblue/80 text-[16px]`}>{postalCodeValue.value}</span>
                <button onClick={() => handleEditClick('postalCodeValue')} className='bg-sgray text-sblue/50 hover:text-sblue px-3 py-1 rounded-md text-sm'>Editar</button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
