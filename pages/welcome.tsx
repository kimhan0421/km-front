import { useRouter } from 'next/router';

import { MyPageImageAsset } from 'assets/mypage';
import { Box, Button, Span } from 'components/Atoms';
import theme from 'styles/theme';
import { useUserProps } from 'utils/authentication/useUser';
import { useInitHeader } from 'utils/hooks/useInitHeader';

const HEADER_SPACE = 45;
const APP_BAR_SPACE = 60;
const LAST_BUTTON = 60;

export const getServerSideProps = useUserProps;
export default function Welcome() {
  const router = useRouter();
  useInitHeader({ headerLeft: 'disabled', headerRight: 'disabled' });
  return (
    <Box paddingLeft={15} paddingRight={15}>
      <Box
        style={{
          height: `calc(100vh - (${HEADER_SPACE}px + ${APP_BAR_SPACE}px + ${LAST_BUTTON}px + var(--platformBottomArea)))`,
        }}
        paddingTop={45}
      >
        <Box
          fontFamily={'SpoqaHanSansNeo'}
          fontSize={32}
          fontWeight={500}
          fontStyle={'normal'}
          lineHeight={0.94}
          letterSpacing={'normal'}
          textAlign={'left'}
          color={theme.colors.black}
          marginBottom={22}
        >
          반갑습니다
        </Box>
        <Box>
          <Span
            fontFamily={'SpoqaHanSansNeo'}
            fontSize={22}
            fontWeight={500}
            fontStyle={'normal'}
            lineHeight={1.55}
            letterSpacing={'normal'}
            textAlign={'left'}
            color={theme.colors.black}
            display={'box'}
          >
            문화생활 플랫폼
          </Span>
          <Box display={'flex'}>
            <MyPageImageAsset width={103} height={30} type={'logo'} />
            <Box
              fontFamily={'SpoqaHanSansNeo'}
              fontSize={22}
              fontWeight={500}
              fontStyle={'normal'}
              lineHeight={1.55}
              letterSpacing={'normal'}
              textAlign={'left'}
              color={theme.colors.black}
              paddingLeft={'4px'}
            >
              에 오신걸
            </Box>
          </Box>
          <Box
            fontFamily={'SpoqaHanSansNeo'}
            fontSize={22}
            fontWeight={500}
            fontStyle={'normal'}
            lineHeight={1.55}
            letterSpacing={'normal'}
            textAlign={'left'}
            color={theme.colors.black}
          >
            환영합니다
          </Box>
        </Box>
      </Box>
      <Button
        width={'100%'}
        textAlign={'center'}
        backgroundColor={theme.colors.lime}
        height={'50px'}
        fontFamily={'SpoqaHanSansNeo'}
        fontSize={16}
        fontWeight={500}
        fontStyle={'normal'}
        lineHeight={1.5}
        letterSpacing={'normal'}
        color={theme.colors.black}
        paddingTop={'15px'}
        paddingBottom={'14px'}
        onClick={() => router.push('/')}
      >
        킬로미터 시작하기
      </Button>
    </Box>
  );
}
