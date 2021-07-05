import styled from "styled-components"

const OrderDiv = styled.div`
 /* background-color: white; */

 .button {
    height: 32px;
width: 60px;
padding: 8px, 10px, 8px, 10px;
border: 1px solid B8B8B8;


 }
 .active {
    
     background-color: white;
     border:0;
 }
 .inactive {
    background-color: B8B8B8;
     
     /* border:none; */
 }
`;
export default function OrderComponent({ selectedOrder, setSelectedOrder }) {
    // console.log(selectedOrder);

    const OrderHandler = (event) => {
        setSelectedOrder(event.target.value)

    }

    return <OrderDiv>
        <button className={selectedOrder === "ASC" ? "button order-asc active" : "button order-asc inactive"} value="ASC" onClick={OrderHandler}>ASC</button>
        <button className={selectedOrder === "DESC" ? "button order-desc active" : "button order-desc inactive"} value="DESC" onClick={OrderHandler}>DESC</button>
    </OrderDiv>
}