import { GlobalSharedColors, NeutralColorTokens, SharedColorTokens } from '../types';

export const neutralColorTokens: NeutralColorTokens = {
  neutralForeground1: '#242424', // #242424 Global.Color.Grey.14
  neutralForeground2: '#424242', // #424242 Global.Color.Grey.26
  neutralForeground2Hover: '#242424', // #242424 Global.Color.Grey.14
  neutralForeground2Pressed: '#242424', // #242424 Global.Color.Grey.14
  neutralForeground2Selected: '#242424', // #242424 Global.Color.Grey.14
  neutralForeground2BrandHover: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  neutralForeground2BrandPressed: '#52558f', // #52558f Global.Color.Brand.Shade.10
  neutralForeground2BrandSelected: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  neutralForeground3: '#616161', // #616161 Global.Color.Grey.38
  neutralForeground3Hover: '#424242', // #424242 Global.Color.Grey.26
  neutralForeground3Pressed: '#424242', // #424242 Global.Color.Grey.26
  neutralForeground3Selected: '#424242', // #424242 Global.Color.Grey.26
  neutralForeground3BrandHover: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  neutralForeground3BrandPressed: '#52558f', // #52558f Global.Color.Brand.Shade.10
  neutralForeground3BrandSelected: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  neutralForeground4: '#808080', // #808080 Global.Color.Grey.50
  neutralForegroundDisabled: '#bdbdbd', // #bdbdbd Global.Color.Grey.74
  brandForegroundLink: '#52558f', // #52558f Global.Color.Brand.Shade.10
  brandForegroundLinkHover: '#494b83', // #494b83 Global.Color.Brand.Shade.20
  brandForegroundLinkPressed: '#3d3e66', // #3d3e66 Global.Color.Brand.Shade.40
  brandForegroundLinkSelected: '#52558f', // #52558f Global.Color.Brand.Shade.10
  compoundBrandForeground1: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  compoundBrandForeground1Hover: '#52558f', // #52558f Global.Color.Brand.Shade.10
  compoundBrandForeground1Pressed: '#494b83', // #494b83 Global.Color.Brand.Shade.20
  brandForeground1: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  brandForeground2: '#52558f', // #52558f Global.Color.Brand.Shade.10
  neutralForegroundInverted: '#ffffff', // #ffffff Global.Color.White
  neutralForegroundInvertedAccessible: '#ffffff', // #ffffff Global.Color.White
  neutralForegroundInvertedLink: '#ffffff', // #ffffff Global.Color.White
  neutralForegroundInvertedLinkHover: '#ffffff', // #ffffff Global.Color.White
  neutralForegroundInvertedLinkPressed: '#ffffff', // #ffffff Global.Color.White
  neutralForegroundInvertedLinkSelected: '#ffffff', // #ffffff Global.Color.White
  neutralBackground1: '#ffffff', // #ffffff Global.Color.White
  neutralBackground1Hover: '#f5f5f5', // #f5f5f5 Global.Color.Grey.96
  neutralBackground1Pressed: '#e0e0e0', // #e0e0e0 Global.Color.Grey.88
  neutralBackground1Selected: '#ebebeb', // #ebebeb Global.Color.Grey.92
  neutralBackground2: '#fafafa', // #fafafa Global.Color.Grey.98
  neutralBackground2Hover: '#f0f0f0', // #f0f0f0 Global.Color.Grey.94
  neutralBackground2Pressed: '#dbdbdb', // #dbdbdb Global.Color.Grey.86
  neutralBackground2Selected: '#e6e6e6', // #e6e6e6 Global.Color.Grey.90
  neutralBackground3: '#f5f5f5', // #f5f5f5 Global.Color.Grey.96
  neutralBackground3Hover: '#ebebeb', // #ebebeb Global.Color.Grey.92
  neutralBackground3Pressed: '#d6d6d6', // #d6d6d6 Global.Color.Grey.84
  neutralBackground3Selected: '#e0e0e0', // #e0e0e0 Global.Color.Grey.88
  neutralBackground4: '#f0f0f0', // #f0f0f0 Global.Color.Grey.94
  neutralBackground4Hover: '#fafafa', // #fafafa Global.Color.Grey.98
  neutralBackground4Pressed: '#f5f5f5', // #f5f5f5 Global.Color.Grey.96
  neutralBackground4Selected: '#ffffff', // #ffffff Global.Color.White
  neutralBackground5: '#ebebeb', // #ebebeb Global.Color.Grey.92
  neutralBackground5Hover: '#f5f5f5', // #f5f5f5 Global.Color.Grey.96
  neutralBackground5Pressed: '#f0f0f0', // #f0f0f0 Global.Color.Grey.94
  neutralBackground5Selected: '#fafafa', // #fafafa Global.Color.Grey.98
  neutralBackground6: '#e6e6e6', // #e6e6e6 Global.Color.Grey.90
  subtleBackground: 'transparent', // transparent undefined
  subtleBackgroundHover: '#f5f5f5', // #f5f5f5 Global.Color.Grey.96
  subtleBackgroundPressed: '#e0e0e0', // #e0e0e0 Global.Color.Grey.88
  subtleBackgroundSelected: '#ebebeb', // #ebebeb Global.Color.Grey.92
  transparentBackground: 'transparent', // transparent undefined
  transparentBackgroundHover: 'transparent', // transparent undefined
  transparentBackgroundPressed: 'transparent', // transparent undefined
  transparentBackgroundSelected: 'transparent', // transparent undefined
  neutralBackgroundDisabled: '#f0f0f0', // #f0f0f0 Global.Color.Grey.94
  brandBackground: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  brandBackgroundHover: '#52558f', // #52558f Global.Color.Brand.Shade.10
  brandBackgroundPressed: '#3d3e66', // #3d3e66 Global.Color.Brand.Shade.40
  brandBackgroundSelected: '#494b83', // #494b83 Global.Color.Brand.Shade.20
  compoundBrandBackground: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  compoundBrandBackgroundHover: '#52558f', // #52558f Global.Color.Brand.Shade.10
  compoundBrandBackgroundPressed: '#494b83', // #494b83 Global.Color.Brand.Shade.20
  brandBackgroundStatic: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  brandBackground2: '#e9eaf6', // #e9eaf6 Global.Color.Brand.Tint.60
  neutralStrokeAccessible: '#616161', // #616161 Global.Color.Grey.38
  neutralStrokeAccessibleHover: '#575757', // #575757 Global.Color.Grey.34
  neutralStrokeAccessiblePressed: '#4d4d4d', // #4d4d4d Global.Color.Grey.30
  neutralStrokeAccessibleSelected: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  neutralStroke1: '#d1d1d1', // #d1d1d1 Global.Color.Grey.82
  neutralStroke1Hover: '#c7c7c7', // #c7c7c7 Global.Color.Grey.78
  neutralStroke1Pressed: '#b3b3b3', // #b3b3b3 Global.Color.Grey.70
  neutralStroke1Selected: '#bdbdbd', // #bdbdbd Global.Color.Grey.74
  neutralStroke2: '#e0e0e0', // #e0e0e0 Global.Color.Grey.88
  neutralStroke3: '#f0f0f0', // #f0f0f0 Global.Color.Grey.94
  brandStroke1: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  brandStroke2: '#c7c9ff', // #c7c9ff Global.Color.Brand.Tint.40
  compoundBrandStroke: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  compoundBrandStrokeHover: '#52558f', // #52558f Global.Color.Brand.Shade.10
  compoundBrandStrokePressed: '#494b83', // #494b83 Global.Color.Brand.Shade.20
  neutralStrokeDisabled: '#e0e0e0', // #e0e0e0 Global.Color.Grey.88
  strokeAccessible: 'transparent', // transparent undefined
  strokeAccessibleInteractive: 'transparent', // transparent undefined
  strokeAccessibleDisabled: 'transparent', // transparent undefined
  strokeFocus1: '#ffffff', // #ffffff Global.Color.White
  strokeFocus2: '#000000', // #000000 Global.Color.Black
  neutralShadowAmbient: 'rgba(0,0,0,0.12)', // rgba(0,0,0,0.12) undefined
  neutralShadowKey: 'rgba(0,0,0,0.14)', // rgba(0,0,0,0.14) undefined
  neutralShadowAmbientLighter: 'rgba(0,0,0,0.06)', // rgba(0,0,0,0.06) undefined
  neutralShadowKeyLighter: 'rgba(0,0,0,0.07)', // rgba(0,0,0,0.07) undefined
  neutralShadowAmbientDarker: 'rgba(0,0,0,0.20)', // rgba(0,0,0,0.20) undefined
  neutralShadowKeyDarker: 'rgba(0,0,0,0.24)', // rgba(0,0,0,0.24) undefined
  brandShadowAmbient: 'rgba(0,0,0,0.30)', // rgba(0,0,0,0.30) undefined
  brandShadowKey: 'rgba(0,0,0,0.25)', // rgba(0,0,0,0.25) undefined
};

