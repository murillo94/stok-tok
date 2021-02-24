import { StyleSheet } from 'react-native';

import { getResponsiveFontSize } from '../../utils';

const styles = StyleSheet.create({
  containerSingleItem: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerParentItem: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '50%',
  },
  title: {
    color: '#333',
    fontSize: getResponsiveFontSize(1.7),
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
    height: getResponsiveFontSize(1.7) * 3,
  },
  price: {
    color: '#333',
    fontSize: getResponsiveFontSize(2),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 25,
  },
  containerButton: {
    width: '80%',
  },
});

export default styles;
