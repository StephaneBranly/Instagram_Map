import React from "react";
import Pic_insta from "./Pic_insta";
import get from "lodash/get";
import { Card, Container } from "native-base";
import { NotFindUserCard, PrivateUserCard, ResumeUserCard } from "./User_cards";

//TODO : voir pour afficher tous les posts de user (et pas seulement les 11premiers)
class Render_search_timeline extends React.Component {
  render() {
    const { user_tl } = this.props;
    const data_user_tl = get(user_tl, "posts");
    if (user_tl === "user_unavaible" || !get(user_tl, "user")) {
      return <NotFindUserCard />;
    } else if (user_tl.user.is_private === true) {
      return (
        <Container>
          <ResumeUserCard
            name={user_tl.user.full_name}
            username={user_tl.user.username}
            img={user_tl.user.avatar}
          />
          <PrivateUserCard />
        </Container>
      );
    } else
      return (
        <Container>
          <ResumeUserCard
            name={user_tl.user.full_name}
            username={user_tl.user.username}
            img={user_tl.user.avatar}
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
