import React from 'react';

import wrapperCSS from './Wrapper.module.css';
import centerCSS from './Center.module.css';
import flowCSS from './Flow.module.css';
import coverCSS from './Cover.module.css';

// Flow
const Flow = (props) => {
    return <div className={flowCSS.flow}>{props.children}</div>;
};

// Wrapper
const Wrapper = (props) => {
    return <div className={wrapperCSS.wrapper}>{props.children}</div>;
};

// Center
const Center = (props) => {
    return <div className={centerCSS.center}>{props.children}</div>;
};

// Cover
const Cover = (props) => {
    return <div className={coverCSS.cover}>{props.children}</div>;
};

export { Wrapper, Center, Flow, Cover };