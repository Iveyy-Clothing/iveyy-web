import { Fragment } from 'react'
import { Popover, Transition, Disclosure } from '@headlessui/react'
import { SearchIcon, ShoppingBagIcon, MenuIcon , XIcon } from '@heroicons/react/outline'


const navigation = {
  categories: [
    {
      name: 'Women',
      clothing: [
        [
          { name: 'Tops', href: '#' },
          { name: 'Dresses', href: '#' },
          { name: 'Pants', href: '#' },
          { name: 'Denim', href: '#' },
          { name: 'Sweaters', href: '#' },
          { name: 'T-Shirts', href: '#' },
        ],
        [
          { name: 'Jackets', href: '#' },
          { name: 'Activewear', href: '#' },
          { name: 'Shorts', href: '#' },
          { name: 'Swimwear', href: '#' },
          { name: 'Browse All', href: '#' },
        ],
      ],
      accessories: [
        { name: 'Shoes', href: '#' },
        { name: 'Jewelry', href: '#' },
        { name: 'Handbags', href: '#' },
        { name: 'Socks', href: '#' },
        { name: 'Hats', href: '#' },
        { name: 'Browse All', href: '#' },
      ],
      categories: [
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
      ],
    },
    {
      name: 'Men',
      clothing: [
        [
          { name: 'Dress Shirts', href: '#' },
          { name: 'Pants', href: '#' },
          { name: 'Jackets', href: '#' },
          { name: 'T-Shirts', href: '#' },
          { name: 'Jeans', href: '#' },
          { name: 'Hoodies', href: '#' },
        ],
        [
          { name: 'Vests', href: '#' },
          { name: 'Kilts', href: '#' },
          { name: 'Outdoors', href: '#' },
          { name: 'Capes', href: '#' },
          { name: 'Browse All', href: '#' },
        ],
      ],
      accessories: [
        { name: 'Watches', href: '#' },
        { name: 'Boots', href: '#' },
        { name: 'Fanny Packs', href: '#' },
        { name: 'Sunglasses', href: '#' },
        { name: 'Browse All', href: '#' },
      ],
      categories: [
        { name: 'Just Added', href: '#' },
        { name: 'Clearance', href: '#' },
        { name: 'Graphic Tees', href: '#' },
      ],
    },
  ],
  other: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

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
                    <span className="sr-only">Iveyy Clothing</span>
                    <img
                      className="h-16 w-auto"
                      src={process.env.PUBLIC_URL + '/logo.png'}
                      alt="logo"
                    />
                  </a>
                </div>
  
                {/* Flyout menus */}
                <Popover.Group className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                  <div className="flex h-14 space-x-8 overflow-x-auto border-t px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                    {navigation.categories.map((category, categoryIdx) => (
                      <Popover key={categoryIdx} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                            <Popover.Button
                                className={classNames(
                                open ? 'border-black font-light uppercase' : 'border-transparent text-white hover:text-black uppercase',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm transition-colors duration-200 ease-out'
                                )}
                            >
                                {category.name}
                            </Popover.Button>


                            </div>
  
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-white sm:text-sm">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
  
                                <div className="relative bg-white">
                                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                    <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 pb-12 pt-10 md:grid-cols-2 lg:gap-x-8">
                                      <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-x-8">
                                        <div>
                                        <p id="clothing-heading" className="font-light text-white uppercase">
                                            Clothing
                                        </p>
                                          <div className="mt-4 border-t border-white pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                            <ul
                                              role="list"
                                              aria-labelledby="clothing-heading"
                                              className="space-y-6 sm:space-y-4"
                                            >
                                              {category.clothing[0].map((item) => (
                                                <li key={item.name} className="flex">
                                                  <a href={item.href} className="hover:text-black">
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                            <ul
                                              role="list"
                                              aria-label="More clothing"
                                              className="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                            >
                                              {category.clothing[1].map((item) => (
                                                <li key={item.name} className="flex">
                                                  <a href={item.href} className="hover:text-black">
                                                    {item.name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
                                        <div>
                                        <p id="accessories-heading" className="font-light text-white uppercase">
                                            Accessories
                                        </p>
                                          <ul
                                            role="list"
                                            aria-labelledby="accessories-heading"
                                            className="mt-4 space-y-6 border-t border-white pt-6 sm:space-y-4"
                                          >
                                            {category.accessories.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-black">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                        <div>
                                        <p id="categories-heading" className="font-light text-white uppercase">
                                            Categories
                                        </p>
                                          <ul
                                            role="list"
                                            aria-labelledby="categories-heading"
                                            className="mt-4 space-y-6 border-t border-white pt-6 sm:space-y-4"
                                          >
                                            {category.categories.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-black uppercase font-light">
                                                    {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}
  
                    {navigation.other.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center text-sm font-light text-white hover:text-black uppercase"
                        >
                        {item.name}
                        </a>
                    ))}
                  </div>
                </Popover.Group>
  
                <div className="flex flex-1 items-center justify-end">
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
  
