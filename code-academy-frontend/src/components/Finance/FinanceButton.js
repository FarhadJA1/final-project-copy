import React from 'react'
import DatePicker from "react-datepicker";
import { useTranslation } from 'react-i18next';
function FinanceButton(props) {
    const { t } = useTranslation();
    return (
        <div>
            <button type="button" className="btn btn-outline-success finance-create-btn" data-bs-toggle="modal" data-bs-target="#create-finance">
                {t("create report")}
            </button>


            <div className="modal fade" id="create-finance" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t("please fill the blank")}</h5>
                            <button type="button" className="btn-close finance-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body  finance-modal-body">
                            <div>
                                <DatePicker
                                    selected={props.createDate}
                                    onChange={date => props.setCreateDate(date)}
                                    className="finance-create-date"
                                    dateFormat='dd/MM/yyyy'
                                    maxDate={new Date()}
                                    isClearable
                                    showYearDropdown
                                    scrollableMonthYearDropdown
                                    placeholderText={t("report date")}
                                />
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.createReport()} type="button" className="btn btn-outline-primary finance-btn" data-bs-dismiss="modal">{t("save")}</button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-outline-warning finance-btn">{t("cancel")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinanceButton
