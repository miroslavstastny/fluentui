import { GlobalSharedColors, NeutralColorTokens, SharedColorTokens } from '../types';

export const neutralColorTokens: NeutralColorTokens = {
  neutralForeground1: '#ffffff', // #ffffff Global.Color.White
  neutralForeground2: '#d6d6d6', // #d6d6d6 Global.Color.Grey.84
  neutralForeground2Hover: '#ffffff', // #ffffff Global.Color.White
  neutralForeground2Pressed: '#ffffff', // #ffffff Global.Color.White
  neutralForeground2Selected: '#ffffff', // #ffffff Global.Color.White
  neutralForeground2BrandHover: '#9ea2ff', // #9ea2ff Global.Color.Brand.Tint.20
  neutralForeground2BrandPressed: '#8f95f8', // #8f95f8 Global.Color.Brand.Tint.10
  neutralForeground2BrandSelected: '#9ea2ff', // #9ea2ff Global.Color.Brand.Tint.20
  neutralForeground3: '#adadad', // #adadad Global.Color.Grey.68
  neutralForeground3Hover: '#d6d6d6', // #d6d6d6 Global.Color.Grey.84
  neutralForeground3Pressed: '#d6d6d6', // #d6d6d6 Global.Color.Grey.84
  neutralForeground3Selected: '#d6d6d6', // #d6d6d6 Global.Color.Grey.84
  neutralForeground3BrandHover: '#9ea2ff', // #9ea2ff Global.Color.Brand.Tint.20
  neutralForeground3BrandPressed: '#8f95f8', // #8f95f8 Global.Color.Brand.Tint.10
  neutralForeground3BrandSelected: '#9ea2ff', // #9ea2ff Global.Color.Brand.Tint.20
  neutralForeground4: '#858585', // #858585 Global.Color.Grey.52
  neutralForegroundDisabled: '#5c5c5c', // #5c5c5c Global.Color.Grey.36
  brandForegroundLink: '#8f95f8', // #8f95f8 Global.Color.Brand.Tint.10
  brandForegroundLinkHover: '#b2b5ff', // #b2b5ff Global.Color.Brand.Tint.30
  brandForegroundLinkPressed: '#9ea2ff', // #9ea2ff Global.Color.Brand.Tint.20
  brandForegroundLinkSelected: '#8f95f8', // #8f95f8 Global.Color.Brand.Tint.10
  compoundBrandForeground1: '#8f95f8', // #8f95f8 Global.Color.Brand.Tint.10
  compoundBrandForeground1Hover: '#9ea2ff', // #9ea2ff Global.Color.Brand.Tint.20
  compoundBrandForeground1Pressed: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  brandForeground1: '#9ea2ff', // #9ea2ff Global.Color.Brand.Tint.20
  brandForeground2: '#b2b5ff', // #b2b5ff Global.Color.Brand.Tint.30
  neutralForegroundInverted: '#ffffff', // #ffffff Global.Color.White
  neutralForegroundInvertedAccessible: '#ffffff', // #ffffff Global.Color.White
  neutralForegroundInvertedLink: '#ffffff', // #ffffff Global.Color.White
  neutralForegroundInvertedLinkHover: '#ffffff', // #ffffff Global.Color.White
  neutralForegroundInvertedLinkPressed: '#ffffff', // #ffffff Global.Color.White
  neutralForegroundInvertedLinkSelected: '#ffffff', // #ffffff Global.Color.White
  neutralBackground1: '#292929', // #292929 Global.Color.Grey.16
  neutralBackground1Hover: '#3d3d3d', // #3d3d3d Global.Color.Grey.24
  neutralBackground1Pressed: '#1f1f1f', // #1f1f1f Global.Color.Grey.12
  neutralBackground1Selected: '#383838', // #383838 Global.Color.Grey.22
  neutralBackground2: '#1f1f1f', // #1f1f1f Global.Color.Grey.12
  neutralBackground2Hover: '#333333', // #333333 Global.Color.Grey.20
  neutralBackground2Pressed: '#141414', // #141414 Global.Color.Grey.8
  neutralBackground2Selected: '#2e2e2e', // #2e2e2e Global.Color.Grey.18
  neutralBackground3: '#141414', // #141414 Global.Color.Grey.8
  neutralBackground3Hover: '#292929', // #292929 Global.Color.Grey.16
  neutralBackground3Pressed: '#0a0a0a', // #0a0a0a Global.Color.Grey.4
  neutralBackground3Selected: '#242424', // #242424 Global.Color.Grey.14
  neutralBackground4: '#0a0a0a', // #0a0a0a Global.Color.Grey.4
  neutralBackground4Hover: '#1f1f1f', // #1f1f1f Global.Color.Grey.12
  neutralBackground4Pressed: '#000000', // #000000 Global.Color.Black
  neutralBackground4Selected: '#1a1a1a', // #1a1a1a Global.Color.Grey.10
  neutralBackground5: '#000000', // #000000 Global.Color.Black
  neutralBackground5Hover: '#141414', // #141414 Global.Color.Grey.8
  neutralBackground5Pressed: '#050505', // #050505 Global.Color.Grey.2
  neutralBackground5Selected: '#0f0f0f', // #0f0f0f Global.Color.Grey.6
  neutralBackground6: '#333333', // #333333 Global.Color.Grey.20
  subtleBackground: 'transparent', // transparent undefined
  subtleBackgroundHover: '#383838', // #383838 Global.Color.Grey.22
  subtleBackgroundPressed: '#2e2e2e', // #2e2e2e Global.Color.Grey.18
  subtleBackgroundSelected: '#333333', // #333333 Global.Color.Grey.20
  transparentBackground: 'transparent', // transparent undefined
  transparentBackgroundHover: 'transparent', // transparent undefined
  transparentBackgroundPressed: 'transparent', // transparent undefined
  transparentBackgroundSelected: 'transparent', // transparent undefined
  neutralBackgroundDisabled: '#141414', // #141414 Global.Color.Grey.8
  brandBackground: '#52558f', // #52558f Global.Color.Brand.Shade.10
  brandBackgroundHover: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  brandBackgroundPressed: '#3d3e66', // #3d3e66 Global.Color.Brand.Shade.40
  brandBackgroundSelected: '#494b83', // #494b83 Global.Color.Brand.Shade.20
  compoundBrandBackground: '#8f95f8', // #8f95f8 Global.Color.Brand.Tint.10
  compoundBrandBackgroundHover: '#9ea2ff', // #9ea2ff Global.Color.Brand.Tint.20
  compoundBrandBackgroundPressed: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  brandBackgroundStatic: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  brandBackground2: '#3d3e66', // #3d3e66 Global.Color.Brand.Shade.40
  neutralStrokeAccessible: '#adadad', // #adadad Global.Color.Grey.68
  neutralStrokeAccessibleHover: '#bdbdbd', // #bdbdbd Global.Color.Grey.74
  neutralStrokeAccessiblePressed: '#b3b3b3', // #b3b3b3 Global.Color.Grey.70
  neutralStrokeAccessibleSelected: '#9ea2ff', // #9ea2ff Global.Color.Brand.Tint.20
  neutralStroke1: '#666666', // #666666 Global.Color.Grey.40
  neutralStroke1Hover: '#757575', // #757575 Global.Color.Grey.46
  neutralStroke1Pressed: '#6b6b6b', // #6b6b6b Global.Color.Grey.42
  neutralStroke1Selected: '#707070', // #707070 Global.Color.Grey.44
  neutralStroke2: '#525252', // #525252 Global.Color.Grey.32
  neutralStroke3: '#3d3d3d', // #3d3d3d Global.Color.Grey.24
  brandStroke1: '#8f95f8', // #8f95f8 Global.Color.Brand.Tint.10
  brandStroke2: '#464775', // #464775 Global.Color.Brand.Shade.30
  compoundBrandStroke: '#8f95f8', // #8f95f8 Global.Color.Brand.Tint.10
  compoundBrandStrokeHover: '#9ea2ff', // #9ea2ff Global.Color.Brand.Tint.20
  compoundBrandStrokePressed: '#6264a7', // #6264a7 Global.Color.Brand.Primary
  neutralStrokeDisabled: '#424242', // #424242 Global.Color.Grey.26
  strokeAccessible: 'transparent', // transparent undefined
  strokeAccessibleInteractive: 'transparent', // transparent undefined
  strokeAccessibleDisabled: 'transparent', // transparent undefined
  strokeFocus1: '#000000', // #000000 Global.Color.Black
  strokeFocus2: '#ffffff', // #ffffff Global.Color.White
  neutralShadowAmbient: 'rgba(0,0,0,0.24)', // rgba(0,0,0,0.24) undefined
  neutralShadowKey: 'rgba(0,0,0,0.28)', // rgba(0,0,0,0.28) undefined
  neutralShadowAmbientLighter: 'rgba(0,0,0,0.12)', // rgba(0,0,0,0.12) undefined
  neutralShadowKeyLighter: 'rgba(0,0,0,0.14)', // rgba(0,0,0,0.14) undefined
  neutralShadowAmbientDarker: 'rgba(0,0,0,0.40)', // rgba(0,0,0,0.40) undefined
  neutralShadowKeyDarker: 'rgba(0,0,0,0.48)', // rgba(0,0,0,0.48) undefined
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
        background1: globalSharedTokens[sharedColor as keyof GlobalSharedColors].shade40,
        background2: globalSharedTokens[sharedColor as keyof GlobalSharedColors].shade30,
        background3: globalSharedTokens[sharedColor as keyof GlobalSharedColors].primary,
        foreground1: globalSharedTokens[sharedColor as keyof GlobalSharedColors].tint30,
        foreground2: globalSharedTokens[sharedColor as keyof GlobalSharedColors].tint40,
        foreground3: globalSharedTokens[sharedColor as keyof GlobalSharedColors].tint20,
        borderActive: globalSharedTokens[sharedColor as keyof GlobalSharedColors].tint30,
        border2: globalSharedTokens[sharedColor as keyof GlobalSharedColors].tint20,
      };
      return acc;
    }, {} as Record<keyof GlobalSharedColors, SharedColorTokens>);
};
