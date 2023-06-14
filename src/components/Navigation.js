import { useState } from 'react';
import { SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import { Dialog } from '@headlessui/react';
import { MenuIcon as Bars3Icon, XIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Women', href: '/women' },
  { name: 'Men', href: '/men' },
  { name: 'Our Story', href: '/our-story' },
];

export default function Navigation({ backgroundColor }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    navigate(href);
  };

  const isDarkBackground = backgroundColor === 'white';

  return (
    <header className={`absolute inset-x-0 top-0 z-50 ${backgroundColor}`}>
      <nav className={`bg-opacity-0 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8`} aria-label="Global">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <span className="sr-only">iveyy</span>
              <img
                className="block h-16 w-auto"
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="iveyy"
              />
            </a>
          </div>

          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {navigation.map((item, itemIdx) => (
                <button
                  key={itemIdx}
                  onClick={() => handleNavigation(item.href)}
                  className={`text-${isDarkBackground ? 'black' : 'white'} hover:text-black px-3 py-2 rounded-md text-sm font-medium uppercase`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md text-${isDarkBackground ? 'black' : 'white'} hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:static">
            {/* Search */}
            <a href="#" className={`p-2 text-${isDarkBackground ? 'black' : 'white'} hover:text-black uppercase sm:block hidden`}>
              <SearchIcon className="h-6 w-6" aria-hidden="true" />
            </a>
            {/* Cart */}
            <div className="ml-4 flow-root sm:block hidden">
              <a href="#" className="group -m-2 p-2 flex items-center">
                <ShoppingBagIcon
                  className={`h-6 w-6 flex-shrink-0 text-${isDarkBackground ? 'black' : 'white'} group-hover:text-black`}
                  aria-hidden="true"
                />
                <span className={`ml-2 text-sm font-medium text-${isDarkBackground ? 'black' : 'white'} group-hover:text-black`}>0</span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Iveyy Clothing</span>
                <img
                  className="h-16 w-auto"
                  src={process.env.PUBLIC_URL + '/iveyy-black.png'}
                  alt="logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <button
                    onClick={() => handleNavigation('/signin')}
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </header>
  );
}
