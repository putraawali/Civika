import React from "react";

export default function useRupiah(ukt) {
  let uktConverted = "";
  let uktString = ukt.toString();
  let count = 0;
  for (let i = uktString.length - 1; i >= 0; i--) {
    if (count === 3) {
      uktConverted = "." + uktConverted;
      count = 0;
    }
    uktConverted = uktString[i] + uktConverted;
    count++;
  }
  return { uktConverted };
}
