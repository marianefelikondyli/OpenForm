interface Size {
  desktop: string;
}

const size: Size = {
  desktop: '768px', // for small screen mobile
};

export const breakpoints = {
  desktop: `(min-width: ${size.desktop})`,
};
