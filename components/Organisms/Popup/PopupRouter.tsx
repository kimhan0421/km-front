import { useRecoilValue, useSetRecoilState } from 'recoil';

import AlertCancelConfirmPopup from 'components/Organisms/Popup/AlertCancelConfirmPopup';
import AlertSuccessPopup from 'components/Organisms/Popup/AlertConfirmPopup';
import AlertLoginConfirmationPopup from 'components/Organisms/Popup/AlertLoginConfirmationPopup';
import AlertMoveToMyArchivePopup from 'components/Organisms/Popup/AlertMoveToMyArchivePopup';
import ArchivePictureOverflowPopup from 'components/Organisms/Popup/ArchivePictureOverflowPopup';
import ArchiveWirteConfirmPopup from 'components/Organisms/Popup/ArchiveWirteConfirmPopup';
import MyArchiveDetailPopup from 'components/Organisms/Popup/MyArchiveDetailPopup';
import { POPUP_NAME } from 'constants/popupName';
import { PopupNameState } from 'states';
import { setPopup } from 'states/popupName';

const PopupRouter = () => {
  const popupName = useRecoilValue(PopupNameState);
  const setPopupState = useSetRecoilState(setPopup);

  if (popupName?.length) {
    setPopupState(true);
  } else {
    setPopupState(false);
  }

  switch (popupName) {
    case POPUP_NAME.ALERT_CONFIRM:
      return <AlertSuccessPopup />;
    case POPUP_NAME.ALERT_CANCEL_CONFIRM:
      return <AlertCancelConfirmPopup />;
    case POPUP_NAME.ALERT_LOGIN_CONFIRMATION:
      return <AlertLoginConfirmationPopup />;
    case POPUP_NAME.POPUP_ARCHIVE_DETAIL:
      return <MyArchiveDetailPopup />;
    case POPUP_NAME.ALERT_MOVE_MyARCHIVE_PAGE:
      return <AlertMoveToMyArchivePopup />;
    case POPUP_NAME.ARCHIVE_WRITE_CONFIRM:
      return <ArchiveWirteConfirmPopup />;
    case POPUP_NAME.OVERFLOW_PICTURE:
      return <ArchivePictureOverflowPopup />;
    default:
      return null;
  }
};

export default PopupRouter;
