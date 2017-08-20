@inject("user")
@observer
export default class Docs extends Component {
  render() {
    let user = this.props.user;
    return (
      <div className="">
        <iframe title="Docs" src="https://ant.design/docs/react/introduce" frameBorder={0} width="100%" style={{ height: "100vh" }} />
      </div>
    );
  }
}
