import { useNavigation } from '@react-navigation/native';

import { Categorie } from 'types/explore';
import { Navigation } from 'types/navigation';

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
