import React from 'react';
import Topbar from './ContentWrapper/Topbar';
import PageContent from './ContentWrapper/PageContent';
import Footer from './footer';

function ContentWrapper(){
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id='content'>
                <Topbar />
                <PageContent />
            </div>
            <Footer />
        </div>
    )
}

export default ContentWrapper;