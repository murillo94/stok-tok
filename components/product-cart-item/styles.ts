import { StyleSheet } from 'react-native';

import { colors } from 'constant';

import { getResponsiveFontSize } from 'utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
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
    color: colors.black,
    fontSize: getResponsiveFontSize(1.7),
    fontWeight: '500',
    marginBottom: 10,
    marginRight: 25,
  },
  price: {
    color: colors.black,
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
