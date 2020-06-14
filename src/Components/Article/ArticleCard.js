import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Card, Button, Form, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import './Article.scss';

export const ArticleCard = (props) => {
  const {
    title,
    url,
    imageUrl,
    imgWidth,
    imgHeight,
    onEditArticle,
    onDeleteArticle,
  } = props;
  const [isEditing, setIsEditing] = useState(false);

  const { Meta } = Card;
  const [form] = Form.useForm();

  const getImageUrl = () => {
    return `${imageUrl}&width=${imgWidth}&height=${imgHeight}`;
  };

  const getImage = () => <img src={getImageUrl()} alt={title} />;

  const editArticleHandler = () => {
    setIsEditing(true);
  };

  const deleteArticleHandler = () => {
    onDeleteArticle(url);
  };

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
      />,
    ];
  };

  const saveArtcileHanlder = (values) => {
    setIsEditing(false);
    onEditArticle(url, values);
  };

  const cancelArtcileHanlder = () => {
    form.resetFields();
    setIsEditing(false);
  };

  const renderEditableTitle = () => (
    <Form
      form={form}
      initialValues={{ title: title }}
      onFinish={saveArtcileHanlder}
    >
      <Form.Item name="title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <ul className="ant-card-actions ant-card-form-actions">
        <li>
          <Form.Item>
            <Button type="link" htmlType="submit">
              SAVE
            </Button>
          </Form.Item>
        </li>
        <li>
          <Form.Item>
            <Button type="link" danger onClick={cancelArtcileHanlder}>
              CANCEL
            </Button>
          </Form.Item>
        </li>
      </ul>
    </Form>
  );

  const getTitle = () => (isEditing ? renderEditableTitle() : title);

  const getLink = () =>
    !isEditing && (
      <Button className="card-link" type="link" href={url} target="_blank" />
    );

  return (
    <Card cover={getImage()} hoverable={true} actions={getCardActions()}>
      {getLink()}
      <Meta title={getTitle()} />
    </Card>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  imageUrl: PropTypes.string,
  onEditArticle: PropTypes.func,
  onDeleteArticle: PropTypes.func,
};

export default ArticleCard;
