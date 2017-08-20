import AppRouter from "./AppRouter";
import { LocaleProvider } from "antd";
import viVN from "antd/lib/locale-provider/vi_VN";
//store
import user from "@/mobx/userStore";
export default class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={viVN}>
        <Provider user={user}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </Provider>
      </LocaleProvider>
    );
  }
}
