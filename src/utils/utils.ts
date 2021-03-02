export const isColor = (colorString: string): boolean => {
    const s = new Option().style;
    s.color = colorString;
    return s.color === colorString;
};
