import { useState } from 'react';
import Header from '../../../components/Account/Header/Header';
import main from '../../../components/Main.module.scss';
import './Account.scss';
import AccountAmount from './Partials/AccountAmount/AccountAmount';

export default function Account() {
    const [activeTab, setActiveTab] = useState('Assets');

    return (
        <div className={main}>
            <Header />
            <div className={main.AccountLayout}>
                <div className="account-main">
                    <div className="account-header">
                        <div className="empty"></div>
                        <div className="account-header-copy">
                            <div className="title">Account 1</div>
                            <div className="id">0xb12...6bf8</div>
                        </div>
                        <div className="account-header-menu">...</div>
                    </div>
                    <div className="account-info">
                        <AccountAmount />

                        <div className="account-tabs">
                            <div className="account-tabs-control">
                                <div
                                    className={
                                        activeTab === 'Assets'
                                            ? 'account-tabs-control-tab active'
                                            : 'account-tabs-control-tab'
                                    }
                                    onClick={() => setActiveTab('Assets')}
                                >
                                    Assets
                                </div>
                                <div
                                    className={
                                        activeTab === 'Activity'
                                            ? 'account-tabs-control-tab active'
                                            : 'account-tabs-control-tab'
                                    }
                                    onClick={() => setActiveTab('Activity')}
                                >
                                    Activity
                                </div>
                            </div>

                            <tab-group>
                                {activeTab === 'Assets' ? (
                                    <div className="tab tab-assets">
                                        <div className="tab-assets__item">
                                            <div className="amount">
                                                <div className="img">E</div>
                                                <div className="text">
                                                    <div className="coin">
                                                        0 ETH
                                                    </div>
                                                    <div className="dol">
                                                        $0.00 USD
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="img"></div>
                                        </div>
                                        <div className="desc">
                                            Don't see your token?
                                            <div className="desc-links">
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a href="#">Refresh list</a>
                                                or
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a href="#">import token</a>
                                            </div>
                                        </div>
                                    </div>
                                ) : activeTab === 'Activity' ? (
                                    <div className="tab tab-activity">
                                        You have no transactions
                                    </div>
                                ) : null}
                            </tab-group>
                        </div>
                    </div>
                </div>
                <div className="account-desc">
                    Need help? Contact
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Holduz Support</a>
                </div>
            </div>
        </div>
    );
}
