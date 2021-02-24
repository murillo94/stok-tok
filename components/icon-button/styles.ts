import { StyleSheet } from 'react-native';

import colors from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -2,
    height: 12,
    width: 12,
    backgroundColor: colors.red,
    borderRadius: 10,
  },
});

export default styles;
