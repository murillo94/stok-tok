import { StyleSheet } from 'react-native';

import { colors } from 'constant';

import { getResponsiveFontSize } from 'utils';

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 50,
  },
  title: {
    color: colors.black,
    fontSize: getResponsiveFontSize(2.5),
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  containerItem: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    width: '50%',
    alignItems: 'center',
  },
  containerImage: {
    backgroundColor: colors.green,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: colors.gray,
    borderWidth: 1,
    borderBottomWidth: 0,
    paddingVertical: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerDescription: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: colors.gray,
    borderWidth: 1,
    borderTopWidth: 0,
    padding: 20,
    width: '100%',
  },
  description: {
    color: colors.black,
    fontSize: getResponsiveFontSize(1.8),
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
