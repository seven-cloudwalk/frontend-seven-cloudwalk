import api from "./api";
import { productType, updateAllProductsType } from "../types/types";

const productService = {
  getAllProducts: () =>
    api
      .get("products/all")
      .then((response: any) => response)
      .catch((error: any) => error.response),

  getProductById: (id: string) =>
    api
      .get(`products/find/${id}`)
      .then((response: any) => response)
      .catch((error: any) => error.response),

  createProducts: (values: productType) =>
    api
      .post("products", values)
      .then((response: any) => response)
      .catch((error: any) => error.response),

  updateProducts: (values: productType, id: string) =>
    api
      .patch(`products/updateProducts/${id}`, values)
      .then((response: any) => response)
      .catch((error: any) => error.response),

  updateAllProducts: async (req: updateAllProductsType[]) => {
    // api
    // .patch("/products/updateAll", req)
    // .then((response: any) => response)
    // .catch((error: any) => error.response),
   
    try {
      let response = await api.patch("/products/updateAll", req);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
      return error;
    }
  },

  deleteProducts: (id: productType) =>
    api
      .delete(`products/delete/${id}`)
      .then((response: any) => response)
      .catch((error: any) => error.response),
};

export default productService;
