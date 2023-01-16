import React from "react";
import { Container, SidebarInto, ItemWrapper, SubText } from "./style";
import { sidebar } from "./../../utils/sidebar";

class Sidebar extends React.Component {
  render() {
    return (
      <Container className="sidebar sidebar-scrollbar">
        {sidebar.map(({ title, data }, index) => (
          <SidebarInto key={index}>
            {title && (
              <SidebarInto.Title title="true">{title}</SidebarInto.Title>
            )}
            {data.map(({ icon: Icon, title: Subtitle }, index) => (
              <ItemWrapper key={index}>
                <Icon />
                <SidebarInto.Title>{Subtitle}</SidebarInto.Title>
              </ItemWrapper>
            ))}
          </SidebarInto>
        ))}
        <SubText>
          About Press Copyright Contact us Creators Advertise Developers
        </SubText>
        <SubText>
          TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
        </SubText>
        <SubText.Small>&copy; 2023 Google LLC</SubText.Small>
      </Container>
    );
  }
}

export default Sidebar;
