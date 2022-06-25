import React from 'react';
import PaymentDeleteBtn from './PaymentDeleteBtn';
import PaymentEditBtn from './PaymentEditBtn';
import PaymentInfoBtn from './PaymentInfoBtn';
import { useTranslation } from 'react-i18next';
function PayTypeTable(props) {
    let count = 1;
    const { t } = useTranslation();
    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className='table-header' scope="col">#</th>
                        <th className='table-header' scope="col">{t("type")}</th>
                        <th className='table-header' scope="col">{t("students(total)")}</th>
                        <th className='table-header' scope="col">{t("settings")}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.payment.map(pay => (
                        <tr key={pay.id}>                            
                            <th className='table-header' scope="row">{count++}</th>
                            <td className='table-header' align='center'>{pay.name}</td>
                            <td className='table-header' align='center'>{pay.students.length}</td>
                            <td className='table-button-area' align='center'>
                                <PaymentInfoBtn pay={pay} id={props.id} value={pay.id} setId={props.setId} details={props.details} paymentDetails={props.paymentDetails}/>
                                <PaymentDeleteBtn id={props.id} value={pay.id} setId={props.setId} deletePayment={props.deletePayment}/>
                                <PaymentEditBtn setInput={props.setInput} name={pay.name} pay={pay} id={props.id} value={pay.id} setId={props.setId} updatePayment={props.updatePayment}/>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default PayTypeTable
