import React from "react";

type AppState = {
  body: string;
};

export default class App extends React.Component<{}, AppState> {
  state = {
    body: "Nothing so far :( ..."
  };

  componentDidMount() {
    fetch("/api/hello")
      .then(res => res.json())
      .then(({ body }: { body: string }) => this.setState({ body }));
  }

  render() {
    const { body } = this.state;

    return (
      <div>
        This is a React component. Foobar!
        <br />
        Server sez: {body}
      </div>
    );
  }
}
