import { StyleSheet } from 'react-native';

import { getResponsiveFontSize } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    padding: 20,
    marginBottom: 25,
  },
  infoContainer: {
    marginLeft: 20,
    width: '70%',
  },
  title: {
    color: '#333',
    fontSize: getResponsiveFontSize(1.7),
    fontWeight: '500',
    marginBottom: 10,
  },
  price: {
    color: '#333',
    fontSize: getResponsiveFontSize(2),
    fontWeight: '700',
    marginBottom: 10,
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default styles;
