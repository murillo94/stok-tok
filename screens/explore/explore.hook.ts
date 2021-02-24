import { useNavigation } from '@react-navigation/native';

import { Categorie } from 'typings/explore';
import { Navigation } from 'typings/navigation';

interface useExploreScreen {
  handleGoToCategorie: (item: Categorie) => void;
}

export default function useExploreScreen(): useExploreScreen {
  const navigation = useNavigation();

  function handleGoToCategorie(item: Categorie): void {
    navigation.navigate(Navigation.ExploreRoutes.DETAILS, {
      url: item.url,
      name: item.name,
    });
  }

  return {
    handleGoToCategorie,
  };
}
