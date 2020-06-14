import React from 'react';
import { useGetArticles } from '@Context/Articles/Hooks/useGetArticles';
import useArticleActions from '@Context/Articles/Hooks/useArticleActions';
import './ArticlesGrid.scss';
import { ArticleCard } from '@Components/Article';
import { Row, Col, message, Button } from 'antd';

export const ArticlesGrid = () => {
  const { articles } = useGetArticles();

  const { editArticle, deleteArticle, restoreArticle } = useArticleActions();

  const editArtcileHandler = (key, values) => {
    editArticle(key, values);
  };

  const deleteArtcileHandler = (key) => {
    deleteArticle(key);
    closeRestorePopup();
    showRestorePopup(key);
  };

  const restoreArticleHandler = (key) => {
    restoreArticle(key);
    closeRestorePopup();
  };

  const restoreButton = (key) => (
    <Button type="link" onClick={() => restoreArticleHandler(key)}>
      Restore
    </Button>
  );

  const restoreMessage = (key) => (
    <span>
      Article has been deleted.
      {restoreButton(key)}
    </span>
  );

  const showRestorePopup = (key) => {
    message.config({
      duration: 5,
      maxCount: 1,
    });

    message.info({
      content: restoreMessage(key),
    });
  };

  const closeRestorePopup = () => {
    message.destroy();
  };

  const renderArticle = (article) => {
    return (
      !article.isDeleted && (
        <Col span={article.width * 2} key={article.url}>
          <ArticleCard
            {...article}
            onEditArticle={editArtcileHandler}
            onDeleteArticle={deleteArtcileHandler}
          />
        </Col>
      )
    );
  };

  const renderArticleRow = (articleRow, idx) => (
    <Row gutter={[16, 16]} key={idx}>
      {articleRow.columns.map((article) => renderArticle(article))}
    </Row>
  );

  const renderArticles = () =>
    articles.map((articleRow, idx) => renderArticleRow(articleRow, idx));

  return <div className="page-content">{renderArticles()}</div>;
};

export default ArticlesGrid;
