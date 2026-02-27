export const FONTS = {
  primary: {
    family: 'System',
    weights: {
      regular: '400',
      medium: '500',
      bold: '700',
      light: '300',
    },
  },
  secondary: {
    family: 'System',
    weights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
};

export type FontFamily = keyof typeof FONTS;
export type FontWeight = keyof typeof FONTS.primary.weights;
export type FontSize = keyof typeof FONTS.sizes;
