import { AxiosResponse } from 'axios';
import { atom, selector } from 'recoil';

import customAxios from 'utils/hooks/customAxios';

export type TPostList = {
  responsePagingStatus: {
    nextPage: number;
    currentPage: number;
    pageSize: number;
    hasNext: boolean;
    totalContentsCount: number;
    currentContentsCount: number;
  };
  contents: {
    presentationImage: {
      url: string;
      link: string;
      backgroundText: string;
      dimColor: string;
      opacity: number;
      dimTarget: boolean;
    };
    typeBadge: {
      text: string;
      typeBadge: boolean;
    };
    additionalBadgeList: {
      text: string;
      typeBadge: boolean;
    }[];
    title: {
      text: string;
      link: string;
    };
    heart: {
      heartClicked: boolean;
      link: string;
    };
    listItemAdditionalInfo: {
      heartCount: number | null;
      grade: number | null;
      archiveCount: number | null;
    };
  }[];
};

export default atom({
  key: 'ListState',
  default: selector({
    key: 'ListState/default',
    get: async () => {
      const axios = customAxios();
      const { data } = (await axios({
        url: `/api/search`,
        method: 'POST',
        body: {
          requestPagingStatus: {
            currentContentsCount: 0,
            pageNumber: 0,
            pageSize: 10,
          },
          searchSortType: 'END_DATE_ASC',
        },
      })) as AxiosResponse<TPostList>;

      return data;
    },
  }),
});

// import { atom } from 'recoil';

// import { data } from 'components/Organisms/List/data';

// export default atom({
//   key: 'ListState',
//   default: data,
// });
