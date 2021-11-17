import type PMenuItem from '../../components/menu-item/MenuItem.props';
import type { TPopoverPlacement } from '../../utilities/popover';

type TMenuData = {
    items?: TMenuData[];
    url?: string;
} & PMenuItem;

export type { TMenuData, TPopoverPlacement as TMenuPlacement };
