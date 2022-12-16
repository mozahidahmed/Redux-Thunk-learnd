import { addProduct } from "../../actions/productAction";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/product", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addProduct({
          _id: data.insertedId,
          ...product,
        })
      );
    }
  };
};

export default addProductData;







// add  from
// const dispatch = useDispatch();
// const submit = (data) => {
//     const product = {
//       model: data.model,
//       brand: data.brand,
//       status: data.status === "true" ? true : false,
//       price: data.price,
//       keyFeature: [
//         data.keyFeature1,
//         data.keyFeature2,
//         data.keyFeature3,
//         data.keyFeature4,
//       ],
//       spec: [],
//     };
//     console.log(product);
//     dispatch(addProductData(product));
//   };