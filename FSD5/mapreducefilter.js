const arr=[1,2,3,4,5];
const mapArr=arr.map((ele)=>{return ele*4});
console.log(mapArr);
const sum=arr.reduce((acc,ele)=>acc += ele,0);
const filterData= arr.filter((ele)=>ele%4 === 0);
console.log(filterData);

const data={
    {
        productID:1,
        productName:"A",
        price:499,
        manufacturingDate:"25-09-2025",
        color: red
    }
     {
        productID:2,
        productName:"B",
        price:599,
        manufacturingDate:"26-09-2025",
        color: blue
    }
     {
        productID:3,
        productName:"C",
        price:799,
        manufacturingDate:"27-09-2025",
        color: black
    }
}
const mapData=data.map((product)=>product.productName);
console.log(mapData);
const filter=data.filter((product)=>product.price<=600);
console.log(filterOnprice);
