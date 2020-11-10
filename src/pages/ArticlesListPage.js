import React, { Component } from "react";
import articleContent from "./articleContent";
import ArticlesList from "../components/ArticlesList";

export default class ArticlesListPage extends Component {
  render() {
    return (
      <>
        <h1>This is the articles list</h1>
        <ArticlesList articles={articleContent} />
      </>
    );
  }
}
