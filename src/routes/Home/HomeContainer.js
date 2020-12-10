import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "../../api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
    checking: false,
  };
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();

      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch (error) {
      this.setState({
        error: "영화 정보를 찾을 수 없습니다.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const {
      nowPlaying,
      upcoming,
      popular,
      error,
      loading,
      // checking,
    } = this.state;
    return (
      <HomePresenter
      // nowPlaying={nowPlaying}
      // upcoming={upcoming}
      // popular={popular}
      // error={error}
      // loading={loading}
      // // checking={checking}
      />
    );
  }
}
