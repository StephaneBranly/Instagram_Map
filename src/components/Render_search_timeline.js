import React from "react";
import Pic_insta from "./Pic_insta";
import get from "lodash/get";
import { Card, Container } from "native-base";
import { NotFindUserCard, PrivateUserCard, ResumeUserCard } from "./User_cards";

class Render_search_timeline extends React.Component {
  render() {
    const { user_tl } = this.props;

    const isUnavailable = get(user_tl, "unavailable", false);
    const data_user = get(this.props.user_tl, "graphql.user");
    const data_user_tl = get(
      this.props.user_tl,
      "graphql.user.edge_owner_to_timeline_media.edges"
    );
    if (!data_user || !data_user_tl || isUnavailable) {
      return <NotFindUserCard />;
    }

    if (data_user.is_private === true) {
      return (
        <Container>
          <ResumeUserCard
            name={data_user.full_name}
            username={data_user.username}
            img={data_user.profile_pic_url_hd}
          />
          <PrivateUserCard />
        </Container>
      );
    }
    return (
      <Container>
        <ResumeUserCard
          name={data_user.full_name}
          username={data_user.username}
          img={data_user.profile_pic_url_hd}
        />
        <Card
          dataArray={data_user_tl}
          renderRow={({ item }) => <Pic_insta post={item} />}
        ></Card>
      </Container>
    );
  }
}
export default Render_search_timeline;
