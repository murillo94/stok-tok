import { StyleSheet } from 'react-native';

import { getResponsiveFontSize } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    padding: 30,
  },
  title: {
    fontSize: getResponsiveFontSize(2.4),
    fontWeight: 'bold',
    marginBottom: 20,
  },
  totalContainer: {
    paddingVertical: 20,
    borderTopColor: '#b1b1b1',
    borderTopWidth: 2,
  },
  total: {
    fontSize: getResponsiveFontSize(2),
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default styles;
