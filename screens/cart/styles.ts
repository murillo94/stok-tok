import { StyleSheet } from 'react-native';

import { colors } from 'constant';

import { getResponsiveFontSize } from 'utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 30,
    flex: 1,
  },
  containerEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    textAlign: 'center',
  },
  title: {
    fontSize: getResponsiveFontSize(2.4),
    fontWeight: 'bold',
    marginVertical: 25,
  },
  totalContainer: {
    paddingTop: 20,
    borderTopColor: colors.gray,
    borderTopWidth: 1,
  },
  total: {
    fontSize: getResponsiveFontSize(2),
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default styles;
