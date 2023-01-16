import React from "react";
import { Container, Wrapper, Category, Icons, Input, User } from "./style";
import Sidebar from "./Sidebar";
import Body from "./Body";
import logo from "../assets/sidebarAssets/icons/Logo.svg";
import user_logo from "../assets/bodyAssets/imgs/user-logo.png";
import { youtube_mock as data } from "../youtube_mock";

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    const onSearch = (e) => {
      console.log(e.target.value);
      let res = data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ data: res });
    };

    const onDelete = (id) => {
      console.log(id);
      let res = this.state.data.filter((item) => item.id !== id);
      this.setState({ data: res });
    };
    return (
      <Container>
        <Wrapper>
          <Category>
            <Icons.Burger />
            <Icons.Logo src={logo} alt="Logo img" />
          </Category>
          <Category>
            <Input
              type="text"
              onChange={onSearch}
              placeholder="Search only below content"
            />
            <Icons.Search />
          </Category>
          <Category>
            <Icons.Create />
            <Icons.GridMenu />
            <Icons.Bell />
            <User src={user_logo} alt="user" />
          </Category>
        </Wrapper>
        <Container flex>
          <Sidebar />
          <Body data={this.state.data} onDelete={onDelete} />
        </Container>
      </Container>
    );
  }
}

export default Youtube;
