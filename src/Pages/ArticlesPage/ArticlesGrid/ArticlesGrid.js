import React, {useEffect} from 'react';
import { useGetArticles } from '@Context/Articles/Hooks/useGetArticles';
import Loader from '@Components/Loader/Loader';
import './ArticlesGrid.scss';
import { ArticleCard } from '@Components/Article';
import { Row, Col } from 'antd';

export const ArticlesGrid = () => {
    const { articles, getArticles } = useGetArticles();


    const renderArticle = (article) => (
        <ArticleCard {...article}/>
    )

    const renderArticleCol = (col) => (
        <Col span={col.width*2}>
            {renderArticle(col)}
        </Col>
    )

    const renderArticleRow = (articleRow) => (
        <Row gutter={[16,16]}>
            { articleRow.columns.map(articleCol => renderArticleCol(articleCol)) }
        </Row>
    )


    const renderArticles = () => (
        articles.map(articleRow => renderArticleRow(articleRow))
    )
    

    return (
        <div className="page-content">
            { renderArticles() }
        </div>
    );
};

export default ArticlesGrid;
