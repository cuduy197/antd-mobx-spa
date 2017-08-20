@inject("user")
@observer
export default class NotFound extends React.Component {
  componentWillMount() {
    setTimeout(() => {
      window.location.pathname = "/";
    }, 500);
  }
  render() {
    let user = this.props.user;
    return (
      <div className="">
        <h1>Không tìm thấy trang</h1>
        <h1>Trở về trang chủ!</h1>
      </div>
    );
  }
}
