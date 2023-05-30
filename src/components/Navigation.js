import { Fragment } from 'react'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import { SearchIcon, ShoppingBagIcon, MenuIcon , XIcon } from '@heroicons/react/outline'


const navigation = [
  { name: 'Women', href: '#' },
  { name: 'Men', href: '#' },
  { name: 'Our Story', href: '#' },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navigation() {
    return (
      <div className="bg-white bg-opacity-0">
          <nav aria-label="Top" className="mx-auto max-w-7xl sm:px-6 lg:px-8">

            <div className="border-b border-white px-4 pb-14 sm:px-0 sm:pb-0">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex flex-1">
                  <a href="/">
                    <span className="sr-only">iveyy Clothing</span>
                    <img
                      className="h-16 w-auto"
                      src={process.env.PUBLIC_URL + '/logo.png'}
                      alt="logo"
                    />
                  </a>
                </div>
  
                {/* Navigation */}
                <div className="flex flex-1 items-center justify-end">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="mx-3 text-sm font-light text-white hover:text-black uppercase"
                      >
                        {item.name}
                      </a>
                    ))}
                  
                  {/* Search */}
                    <a href="#" className="p-2 text-white hover:text-black uppercase font-light">
                        <span className="sr-only">Search</span>
                        <SearchIcon className="h-6 w-6" aria-hidden="true" />
                    </a>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-8">
                    <a href="#" className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-white group-hover:text-black"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-white group-hover:text-black">0</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
      </div>
    )
  }

  
