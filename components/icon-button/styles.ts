import { relative } from 'path';
import { StyleSheet } from 'react-native';

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
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export default styles;
