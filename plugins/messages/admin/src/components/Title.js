import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';


const PageTitle = ({ title }) => (
    <Helmet title={title} />
);

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default memo(PageTitle);
