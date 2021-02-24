import { StyleSheet } from 'react-native';

import colors from 'constants/colors';

import { getResponsiveFontSize } from 'utils';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 15,
    width: '100%',
  },
  title: {
    color: colors.white,
    fontSize: getResponsiveFontSize(1.6),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
