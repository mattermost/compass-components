// shared types for `Heading` and `Text` component
import { TTHemeTextColors } from '../utilities/theme';

type TAriaRoles =
    | 'alert'
    | 'alertdialog'
    | 'application'
    | 'article'
    | 'banner'
    | 'button'
    | 'checkbox'
    | 'columnheader'
    | 'combobox'
    | 'complementary'
    | 'contentinfo'
    | 'definition'
    | 'dialog'
    | 'directory'
    | 'document'
    | 'form'
    | 'grid'
    | 'gridcell'
    | 'group'
    | 'heading'
    | 'img'
    | 'link'
    | 'list'
    | 'listbox'
    | 'listitem'
    | 'log'
    | 'main'
    | 'marquee'
    | 'math'
    | 'menu'
    | 'menubar'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'navigation'
    | 'note'
    | 'option'
    | 'presentation'
    | 'progressbar'
    | 'radio'
    | 'radiogroup'
    | 'region'
    | 'row'
    | 'rowgroup'
    | 'rowheader'
    | 'scrollbar'
    | 'search'
    | 'separator'
    | 'slider'
    | 'spinbutton'
    | 'status'
    | 'tab'
    | 'tablist'
    | 'tabpanel'
    | 'textbox'
    | 'timer'
    | 'toolbar'
    | 'tooltip'
    | 'tree'
    | 'treegrid'
    | 'treeitem';

type TFontWeight = 'light' | 'regular' | 'bold';

type TFontMargin = 'none' | 'top' | 'bottom' | 'both';

type TFontColor = 'inherit' | keyof TTHemeTextColors;

// Grid and Shape components
type TContainerElement =
    | 'div'
    | 'span'
    | 'article'
    | 'aside'
    | 'ul'
    | 'li'
    | 'details'
    | 'figcaption'
    | 'figure'
    | 'footer'
    | 'header'
    | 'main'
    | 'mark'
    | 'nav'
    | 'section'
    | 'summary'
    | 'time'
    | 'label';

type TInteractionElement = 'button' | 'input';

type TComponentSizeToken = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

type TComponentSizes = ['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

type TUserStatus = 'online' | 'away' | 'dnd' | 'offline';

type THiddenArgtypes = {
    [x: string]: { table: { disable: boolean } };
};

export type {
    TFontColor,
    TFontMargin,
    TFontWeight,
    TContainerElement,
    TInteractionElement,
    TComponentSizes,
    TComponentSizeToken,
    THiddenArgtypes,
    TUserStatus,
    TAriaRoles,
};
