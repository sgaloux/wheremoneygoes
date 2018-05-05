import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { DatePicker, Button } from 'antd';

import { mapStore } from '../store';
import { RootStoreType } from '../store/RootStore';

interface AppProps {
  rootStore?: RootStoreType;
}

@inject(
  mapStore(root => ({
    rootStore: root,
  })),
)
@observer
export default class App extends React.Component<AppProps> {
  public render() {
    const { appVersion } = this.props.rootStore!;

    return (
      <div>
        App, version is : {appVersion}
        <br />
        <DatePicker />
        <br />
        <Button type="primary" size="small">
          Hello world!
        </Button>
      </div>
    );
  }
}
