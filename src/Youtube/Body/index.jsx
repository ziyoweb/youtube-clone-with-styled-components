import React from "react";
import { Container, BodyWrap } from "./style";
import Card from "./Card";

class Body extends React.Component {
  render() {
    return (
      <Container className="body-scrollbar">
        <BodyWrap>
          {this.props.data.length ? (
            this.props.data.map((value) => (
              <Card
                value={value}
                key={value.id}
                onDelete={this.props.onDelete}
              />
            ))
          ) : (
            <BodyWrap.Text>Not found!</BodyWrap.Text>
          )}
        </BodyWrap>
      </Container>
    );
  }
}

export default Body;
