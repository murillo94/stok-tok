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

  export enum ExploreRoutes {
    ROOT = 'EXPLORE',
    DETAILS = 'EXPLORE_DETAILS',
  }

  export enum CartRoutes {
    ROOT = 'CART',
  }

  export enum Tabs {
    HOME = 'Início',
    EXPLORE = 'Explorar',
  }

  export enum Modals {
    CART = 'Sacola de compras',
  }

  export type ModalRouterStackParamList = {
    [CartRoutes.ROOT]: undefined;
  };

  export type RootRouterStackParamList = {
    [RootRoutes.ROOT]: undefined;
  };

  export type MainRouterStackParamList = {
    [HomeRoutes.ROOT]: undefined;
    [ExploreRoutes.ROOT]: undefined;
    [ExploreRoutes.DETAILS]: undefined;
  };
}
