import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Dialog = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1600;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00000088;
`

const Container = styled.div`
    background-color: white;
    padding: 32px;
    border-radius: 8px;
    position: relative;
    width: 600px;
`
const Title = styled.h4`
font-size: 20px;
`
const Subitle = styled.span`
    font-size: 12px;
    color: #303030;
`
const Body = styled.p`
    margin-block-start: 20px;
`

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ccc;
    border-radius: 50%;
    width: 32px;
    height: 32px;
`

const SubContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Button = styled.button`
    background-color: var(--primary);
    padding: 8px 16px;
    color: white;
    font-size: 14px;
    margin-top: 32px;
    float: right;
`

function MessageDialog(props) {
    const { open, handleClose, email, date, message, name, handleMarkRead } = props;
    return open ? (
        <Dialog>
            <Container>
                <CloseButton onClick={handleClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </CloseButton>
                <Title>{name}</Title>
                <SubContainer>
                    <Subitle>{email}</Subitle>
                    <Subitle>{date}</Subitle>
                </SubContainer>
                <Body>
                    {message}
                </Body>
                <Button onClick={handleMarkRead}>MARK READ</Button>
            </Container>
        </Dialog>
    ) : null
}

MessageDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    handleMarkRead: PropTypes.func

};

export default MessageDialog