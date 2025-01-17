'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarItem = ({ title, href }: { title: string; href: string }) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`block py-2 pl-3 pr-4 rounded md:border-0 ${pathname === href ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:px-5 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:px-5 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
        aria-current={pathname === href ? 'page' : undefined}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavbarItem;
