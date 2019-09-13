import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

//TODO: Actually connect with backend data before rendering this component.
const mockedProduct = {
    _id: "5d7bcaca538da68f9d3ba3d9",
    name: "demo Product",
    groenies: "10",
    dercription: "random description",
    img: "gatsby-astronaut.png",
    barcode: "12356"
};


const DetailsPage = () => (
    //TODO: Navigate to Barcode page when clicking checkout button
    <Layout>
      <h2 style={{textAlign: 'right'}}> total amount: 1</h2>
    <h2>Product: {mockedProduct.name}</h2>
      <div className={'row'}>
          <div className={'col-6'}>
              <p>Groenies: <b>{mockedProduct.groenies}</b></p>
            <p>Description: </p>
            <textarea style={{minHeight: 200}} disabled={true}>{mockedProduct.dercription}</textarea>
          </div>
          <div className={'col-6'}>
              <img src={require(`../images/` + mockedProduct.img)} alt={'product'} />
          </div>
      </div>
    <Link className={`btn btn-primary`}
          style={{ background: '#FDC513', color: 'black', borderColor:'#FDC513', marginLeft: 400, marginTop: 40}}
          to="/">Checkout
    </Link>
  </Layout>
);

export default DetailsPage;
