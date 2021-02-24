import { StyleSheet } from 'react-native';

import { getResponsiveFontSize } from '../../utils';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#333',
    fontSize: getResponsiveFontSize(1.8),
    fontWeight: '500',
  },
});

export default styles;
