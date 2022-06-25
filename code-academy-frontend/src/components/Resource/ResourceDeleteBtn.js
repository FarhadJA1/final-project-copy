import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next';
function ResourceDeleteBtn(props) {
    const { t } = useTranslation();
    return (
        <div>
            <Tooltip title={t("delete resource")} placement="bottom-end">
                <button type="button" onClick={(e) => props.setId(e.target.value)} value={props.value} className="btn btn-outline-danger resource-button mx-2" data-bs-toggle="modal" data-bs-target={'#delete-resource' + props.id}><DeleteOutlineOutlinedIcon /></button>
            </Tooltip>

            <div className="modal fade" id={'delete-resource' + props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close resource-button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        {t("are you sure to permanently delete this resource type?")}
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-danger resource-button" onClick={() => props.deleteResource()}>{t("delete")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning resource-button">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceDeleteBtn
