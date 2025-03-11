import { Avatar } from '@/components/ui/avatar'
import { BtnVolver } from '@/components/ui/btn-volver/btnVolver'
import { RowLink } from '@/components/ui/row-link/rowLink'
import { paragraph, titleFont } from '@/config/fonts'
import { LiaIdCardSolid } from 'react-icons/lia'
import { PiMapPinLineLight } from 'react-icons/pi'

export default function ProfilePage () {
  const name = 'Martin'
  const lastname = 'Hernandez'
  const email = 'madezdev@gmail.com'
  return (
    <section className='max-w-[1000px] mx-auto px-4 md:px-8 mt-[160px] flex flex-col min-h-[calc(100vh-160px)]'>
      <BtnVolver path=''/>
      <article className='flex gap-8 p-4 max-w-[1000px] mb-8'>
        <Avatar
          name={name}
          lastname={lastname}
          radius={30}
        />
        <div>
          <p className={`${titleFont.className} text-sblue text-[20px] font-medium`}>{name} {lastname}</p>
          <p className={`${paragraph.className} text-sblue text-[16px]`}>{email}</p>
        </div>
      </article>
      <article className='w-full max-w-[1000px] flex flex-col gap-4'>
        <RowLink
          title='Información personal'
          description='Actualiza tus datos personales'
          path='/profile/personal-information'
          icon={<LiaIdCardSolid  size={40} color='#1E3A5F'/>}
        />
        <RowLink
          title='Direcciones'
          description='Administra tus direcciones de envío'
          path='/profile/address'
          icon={<PiMapPinLineLight  size={40} color='#1E3A5F'/>}
        />
      </article>
    </section>
  )
}