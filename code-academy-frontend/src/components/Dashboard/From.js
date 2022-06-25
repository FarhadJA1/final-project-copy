import React from 'react'
import { useTranslation } from 'react-i18next';
function From() {
    const { t } = useTranslation();
    return (
        <div className='container'>
            <div className="row mt-5 from">
                <div className="col-lg-3 info phone">
                    <div className="col-lg-4 icon">
                        <i className="fas fa-phone-alt"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>{t(`from call`)}</p>
                        <p className='detail-sum'>23.7k</p>
                    </div>
                </div>

                <div className="col-lg-3 info social-network">
                    <div className="col-lg-4 icon">
                        <i className="fas fa-share-alt"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>{t(`from social networks`)}</p>
                        <p className='detail-sum'>23.7k</p>
                    </div>
                </div>
                <div className="col-lg-3 info web">
                    <div className="col-lg-4 icon">
                        <i className="fas fa-globe"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>{t(`from web`)}</p>
                        <p className='detail-sum'>23.7k</p>
                    </div>
                </div>
                <div className="col-lg-3 info suggestion">
                    <div className="col-lg-4 icon">
                        <i className="fas fa-people-arrows"></i>
                    </div>

                    <div className="col-lg-8 details">
                        <p className='detail-text'>{t(`from suggestion`)}</p>
                        <p className='detail-sum'>23.7k</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default From
