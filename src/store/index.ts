import RootStore, { RootStoreType } from './RootStore';

export const mapStore = (func: (root: RootStoreType) => object) => (stores: {
  store: RootStoreType;
}) => {
  return func(stores.store);
};

export default RootStore;
