import { Route } from './+types/_._index';

export function loader(_: Route.LoaderArgs) {
  throw new Error('error');
}

export default function Component() {
  return <h1>Hello React Router</h1>;
}
