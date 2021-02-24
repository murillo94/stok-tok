import { StyleSheet } from 'react-native';

import { getResponsiveFontSize } from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#009845',
    borderRadius: 8,
    padding: 15,
    width: '100%',
  },
  title: {
    color: '#ffffff',
    fontSize: getResponsiveFontSize(1.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
