import clsx from 'clsx';
import Link from 'next/link';

interface Props {
    children: React.ReactNode;
    link: string;
    icon: React.ReactNode;
    active?: boolean;
}

export const NavLink: React.FC<Props> = ({ link, icon, active = false, children }) => {
    return (
        <div
            className={clsx('flex flex-row gap-2 items-center px-2 py-3 cursor-pointer', {
                'bg-sky-100 text-blue-600': active,
            })}
        >
            <div>{icon}</div>
            <Link href={link}>{children}</Link>
        </div>
    );
};
