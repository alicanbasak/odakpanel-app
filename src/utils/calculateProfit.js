export const calculateProfit = (
  orderTotal,
  orderM2,
  shipmentRates,
  salesPrice
) => {
  let orderResult = Number(orderTotal) / Number(orderM2);
  let orderResultSumWithShipmentRate = orderResult + Number(shipmentRates);
  let result = orderResultSumWithShipmentRate / Number(salesPrice);

  // shipment type yoksa hesabi yapma
  if (isNaN(result) || result === Infinity || result === -Infinity) {
    return 0;
  }

  return result.toFixed(2);
};
