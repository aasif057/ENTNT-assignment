import React from 'react'
import { useState } from 'react';
import orders from '../order.json';
import products from '../product.json';
import Orderlist from './Orderlist'

const Orders = ({ sidenavbar }) => {
  const [order, setOrder] = useState(orders);
  // const categories = ["Pending", "Delivered", "Shipped", "Processing"]
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [editedOrder, setEditedOrder] = useState({
    order_id: '',
    name: '',
    status: '',
    total_amount: '',
    expected_delivery: '',
    date: '',
    products: []
  })
  var total_delivered = 0
  var total_shipped = 0
  var total_processing = 0

  const handleDelete = (ordertodelete) => {
    alert("Are you sure you want to delete the order");
    const updatedProduct = order.filter(order => order !== ordertodelete);
    setOrder(updatedProduct);
    console.log(order);
  }

  const handleEdit = (ordertoedit) => {
    //To get the product name form product json using product id from order.json
    const editedProducts = ordertoedit.products.map(item => ({
      ...item,
      name: products.find(product => product.id === item.product_id)?.name || "Product Not Found"
    }));

    setSelectedOrder({ ...ordertoedit, products: editedProducts });
    setEditedOrder({ ...ordertoedit, products: editedProducts });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCategoryChange = (status) => {
    setEditedOrder(prevState => ({
      ...prevState,
      status: status
    }));
  };

  const handleSubmit = () => {
    const index = orders.findIndex(order => order.order_id === editedOrder.order_id);
    if (index !== -1) {
      const updatedOrders = [...orders];
      updatedOrders[index] = editedOrder;
      setOrder(updatedOrders);
      updateCount();
    }
  };
  
  //Function to update the count of total order status wise
  const updateCount = () => {
    order.map((item) => {
      if (item.status === "Delivered") {
        total_delivered = total_delivered + 1;
      }
      else if (item.status === "Shipped") {
        total_shipped++;
      }
      else {
        total_processing++;
      }
    })
  }
  updateCount();


  return (
    <div className={`container container-responsive ${sidenavbar ? 'sidenavbar-active' : 'sidenavbar-inactive'} `} >
      <div className='row text-center'>
        <h1 className='my-3'><span style={{ borderBottom: "2px solid gold" }}>ORDER LIST</span></h1>
      </div>
      <Orderlist orders={order} onDelete={handleDelete} onEdit={handleEdit} />
      <div className='row'>
        <div className='col-md-4 mt-3'>
          <div className="card mb-3 card2" style={{ maxWidth: "540px", height: "115px", backgroundColor: "#dc6b3e"}}>
            <div className="row g-0" style={{ flexWrap: "nowrap" }}>
              <div className="col-md-12 col-12">
                <center><div className="card-body">
                  <h2 className="card-title">{total_delivered}</h2>
                  <h5 className="card-text">Products Delivered</h5>
                </div></center>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 mt-3'>
          <div className="card mb-3 card2" style={{ maxWidth: "540px", height: "115px", backgroundColor: "#ccb62e" }}>
            <div className="row g-0" style={{ flexWrap: "nowrap" }}>
              <div className="col-md-12 col-12">
                <center><div className="card-body">
                  <h2 className="card-title">{total_shipped}</h2>
                  <h5 className="card-text">Products Shipped</h5>
                </div></center>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4 mt-3'>
          <div className="card mb-3 card2" style={{ maxWidth: "540px", height: "115px", backgroundColor: "#4c8377" }}>
            <div className="row g-0" style={{ flexWrap: "nowrap" }}>
              <div className="col-md-12 col-12">
                <center><div className="card-body">
                  <h2 className="card-title">{total_processing}</h2>
                  <h5 className="card-text">Products Processing/Pending</h5>
                </div></center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders
