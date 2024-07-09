import { VscGraph } from 'react-icons/vsc';
import { IoMdAddCircle } from 'react-icons/io';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { TiThListOutline } from 'react-icons/ti';

export const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

const sizeIcons = 'h-6 w-6 drop-shadow-lg';

export const sidebarData = [
	{
		_categoryId: 0,
		category: 'Dashboard',
		items: [
			{
				title: 'Live View',
				href: '/dashboard',
				icon: (
					<TbDeviceDesktopAnalytics className={sizeIcons} />
				),
				submenu: true,
				submenuItems: [
					{
						title: 'Dashboard',
						href: '/item1',
					},
				],
			},
			{
				title: 'History',
				href: '/dashboard/reading',
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
		category: 'Enterprise',
		items: [
			{
				title: 'Show All',
				href: '/dashboard/enterprise',
				icon: <TiThListOutline className={sizeIcons} />,
				submenu: true,
				submenuItems: [
					{
						title: 'Dashboard',
						href: '/item1',
					},
				],
			},
			{
				title: 'Add New',
				href: '/dashboard/enterprise/add',
				icon: <IoMdAddCircle className={sizeIcons} />,
				submenu: false,
			},
		],
	},
	{
		_categoryId: 2,
		category: 'DEVICES',
		items: [
			{
				title: 'Show All',
				href: '/dashboard/devices',
				icon: <TiThListOutline className={sizeIcons} />,
				submenu: false,
			},
			{
				title: 'Add New',
				href: '/dashboard/devices/add',
				icon: <IoMdAddCircle className={sizeIcons} />,
				submenu: false,
			},
		],
	},
];
