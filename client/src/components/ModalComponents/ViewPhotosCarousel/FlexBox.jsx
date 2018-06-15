import React from 'react';

import { Column, Row } from 'simple-flexbox';


const FlexBox = (props) => {

  return (
    <div>
      <Column>
        <Row flexGrow={1} justifyContent="spaced" alignItems="center">
        {
            props.currentPictures.map(({ src, id} ) => {
            return <img src={src} alt="picture here" width="80px" height="80px" key={id} />;

          })
        }
        </Row>
      </Column>
    </div>
  );
};

export default FlexBox;