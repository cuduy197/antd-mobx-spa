@inject("user")
@observer
export default class Home extends React.Component {
  render() {
    let user = this.props.user;
    return (
      <div className="">
        <h1>Home</h1>
      </div>
    );
  }
}
