import React from 'react';
import TopCard from './TopCard';
import Category from './Category';

function PageContent(){
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div className="row">
                <TopCard borderType = 'primary' title='Products in Data Base' icon= 'fa-clipboard-list' number = '135' />
                <TopCard borderType = 'success' title='Amount in products' icon= 'fa-dollar-sign' number = '$546.456' />
                <TopCard borderType = 'warning' title='Users quantity' icon= 'fa-user-check' number = '38' />
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem;"}} src="assets/images/product_dummy.svg" alt="image dummy" />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                            <a target="_blank" rel="nofollow" href="/">View product detail</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <Category title='Category 01'/>
                                <Category title='Category 02'/>
                                <Category title='Category 03'/>
                                <Category title='Category 04'/>
                                <Category title='Category 05'/>
                                <Category title='Category 06'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default PageContent;