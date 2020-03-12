import { generateRoutes } from './utils/routing-utils';

export const ENV = process.env.REACT_APP_ENV;


// Routing

export const Routes = generateRoutes({
  HOME: '/',
  TEST: '/test',
});
