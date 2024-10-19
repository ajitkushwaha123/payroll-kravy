import React from "react";

type currencyProps = {
  price: number;
};

const PriceFormatter = ({ price } : currencyProps) => {
  return (
    <span>
      {new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2,
      }).format(price)}
    </span>
  );
};

export default PriceFormatter;
