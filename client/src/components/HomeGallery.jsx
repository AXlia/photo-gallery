import React from 'react';
import HomeGalleryImage from './HomeGalleryImage.jsx';
import HomeGalleryVertical from './HomeVerticalGallery.jsx';
import styled from 'styled-components';

const GalleryDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  transition: 0.45s;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0s;
  border-radius: 8px;
  &:hover {
    transform-origin: center;
    transform: scale(1.025);
    /* transition: transform 0.45s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    transition-HomeGallery: transform;
    transition-duration: 0.45s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0s; */
  }
`


const HomeGallery = (props) => (
  <GalleryDiv>
    {props.photos.slice(0,1).map(photo =>
      <HomeGalleryImage photo={photo} hero={true}/>
    )}
    <HomeGalleryVertical photos={props.photos.slice(1,3)}/>
  </GalleryDiv>
);

export default HomeGallery;