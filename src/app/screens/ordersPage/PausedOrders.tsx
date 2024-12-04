import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";

import { createSelector } from "reselect";
import { retrievePausedOrders } from "./selector";
import { useSelector } from "react-redux";
import { Messages, serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/product";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { T } from "../../../lib/types/common";
import { OrderStatus } from "../../../lib/enums/order.enum";
import { useGlobals } from "../../hooks/useGlobals";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";

/** Redux slice & Selector */
 
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

interface PausedOrdersProps {
  setValue: (input: string) => void
}

export default function PausedOrders(props: PausedOrdersProps) {
    const {setValue} = props;
    const {authMember, setOrderBuilder} = useGlobals()
    const {pausedOrders} = useSelector(pausedOrdersRetriever);
    

  /**Handlers */
  const deleteOrderHandler = async(e: T) => {
    try{
      if(!authMember) 
        throw new Error(Messages.error2)
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId, 
        orderStatus: OrderStatus.DELETE,
      }

      const confirmation = window.confirm("Do you want to delete the orders?")
      if(confirmation) {
        const order = new OrderService();
        await order.updateOrders(input);
        //Order ReBuild
        setOrderBuilder(new Date());
      }
    } catch(err) {
      console.log(err)

    }
  }

  const processOrderHandler = async(e: T) => {
    try{
      if(!authMember) 
        throw new Error(Messages.error2)
      //Payment Process
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId, 
        orderStatus: OrderStatus.PROCESS,
      }

      const confirmation = window.confirm("Do you want to proceed the payment?")
      if(confirmation) {
        const order = new OrderService();
        await order.updateOrders(input);
        setValue("2");
        setOrderBuilder(new Date());
      }
    } catch(err) {
      console.log(err)
      sweetErrorHandling(err).then();

    }
  }

  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders.length > 0 ? (
          pausedOrders.map((order: Order) => (
            <Box key={order._id} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
               {order?.orderItems?.map((item: OrderItem) => {
               const product: Product = order.productData.filter(
               (ele: Product) => item.productId === ele._id
                )[0];
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                    return (
              <Box key={item._id} className={"orders-name-price"}>
               <img src={"/img/cutlet.webp"} className={"order-dish-img"} />
               <p className={"title-dish"}>{product.productName}</p>
             <Box className={"price-box"}>
                 <p>${item.itemPrice}</p>
                 <img src={"/icons/close.svg"} />
                  <p>{item.itemQuantity}</p>
                  <img src={"/icons/pause.svg"} />
                <p style={{ marginLeft: "15px" }}>${item.itemQuantity * item.itemPrice}</p>
              </Box>
            </Box>
               );
              })}
          </Box>


              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>
                  <img src={"/icons/pause.svg"} style={{ marginLeft: "20px" }} />
                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <Button
                 value={order._id}
                  variant="contained"
                  color="secondary"
                  className={"cancel-button"}
                  onClick={deleteOrderHandler}
                >
                  Cancel
                </Button>
                <Button
                value={order._id} 
                variant="contained" 
                className={"pay-button"}
                onClick={processOrderHandler}
                >
                  Payment
                </Button>
              </Box>
            </Box>
          ))
        ) : (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img src={"/icons/noimage-list.svg"} style={{ width: 300, height: 300 }} />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
};

