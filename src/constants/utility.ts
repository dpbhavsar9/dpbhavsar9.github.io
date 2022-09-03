// this.data.forEach((i) => {
//   const keys = Object.keys(i).filter(
//     (k) => k !== 'Country' && k !== 'Notes' && k !== 'Reporting year'
//   );
//   // console.log(keys);
//   const obj = {};
//   keys.forEach((k) => {
//     if (i.Country && Number(i[2021].replace('%', ''))) {
//       obj[k] = Number(i[k].replace('%', ''));
//     }
//   });

//   if (Object.keys(obj).length) {
//     this.populatedData.push({
//       [i.Country]: obj,
//     });
//   }
// });
// console.log(this.populatedData);
