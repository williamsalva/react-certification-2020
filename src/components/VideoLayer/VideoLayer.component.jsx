import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Video from './VideoComponent/Video.component';
import { VideoLayerContainer } from './VideoLayer.styles';

import Spinner from '../Spinner/Spinner.component';

const VideoLayer = () => {
  const [videoList, setVideoList] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const API_URL =
    'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json';
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(API_URL);
        console.log(
          '🚀 ~ file: VideoLayer.component.jsx ~ line 14 ~ fetchData ~ result',
          result
        );
        setVideoList(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <VideoLayerContainer isLoading={isLoading}>
      {isLoading && <Spinner />}
      {!isLoading &&
        videoList?.items?.length > 0 &&
        videoList.items.map((item) => <Video item={item} key={item.etag} />)}
    </VideoLayerContainer>
  );
};

export default VideoLayer;
