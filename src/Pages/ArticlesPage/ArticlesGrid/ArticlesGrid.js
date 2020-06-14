import React, { useRef, useEffect, useState } from 'react';
import { useGetArticles } from '@Context/Articles/Hooks/useGetArticles';
import useArticleActions from '@Context/Articles/Hooks/useArticleActions';
import './ArticlesGrid.scss';
import { ArticleCard } from '@Components/Article';
import { Row, Col, message, Button } from 'antd';
import {
  ARTCILE_CARD_GUTTER_Y,
  ARTCILE_CARD_GUTTER_X,
  ARTCILE_CARD_HEIGHT,
  CONTAINER_WIDTH,
} from '@Utils/constants';

export const ArticlesGrid = () => {
  const { articles } = useGetArticles();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(CONTAINER_WIDTH);

  useEffect(() => {
    setContainerWidth(containerRef.current.offsetWidth);
  }, [containerRef.current]);

  const { editArticle, deleteArticle, restoreArticle } = useArticleActions();

  const editArtcileHandler = (key, values) => editArticle(key, values);

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
      duration: 3,
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
    const imgWidth = (containerWidth / 12) * article.width;
    const imgHeight = ARTCILE_CARD_HEIGHT;

    return (
      !article.isDeleted && (
        <Col span={article.width * 2} key={article.url}>
          <ArticleCard
            {...article}
            imgWidth={imgWidth}
            imgHeight={imgHeight}
            onEditArticle={editArtcileHandler}
            onDeleteArticle={deleteArtcileHandler}
          />
        </Col>
      )
    );
  };

  const renderArticleRow = (articleRow, idx) => (
    <Row gutter={[ARTCILE_CARD_GUTTER_X, ARTCILE_CARD_GUTTER_Y]} key={idx}>
      {articleRow.columns.map((article) => renderArticle(article))}
    </Row>
  );

  const renderArticles = () =>
    articles.map((articleRow, idx) => renderArticleRow(articleRow, idx));

  return (
    <div className="page-content" ref={containerRef}>
      {renderArticles()}
    </div>
  );
};

export default ArticlesGrid;
