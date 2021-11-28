import useAuth from './../../Login/Hooks/useAuth'

const ManageOrders = () => {
const { orders } = useAuth()
    // console.log(orders)
    return (
        <div>
            <div className="flex border-2 justify-around">
            <p>Product Name</p>
            <p>Unit Price</p>
            <p>Paument</p>
            <p>Address</p>
            <p>Contruct</p>
            <p>Delivery Status</p>
        </div>
        <div>
            {orders.map(order => <ShoeOrders order={order} key={order._id} />)}
        </div>
        </div>
    );
};

export default ManageOrders;

const ShoeOrders = (props) =>{
    const { unitPrice, productName, payment, delAddress, contruct} = props.order;

    const handleDelStatus = e =>{
    
        e.preventDefault();
    }
    
    return(
        <div className="flex border-2 justify-around m-2">
            <p>{productName}</p>
            <p>{unitPrice}</p>
            <p>{payment}</p>
            <p>{delAddress}</p>
            <p>{contruct}</p>

            <form onSubmit={handleDelStatus}>
                <select id="dStatus" name="dStatus">
                    <option value="shipped">Shipped</option>
                    <option value="On The Way">On the Way</option>
                    <option value="At Door">At Door</option>
                </select>
                <input type="submit" value="submit"/>
            </form>

        </div>
    )
}