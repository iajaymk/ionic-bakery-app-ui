import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./pages/wishlist/wishlist.page').then((m) => m.WishlistPage),
      },
      {
        path: 'explore',
        loadComponent: () =>
          import('./pages/explore/explore.page').then((m) => m.ExplorePage),
      },
      {
        path: 'chats',
        loadComponent: () =>
          import('./pages/chats/chats.page').then((m) => m.ChatsPage),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./pages/account/account.page').then((m) => m.AccountPage),
      },
    ],
  },
];
