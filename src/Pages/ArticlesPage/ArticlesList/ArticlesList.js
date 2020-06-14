import React from 'react';
import { List, Button } from 'antd';

import useGetArticles from '@Context/Articles/Hooks/useGetArticles';

import './ArticlesList.scss';

export const ArticlesList = () => {

    const { articlesLinksMap } = useGetArticles();

    const listData = Object.values(articlesLinksMap);

    const renderListItem = (item) => {
        return (
            <List.Item>
                <Button href={item.url} target="_blank" type="link">
                    {item.title}
                </Button>
            </List.Item>
        )
    }
    return (
        <div className="page-content">
                <List
                    size="large"
                    className="articles-list"
                    dataSource={listData}
                    renderItem={(item) => renderListItem(item)}
            />
        </div>
    );
};

export default ArticlesList;
