import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";



export default function PausedOrders() {
    const ordersBox = [1, 2];
    const orders = [1, 2, 3, 4];
    
  return (
    <TabPanel value={"1"}>
      <Stack>
        {ordersBox.length > 0 ? (
          ordersBox.map((ele, index) => (
            <Box key={index} className={"order-main-box"}>
              <Box className={"order-box-scroll"}>
                {orders.map((ele, index) => (
                  <Box key={index} className={"orders-name-price"}>
                    <img src={"/img/cutlet.webp"} className={"order-dish-img"} />
                    <p className={"title-dish"}>Cutlet</p>
                    <Box className={"price-box"}>
                      <p>$11</p>
                      <img src={"/icons/close.svg"} />
                      <p>3</p>
                      <img src={"/icons/pause.svg"} />
                      <p style={{ marginLeft: "15px" }}>$33</p>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box className={"total-price-box"}>
                <Box className={"box-total"}>
                  <p>Product price</p>
                  <p>${33*4}</p>
                  <img src={"/icons/plus.svg"} style={{ marginLeft: "20px" }} />
                  <p>Delivery cost</p>
                  <p>$5</p>
                  <img src={"/icons/pause.svg"} style={{ marginLeft: "20px" }} />
                  <p>Total</p>
                  <p>${33*4+5}</p>
                </Box>
                <Button
                  variant="contained"
                  color="secondary"
                  className={"cancel-button"}
                >
                  Cancel
                </Button>
                <Button variant="contained" className={"pay-button"}>
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

