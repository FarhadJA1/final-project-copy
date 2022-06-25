import React from 'react'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import '../../assets/style/Navigation/FullscreenBtn.scss'
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

function FullscreenButton() {
  var elem = document.documentElement;
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  const { t } = useTranslation();
  return (
    <div className='mt-3 me-3'>
      <Tooltip title={t(`fullscreen`)} placement="bottom-end">
        <button onClick={() => openFullscreen()} type="button" className="btn btn-outline-dark fullscreen-btn"><FullscreenExitIcon /></button>
      </Tooltip>

    </div>
  )
}

export default FullscreenButton
