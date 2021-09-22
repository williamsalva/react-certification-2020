import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { VideoLayerContainer } from '../VideoLayer.styles';
import Video from '../VideoComponent/Video.component';
import VideoLayer from '..';

const mockData = require('../../../utils/mocks/youtube.json');

test('Render Lsit Video', async () => {
  render(
    <div>
      {mockData.items.map((item) => (
        <Video data-testid="video" item={item} key={item.etag} />
      ))}
    </div>
  );
  expect(screen.getAllByTestId('video')).toHaveLength(25);
});

it('Render Video title', async () => {
  const component = render(
    <VideoLayerContainer>
      {mockData.items.map((item) => (
        <Video item={item} key={item.etag} />
      ))}
    </VideoLayerContainer>
  );
  component.getByText('We Are Wizeline');
  expect(component.getByText('We Are Wizeline')).toHaveTextContent(
    mockData.items[4].snippet.title
  );
});

test('Render Video Descriptions', async () => {
  const component = render(
    <VideoLayerContainer>
      {mockData.items.map((item) => (
        <Video item={item} key={item.etag} />
      ))}
    </VideoLayerContainer>
  );
  component.getByText(
    'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...'
  );
  expect(
    component.getByText(
      'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...'
    )
  ).toHaveTextContent(mockData.items[4].snippet.description);
});

test('renders VideoLayer', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<VideoLayer />);
});
