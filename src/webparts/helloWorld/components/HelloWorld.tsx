import * as React from 'react';
import { IHelloWorldProps } from './IHelloWorldProps';
import { Button } from 'office-ui-fabric-react';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div>
        <h1>Hello World OUFR!</h1>
        <Button text="Click me!" />
      </div>
    );
  }
}
