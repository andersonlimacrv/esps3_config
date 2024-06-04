import { CgFormatLeft } from 'react-icons/cg';
import { MdOutlineMessage } from 'react-icons/md';
import { RiNewspaperLine } from 'react-icons/ri';
import { VscGraph } from 'react-icons/vsc';
import { TbTemplate } from 'react-icons/tb';
import { GiArmorUpgrade } from 'react-icons/gi';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';

const sizeIcons = 'h-6 w-6 drop-shadow-lg';

export const sidebarData = [
	{
		_categoryId: 0,
		category: 'Dashboard',
		items: [
			{
				title: 'My Forms',
				href: '/dashboard',
				icon: <CgFormatLeft className={sizeIcons} />,
				submenu: true,
				submenuItems: [
					{
						title: 'Dashboard',
						href: '/item1',
					},
				],
			},
			{
				title: 'Responses',
				href: '/dashboard/responses',
				icon: <MdOutlineMessage className={sizeIcons} />,
				submenu: true,
				submenuItems: [
					{
						title: 'Dashboard',
						href: '/item1',
					},
				],
			},
			{
				title: 'Analitics',
				href: '/dashboard/metrics',
				icon: <VscGraph className={sizeIcons} />,
				submenu: true,
				submenuItems: [
					{
						title: 'Dashboard',
						href: '/item1',
					},
				],
			},
		],
	},
	{
		_categoryId: 1,
		category: 'Plan',
		items: [
			{
				title: 'Upgrade',
				href: '/plan/upgrade',
				icon: <GiArmorUpgrade className={sizeIcons} />,
				submenu: true,
				submenuItems: [
					{
						title: 'Dashboard',
						href: '/item1',
					},
				],
			},
			{
				title: 'Current',
				href: '/plan/current',
				icon: <RiNewspaperLine className={sizeIcons} />,
				submenu: false,
			},
		],
	},
	{
		_categoryId: 2,
		category: 'Templates',
		items: [
			{
				title: 'My Templates',
				href: '/energia',
				icon: <TbTemplate className={sizeIcons} />,
				submenu: false,
			},
			{
				title: 'Galery',
				href: '/Alarmes',
				icon: (
					<MdOutlineShoppingCartCheckout
						className={sizeIcons}
					/>
				),
				submenu: false,
			},
		],
	},
];
