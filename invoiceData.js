// for (let i = 0; i < data.length; i++) {
//   const id = data[i].querySelectorAll("td")[0].textContent;
//   const image = data[i].querySelector("img").src;
//   const item = data[i].querySelectorAll("td")[2].textContent;
//   const description = data[i].querySelectorAll("td")[3].textContent;
//   const quantity = data[i].querySelectorAll("td")[4].textContent;
//   const unit_cost = data[i].querySelectorAll("td")[5].textContent;
//   const total = data[i].querySelectorAll("td")[6].textContent;

//   items.push({
//     id,
//     image,
//     item,
//     description,
//     quantity,
//     unit_cost,
//     total,
//   });
// }

export const theadData = [
  { name: "#", width: "" },
  { name: "Image", width: "" },
  { name: "Item", width: "" },
  { name: "Description", width: "" },
  { name: "Quantity", width: "" },
  { name: "Unit_Cost", width: "" },
  { name: "Total", width: "" },
];

export const invoiceData = [
  {
    id: "1",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p1.jpg",
    item: "Baby Pink Shoese",
    description: "Amazing shoes with 10 day's replacement warrenty",
    quantity: "4",
    unit_cost: "$50.00",
    total: "$200.00",
  },
  {
    id: "2",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p2.jpg",
    item: "Man T-Shirt with Cap Style",
    description: "Long Sleeve men T-shirt with cap in Dark Blue Color",
    quantity: "10",
    unit_cost: "$50.00",
    total: "$500.00",
  },
  {
    id: "3",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p3.jpg",
    item: "Full Sleeve T-Shirt for men",
    description: "Amazing T-shirt in pure Cotton for both",
    quantity: "10",
    unit_cost: "$20.00",
    total: "$200.00",
  },
  {
    id: "4",
    image:
      "https://maraviyainfotech.com/projects/ekka/ekka-v35/ekka-admin/assets/img/products/p4.jpg",
    item: "Round Hat for Men",
    description: "Pure Leather Hat for men with black round tap",
    quantity: "6",
    unit_cost: "$50.00",
    total: "$300.00",
  },
];
