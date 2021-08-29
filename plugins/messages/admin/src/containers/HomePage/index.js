/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { List, PluginHeader, ListWrapper, ListHeader, ListRow, ListTitle } from "strapi-helper-plugin";
import MessageDialog from '../../components/MessageDialog';
import MessageItem from '../../components/MessageItem';
import Title from '../../components/Title';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import useMessages from '../../utils/useMessages';
import dayjs from 'dayjs';


const HomePage = () => {
  const { messages, loading } = useMessages();
  const [open, setOpen] = useState(null);

  const closeDialog = () => setOpen(null);
  const openDialog = (data) => () => {
    setOpen(data)
  }

  const handleMarkRead = (message) => () => {

  }


  return (
    <div className="container-fluid" style={{ padding: "18px 30px" }}>
      <Title title='Strapi - Message' />
      <PluginHeader title='Unread Messages' />
      {loading ? <p>Loading...</p> :
        <ListWrapper>
          {messages.filter(m => m.isUnread).map((m, i) => (
            <List key={i}>
              <MessageItem
                handleClick={openDialog(m)}
                date={dayjs(m.created_at).format('DD MMM YYYY, hh:mm a')}
                isUnread={true}
                email={m.email}
                message={m.message}
                name={m.name}
              />
            </List>
          ))}
        </ListWrapper>
      }
      {open ?
        <MessageDialog
          open={!!open}
          handleClose={closeDialog}
          date={dayjs(open.created_at).format('DD MMM YYYY, hh:mm a')}
          email={open.email}
          message={open.message}
          name={open.name}
          handleMarkRead={handleMarkRead(open)}
        /> : null}
    </div>
  );
};

export default memo(HomePage);
