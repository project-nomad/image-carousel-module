import React from 'react';

import { Column, Row } from 'simple-flexbox';


const FlexBox = (props) => {

  return (
    <div>
      <Column>
        <Row flexGrow={1} justifyContent="spaced" alignItems="center">
        {
          props.currentPictures.map((picture, index) => {
            return (
                <img src={picture.src} alt="picture here" width="80px" height="80px" key={index} />
                )
          })
        }
        </Row>
      </Column>
    </div>
  );
};

export default FlexBox;