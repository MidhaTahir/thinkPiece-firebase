import React, { Component } from "react";
import Authentication from "./Authentication";
import Posts from "./Posts";
import { firestore, auth } from "../firebase";
import { collectIdsAndDocs } from "../utilities";

class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribeFromFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    // it will return unsubscribe func which we will call on unmount
    this.unsubscribeFromFirestore = firestore
      .collection("posts")
      .onSnapshot((snapShot) => {
        const posts = snapShot.docs.map(collectIdsAndDocs);
        this.setState({ posts });
      });
    // we will get user object if logged in or get null if user logs out
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ user });
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromFirestore();
    this.unsubscribeFromAuth();
  };

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user} />
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
