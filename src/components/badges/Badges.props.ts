type PBadges = {
    /** The type of the badge */
    type: 'mention' | 'unread' | 'status' | 'desktopApp';
    /** The location of the mention badge */
    subType?: 'sidebar' | 'menu' | undefined;
    /** The size of the badge */
    size: 'sm' | 'md';
    /** User status for status badge only */
    status?: string;
    /** Badge content */
    content?: string | React.ReactNode;
    /** The border-radius size */
    borderRadius?: string;
    /** set a custom width */
    width?: string;
    height?: string;
    /** set a custom padding */
    padding?: string;
    /** set a custom background color */
    background?: string;
    color?: string;
    boxShadow: string;
};

type PStyledBadges = Pick<PBadges, 'padding' | 'borderRadius' | 'color' | 'background' | 'boxShadow' | 'content'> & {};

export type { PBadges, PStyledBadges };
