import React, { Component } from "react";

import Posts from "./Posts";
import { firestore } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

class Application extends Component {
  state = {
    posts: [],
  };

  componentDidMount = async () => {
    // it will return unsubscribe func which we will call on unmount
    this.unsubscribe = firestore.collection("posts").onSnapshot((snapShot) => {
      const posts = snapShot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