export const generateSharedColorTokens: (
  globalSharedTokens: GlobalSharedColors,
) => Record<keyof GlobalSharedColors, SharedColorTokens> = globalSharedTokens => {
  return Object.keys(globalSharedTokens)
    .filter(sharedColor => sharedColor !== 'brand' && sharedColor !== 'grey')
    .reduce((acc, sharedColor) => {
      acc[sharedColor as keyof GlobalSharedColors] = {
        background1: globalSharedTokens[sharedColor as keyof GlobalSharedColors].tint60,
        background2: globalSharedTokens[sharedColor as keyof GlobalSharedColors].tint40,
        background3: globalSharedTokens[sharedColor as keyof GlobalSharedColors].primary,
        foreground1: globalSharedTokens[sharedColor as keyof GlobalSharedColors].shade10,
        foreground2: globalSharedTokens[sharedColor as keyof GlobalSharedColors].shade30,
        foreground3: globalSharedTokens[sharedColor as keyof GlobalSharedColors].primary,
        borderActive: globalSharedTokens[sharedColor as keyof GlobalSharedColors].primary,
        border2: globalSharedTokens[sharedColor as keyof GlobalSharedColors].primary,
      };
      return acc;
    }, {} as Record<keyof GlobalSharedColors, SharedColorTokens>);
};
