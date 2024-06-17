//rafce para crerar la estructurta determinada
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div >
      <section>
        <nav className='flex bg-slate-900 items center justify-between '>

          <div className='flex h-10vh justify-between z-50 text-white lg:py-5 px20 py-4'> {/**division GEnreral */}
            <div className='flex items-center flex-1'>{/**division Logo */}
              <span className=' font-bold'>LOGO</span>
            </div>

            <div className='  lg:flex md:flex lg: flex-1 items center justify-center font-semibold hidden'>{/**division Menus */}              <div className='flex-10 justify-center'>{/**division Menu centrral */}
                <ul className='flex'>
                  <Link href={''}>
                    <li className='hover:bg-slate-700'>Soy Nuevo</li>
                  </Link>

                  <Link href={''}>
                    <li className='hover:bg-slate-700' >Ministerios</li>
                  </Link>

                  <Link href={''}>
                    <li className='hover:bg-slate-700'>Quienes Somos?</li>
                  </Link>

                  <Link href={''}>
                    <li className='hover:bg-slate-700'>Necestas Ayuda?</li>
                  </Link>

                  <Link href={''}>
                    <li className='hover:bg-slate-700'>Donativo</li>
                  </Link>
                </ul>

              </div>
              <div className=' lg:flex md:flex lg: flex-1 items center justify-end font-semibold hidden'>{/**division Casa rescate */}
                <ul>
                  <Link href={''}>
                    <li className='hover:bg-slate-700'>Casa recate</li>
                  </Link>
                </ul>

              </div>

            </div>

          </div>


        </nav>

      </section>
      <div>main section</div>
      <div>second section</div>
      <div>third section</div>
      <div>fouirth section</div>
      <div>Footer</div>
    </div>
  )
}

export default page