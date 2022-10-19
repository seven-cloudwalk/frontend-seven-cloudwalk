import api from "./api";

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
};

export default productService;
