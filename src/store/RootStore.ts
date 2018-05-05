import { types } from 'mobx-state-tree';
import packageJson from '../../package.json';

const RootStore = types.model('RootStore', {
  appVersion: packageJson.version,
});
export type RootStoreType = typeof RootStore.Type;

export default RootStore;
