// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("p1 success");
//     },3000)
// })
// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("p2 success");
//     },1000)
// })
// const p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("p3 success");
//     },2000)
// })

// const promise = Promise.all([p1,p2,p3]).then(res=> console.log(res)).catch(err=> console.log(err));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p1 success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p2 fails");
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p3 success");
//   }, 2000);
// });

// const promise = Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p1 success");
//   }, 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("p2 fails");
//   }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("p3 success");
//   }, 2000);
// });

// const promise = Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 fails");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 success");
  }, 2000);
});

const promise = Promise.race([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));