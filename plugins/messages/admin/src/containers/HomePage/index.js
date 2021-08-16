/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
import { List, PluginHeader, ListWrapper, ListHeader, ListRow, ListTitle } from "strapi-helper-plugin";
import MessageItem from '../../components/MessageItem';

// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

const HomePage = () => {
  return null
  return (
    <div className="container-fluid" style={{ padding: "18px 30px" }}>
      <PluginHeader title='Unread Messages' />
      <ListWrapper>
        {[1, 2, 4, 5].map(i => (
          <List key={i}>
            <MessageItem isUnread={i === 1} email="asdas@mail.com" message='asdasdasdasd' name='Mukut Brahma' />
          </List>
        ))}
      </ListWrapper>
    </div>
  );
};

export default memo(HomePage);
