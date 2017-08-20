import { Menu, Icon, Spin, Button } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@inject("user")
@observer
export default class NavMenu extends React.Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    let { key } = e;
    switch (key) {
      case "login":
        this.props.user.login();
        break;
      case "logout":
        this.props.user.logout();
        break;
      default:
        break;
    }
  };
  render() {
    let user,
      { isLogin, logout, login } = this.props.user;
    return (
      <Menu onClick={this.handleClick} mode="horizontal">
        <Menu.Item key="home" style={{ float: "right" }}>
          <Link to="/">
            <Icon type="home" />Trang chủ
          </Link>
        </Menu.Item>
        {isLogin === null
          ? <Menu.Item key="loading">
              <Spin />
            </Menu.Item>
          : isLogin
            ? <SubMenu
                style={{ float: "left" }}
                title={
                  <span>
                    <Icon type="setting" />Tùy chọn
                  </span>
                }>
                <MenuItemGroup title="Tài khoản">
                  <Menu.Item key="logout">
                    <Icon type="logout" /> Đăng xuất
                  </Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            : <Menu.Item key="login">
                <Button size="large" type="primary" icon="login">
                  Đăng nhập
                </Button>
              </Menu.Item>}

        {process.env.NODE_ENV === "development" &&
          window.innerWidth > 500 &&
          <Menu.Item key="doc">
            <Link to="/docs">
              <Icon type="info-circle-o" />
              Tài liệu
            </Link>
          </Menu.Item>}
      </Menu>
    );
  }
}
