import styled, { css } from "styled-components";

import { ReactComponent as home } from "../assets/sidebarAssets/icons/home.svg";
import { ReactComponent as shorts } from "../assets/sidebarAssets/icons/shorts.svg";
import { ReactComponent as subscriptions } from "../assets/sidebarAssets/icons/subscriptions2.svg";
import { ReactComponent as library } from "../assets/sidebarAssets/icons/library2.svg";
import { ReactComponent as history } from "../assets/sidebarAssets/icons/history2.svg";
import { ReactComponent as your_videos } from "../assets/sidebarAssets/icons/your-vedios2.svg";
import { ReactComponent as watch_later } from "../assets/sidebarAssets/icons/watch-later2.svg";
import { ReactComponent as liked_vedios } from "../assets/sidebarAssets/icons/liked-vedios2.svg";
import { ReactComponent as show_more } from "../assets/sidebarAssets/icons/show-more.svg";
import { ReactComponent as trands } from "../assets/sidebarAssets/icons/trends.svg";
import { ReactComponent as music } from "../assets/sidebarAssets/icons/music.svg";
import { ReactComponent as live } from "../assets/sidebarAssets/icons/live.svg";
import { ReactComponent as gaming } from "../assets/sidebarAssets/icons/gaming.svg";
import { ReactComponent as news } from "../assets/sidebarAssets/icons/news.svg";
import { ReactComponent as learning } from "../assets/sidebarAssets/icons/learning.svg";
import { ReactComponent as sub_photo } from "../assets/sidebarAssets/icons/sub_photo.svg";

export const Icon = styled.div``;

const common = css`
  width: 20px;
  height: 20px;
  margin-right: 24px;
  & path {
    fill: #fff;
  }
`;

Icon.Home = styled(home)`
  ${common}
  width: 24px;
  height: 24px;
`;
Icon.Shorts = styled(shorts)`
  ${common}
`;
Icon.subscriptions = styled(subscriptions)`
  ${common}
`;
Icon.Library = styled(library)`
  ${common}
`;
Icon.History = styled(history)`
  ${common}
`;
Icon.Your_videos = styled(your_videos)`
  ${common}
`;
Icon.Watch_later = styled(watch_later)`
  ${common}
`;
Icon.Liked_vedios = styled(liked_vedios)`
  ${common}
`;
Icon.Show_more = styled(show_more)`
  ${common}
  width: 22px;
  height: 8px;
`;
Icon.Trands = styled(trands)`
  ${common}
  width: 22px;
  height: 24px;
`;
Icon.Music = styled(music)`
  ${common}
`;
Icon.Live = styled(live)`
  ${common}
`;
Icon.Gaming = styled(gaming)`
  ${common}
`;
Icon.News = styled(news)`
  ${common}
`;
Icon.Learning = styled(learning)`
  ${common}
  & path {
    fill: #fff;
  }
`;
Icon.Sub_photo = styled(sub_photo)`
  ${common}

  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #777;
`;

export const sidebar = [
  {
    id: 1,
    data: [
      { id: 1, icon: Icon.Home, title: "Home" },
      { id: 2, icon: Icon.Shorts, title: "Shorts" },
      { id: 3, icon: Icon.subscriptions, title: "Subscriptions" },
    ],
  },
  {
    id: 2,
    data: [
      { id: 1, icon: Icon.Library, title: "Library" },
      { id: 2, icon: Icon.History, title: "History" },
      { id: 3, icon: Icon.Your_videos, title: "Your videos" },
      { id: 4, icon: Icon.Watch_later, title: "Watch later" },
      { id: 5, icon: Icon.Liked_vedios, title: "Liked videos" },
      { id: 6, icon: Icon.Show_more, title: "Show more" },
    ],
  },
  {
    id: 3,
    title: "Subscriptions",
    data: [
      { id: 1, icon: Icon.Sub_photo, title: "Nadir On The Go" },
      { id: 2, icon: Icon.Sub_photo, title: "Coke Studio Bangla" },
      { id: 3, icon: Icon.Sub_photo, title: "MKBHD" },
      { id: 4, icon: Icon.Sub_photo, title: "Figma" },
      { id: 5, icon: Icon.Sub_photo, title: "ATC Android ToTo C..." },
      { id: 6, icon: Icon.Sub_photo, title: "Alux.com" },
      { id: 7, icon: Icon.Show_more, title: "Show more" },
    ],
  },
  {
    id: 4,
    title: "Explore",
    data: [
      { id: 1, icon: Icon.Trands, title: "Trending" },
      { id: 2, icon: Icon.Music, title: "Music" },
      { id: 3, icon: Icon.Live, title: "Live" },
      { id: 4, icon: Icon.Gaming, title: "Gaming" },
      { id: 5, icon: Icon.News, title: "News" },
      { id: 6, icon: Icon.Learning, title: "Learning" },
    ],
  },
];
