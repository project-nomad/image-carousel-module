import React from 'react';

import { Column, Row } from 'simple-flexbox';


const FlexBox = (props) => {

  return (
    <div>
      <Column flexGrow={1}>
        <Row flexGrow={1} justifyContent="spaced">
        {
          props.currentPictures.map((picture) => {
            return (
                <img src={picture.src} alt="picture here" width="80px" height="80px" />
                )
          })
        }
        </Row>
      </Column>
    </div>
  );
};

export default FlexBox;