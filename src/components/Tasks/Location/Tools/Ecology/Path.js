import React from 'react';

const Path = ({title, img}) => {
    const cutWidth = (title) => {
        if (title.length > 35) {
            return '244px'
        }
    }
    return (
        <div className='tools__ecology-flex'>
            {/*<div className="tools__img">*/}
            {/*    <img src={img} alt={title}/>*/}
            {/*</div>*/}
            {/*<span className="tools__title"*/}
            {/*      style={{width: cutWidth(title)}}>{title}</span>*/}
        </div>
    );
};

export default Path;