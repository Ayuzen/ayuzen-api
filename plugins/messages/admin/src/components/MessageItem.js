import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 16px 24px;
    border-bottom: 1px solid #ddd;
    transition: 150ms ease-in;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
`;

const Text = styled.div`
    flex: 1
`
const Message = styled.div`
    flex: 3
`

function MessageItem(props) {
    const style = { fontWeight: props.isUnread ? 'normal' : 'normal' };
    return (
        <Container onClick={props.handleClick}>
            <Text style={style}>{props.date}</Text>
            <Text style={style}>{props.name}</Text>
            <Text style={style}>{props.email}</Text>
            <Message style={style}>{props.message}</Message>
        </Container>
    )
}

MessageItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isUnread: PropTypes.bool,
    handleClick: PropTypes.func
};

export default memo(MessageItem);