import React, { useState, useEffect } from 'react';
import NotFoundPage from '../NotFoundPage';
import ItemsList from '../../components/shop/ItemsList';
import itemDescription from './item-description';

import '../../vendor/bootstrap/css/bootstrap.min.css';
import '../../css/modern-business.css';

const ItemPage = ({ match }) => {
  const name = match.params.name;
  const item = itemDescription.find(item => item.name === name);

  if (!item) return <NotFoundPage />

  return (
      <>
      <div class="container">


        <h1 class="mt-4 mb-3">{item.title}</h1>
        <div class="row">

          <div class="col-md-8">
            <img src={process.env.PUBLIC_URL + `public/Images/${name}.jpg`} alt="hihi"></img>
          </div>
          <div class="col-md-4">
            <h3 class="my-3">Project Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
            <h3 class="my-3">Project Details</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Dolor Sit Amet</li>
              <li>Consectetur</li>
              <li>Adipiscing Elit</li>
            </ul>
          </div>

        </div>

      </div>
      </>
  );
}
export default ItemPage;
