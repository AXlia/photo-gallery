import React from 'react';
import styled from 'styled-components';
import { Close } from '@styled-icons/ionicons-outline/'

// Build as modal
// Property details at top:
// Address | Cost | # beds # baths

const MultiGalleryContainer = styled.div`
  /* border-radius: 8px; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  align-items: center;
  width: 75%;
  border: 3px solid purple;
  background: white;
`

const MultiGalleryDiv = styled.div`
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  border: 5px solid black;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Row1Div = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid red;
`

const Row2Div = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid green;
`

const Row3Div = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid blue;
`

const CloseButton = styled(Close)`
  color: rgb(59, 65, 68);
  outline: none;
  box-sizing: border-box;
  border: none;
  background: none;
  text-decoration: none;
  position: absolute;
  top: 5px;
  right: 5px;
  height: 40px;
  &:hover {
    color: rgb(0, 120, 130);
  }
`

const rowDivs = [
  Row1Div,
  Row2Div,
  Row3Div
]

const MultiGallery = ({closeFunction, multiGalleryOpen, photos, address, cost, beds, baths}) => {
  return (
    multiGalleryOpen === true
    ? <MultiGalleryContainer>
        <MultiGalleryDiv>
          {
            threeGroups(photos).map(row =>
              buildRow(row)
            )
          }
        </MultiGalleryDiv>
        <CloseButton onClick={closeFunction}>X</CloseButton>
      </MultiGalleryContainer>
    : null
  );
};

const threeGroups = (photos) => {
  let grouped = [];
  let count;
  let lastCount;
  for (let i = 0; i < photos.length; i += count) {
    count = Math.floor(Math.random() * 3) + 1;
    if (count === lastCount) {
      count = (count % 3) + 1;
    }
    let group = photos.slice(i, i + count);
    grouped.push(group);
    lastCount = count;
  }
  return grouped;
};

const buildRow = (photos) => {
  const Element = rowDivs[photos.length - 1];
  return (
    <Element>
      {photos.map(photo =>
        <img src={photo.link}></img>
      )}
    </Element>
  );
};


export default MultiGallery;
