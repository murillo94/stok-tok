import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const getResponsiveHeight = (value: number): number =>
  responsiveHeight(value);

export const getResponsiveWidth = (value: number): number =>
  responsiveWidth(value);

export const getResponsiveFontSize = (value: number): number =>
  responsiveFontSize(value);
