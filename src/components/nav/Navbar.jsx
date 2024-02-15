import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import './nav.css'

const Navbar = () => {
  const location = useLocation();
  const active = 'text-lg font-bold px-6 p-y-3 bg-green-400 rounded-md';
  const [mobile, setMobile] = useState(false);
  const inActive = 'text-lg font-bold px-6 p-y-3 hover:text-slate-900';
  return (
    <div style={{ marginTop: '150px', zIndex: '9999' }}>
      <header className=" mx-auto bg-white max-w-7xl boder-b  top-0 z-50">
        <nav className='flex items-center justify-between p-4 md:p-6 lg:px-8'>
        <div>
          <a href='/' className='flex py-3 px-6 item-center gap-1 text-lg font-mono fonto-bold shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg mr-3'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" >
  <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
</svg>
          Farm-Soft
          </a>
        </div>
        <div className='flex md:hidden'>
          <button className='-m-2 5 p-2.5 text-gray-900  inline-flex justify-center rounded-md hover:text-green-400'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" onClick={()=>setMobile(true)}>
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
</svg>

          </button>
        </div>
        <div className='hidden md:flex md:space-x-8'>
          <ul className='flex space-x-8'>
            <li>
              <a href='/' className={`${location.pathname === '/' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Home
              </a>
            </li>
            <li>
              <a href='/about' className={`${location.pathname === '/about' ? active : inActive} hover:border-b-2  border-green-400 transition-all duration-300 ease-in-ou`}>
                About
              </a>
            </li>
            <li>
              <a href='/products'className={`${location.pathname === '/product' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Products
              </a>
            </li>
            <li>
              <a href='/markets' className={`${location.pathname === '/markets' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Markets
              </a>
            </li>
            <li>
              <a href='/dashboard' className={`${location.pathname === '/dashboard' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                dashboard
              </a>
            </li>
            <li>
              <a href='/contact' className={`${location.pathname === '/contact' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a href='/login' className='hidden md:block items-center justify-center px-4 py-2 text-lg font-mono font-medium text-white bg-green-400 rounded-md hover:bg-green-500'>Login</a>

        </nav>
        <Dialog as='div' className={'md:hidden'} open={mobile} onClose={setMobile}>
            <div className='fixed inset-0 z-50 bg-gray-50 bg-opacity-80'/>
            <Dialog.Panel className='fixed inset-y-0 right-0 z-50 overlay-y-auto bg-gray-50 bg-opacity-80 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-text/10'>
              <div className='flex justify-between'>
              <a href='/' className='flex py-3 px-6 item-center gap-1 text-lg font-mono fonto-bold shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none rounded-lg mr-3'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" >
  <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
</svg>

          Buy-Local
          </a>
                <button className='-m-2 5 p-2.5 text-gray-900  inline-flex justify-center rounded-md hover:text-green-400'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" onClick={()=>setMobile(false)}>
  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
</svg>


                    </button>
                </div>
                <div className='mt-6 flow-root'>
                   <div className='-my-2 divide-y divide-gray-500/50'>
                   <ul className='space-y-10'>
            <li>
              <a href='/' className={`${location.pathname === '/' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Home
              </a>
            </li>
            <li>
              <a href='/about' className={`${location.pathname === '/about' ? active : inActive} hover:border-b-2  border-green-400 transition-all duration-300 ease-in-ou`}>
                About
              </a>
            </li>
            <li>
              <a href='/products'className={`${location.pathname === '/product' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Products
              </a>
            </li>
            <li>
              <a href='/markets' className={`${location.pathname === '/markets' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Markets
              </a>
            </li>
            <li>
              <a href='/dashboard' className={`${location.pathname === '/dashboard' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                dashboard
              </a>
            </li>
            <li>
              <a href='/contact' className={`${location.pathname === '/contact' ? active : inActive} hover:border-b-2 border-green-400 transition-all duration-300 ease-in-ou`}>
                Contact
              </a>
            </li>
          </ul>
          <div className='py-6'>
          <a href='/login' className='block w-full md:block items-center justify-center px-4 py-2 text-lg font-mono font-medium text-white bg-green-400 rounded-md hover:bg-green-500'>Login</a>
          </div>
                   </div>
                </div>
              

            </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}

export default Navbar
