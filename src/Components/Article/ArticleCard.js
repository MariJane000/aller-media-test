import React, { useState } from 'react';
import propTypes from 'prop-types';

import { Card, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ARTCILE_CARD_HEIGHT , CONTAINER_WIDTH } from '@Utils/constants';

import './Article.scss';

export const ArticleCard = (props) => {
    const { title, url, imageUrl, width } = props;
    const [isEditing, setIsEditing] = useState(false)
    const { Meta } = Card;

    const getImageUrl = () => {
        const imgWidth = CONTAINER_WIDTH/12*width;
        const imgHeight = ARTCILE_CARD_HEIGHT;

        return `${imageUrl}&width=${imgWidth}&height=${imgHeight}`
    }

    const getImage = () => <img src={getImageUrl()} />;

    const editArticleHandler = () => {

    }

    const deleteArticleHandler = () => {
        
    }

    const getCardActions = () => {
        return [
            <Button
                key="edit"
                type="link"
                icon={<EditOutlined />}
                onClick={editArticleHandler}
            />,
            <Button
                key="remove"
                type="link"
                danger
                icon={<DeleteOutlined />}
                onClick={deleteArticleHandler}
          />
        ]
    }

    return (
        <Card       
            cover={getImage()}
            hoverable={true}
            actions={getCardActions()}
        >
        <Meta
            title={title} 
        />
           
        </Card>
    );
};



ArticleCard.propTypes = {
    title: propTypes.string,
    url: propTypes.string,
    width: propTypes.string,
    imageUrl: propTypes.string,
};

export default ArticleCard;

