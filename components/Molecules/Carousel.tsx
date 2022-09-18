import { css } from '@emotion/react';
import { useRef, useState } from 'react';

import { FlexBox, Box } from 'components/Atoms';
import CarouselItem from 'components/Molecules/CarouselItem';
import theme from 'styles/theme';

export default function Carousel({
  imgUrlArr,
  width,
  height,
}: {
  imgUrlArr: string[];
  width: string;
  height: string;
}) {
  const rootRef = useRef<any>();
  const [nowIndex, setNowIndex] = useState<Number>(1);

  const handleIndicator = (index: Number) => {
    setNowIndex(index);
  };
  return (
    <Box position="relative">
      {imgUrlArr.length > 1 ? (
        <Box
          width="inherit"
          height="fit-content"
          position="absolute"
          fontSize="14px"
          lineHeight="0.91px"
          textAlign="right"
          letterSpacing="0.11px"
          bottom="15px"
          right="15px"
          zIndex="100"
          color={theme.colors.black}
        >
          <>
            {nowIndex} / {imgUrlArr.length}
          </>
        </Box>
      ) : null}
      <Box
        width={width}
        height={height}
        overflowY="hidden"
        overflowX={imgUrlArr.length < 2 ? 'hidden' : 'scroll'}
        css={css`
          scroll-snap-type: x mandatory;
        `}
        ref={rootRef}
      >
        <FlexBox width="max-content" height="inherit" flexDirection="row">
          {imgUrlArr.map((imgUrl, _index) => (
            <CarouselItem
              itemOrder={_index}
              key={_index}
              imgUrl={imgUrl}
              rootRef={rootRef}
              handleIndicator={handleIndicator}
              width={width}
              height={height}
            />
          ))}
        </FlexBox>
      </Box>
    </Box>
  );
}
