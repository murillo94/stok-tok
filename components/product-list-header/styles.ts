import { StyleSheet } from 'react-native';

import colors from 'constants/colors';

import { getResponsiveFontSize } from 'utils';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.black,
    fontSize: getResponsiveFontSize(2),
    fontWeight: '500',
  },
});

export default styles;
