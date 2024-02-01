'use client';

import { NavLink } from './NavLink';
import { Icons } from '../icons';
import { usePathname } from 'next/navigation';
import { PageRoutes } from '../routes';

const links = [
    { link: PageRoutes.dashboard, icon: Icons.home, text: 'Home' },
    {
        link: PageRoutes.setting,
        icon: Icons.gear,
        text: 'Settings',
    },
];

export const SideNav = () => {
    const pathname = usePathname();
    return (
        <div className="flex flex-col">
            {links.map(({ link, icon, text }) => (
                <NavLink key={link} link={link} icon={icon} active={pathname === link}>
                    {text}
                </NavLink>
            ))}
        </div>
    );
};
