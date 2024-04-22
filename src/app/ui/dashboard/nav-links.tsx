"use client"

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { FilmIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Inicio', href: '/dashboard', icon: HomeIcon },
  { name: 'Precios', href: '/dashboard/precios', icon: FilmIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-orange-600 md:flex-none md:justify-start md:p-2 md:px-3
            
            ${pathname === link.href ? "bg-sky-50 text-orange-600": ""}

            `}
          >
            
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
