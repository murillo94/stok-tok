export namespace Navigation {
  export enum RootRoutes {
    ROOT = 'ROOT',
  }

  export enum NotFoundRoutes {
    ROOT = 'NOT_FOUND',
  }

  export enum HomeRoutes {
    ROOT = 'HOME',
  }

  export enum SearchRoutes {
    ROOT = 'SEARCH',
  }

  export enum FavoritesRoutes {
    ROOT = 'FAVORITES',
  }

  export enum Tabs {
    HOME = 'Início',
    SEARCH = 'Busca',
    FAVORITES = 'Favoritos',
  }

  export type RootRouterStackParamList = {
    [RootRoutes.ROOT]: undefined;
    [NotFoundRoutes.ROOT]: undefined;
  };

  export type MainRouterStackParamList = {
    [HomeRoutes.ROOT]: undefined;
    [SearchRoutes.ROOT]: undefined;
    [FavoritesRoutes.ROOT]: undefined;
  };
}
