export async function getProducts() {
   const response = await fetch("https://dummyjson.com/products");
   if (!response.ok) throw new Error("Failed to fetch products");
   const data = await response.json();
   return data.products;
}

export async function getProductsByCategory(category: string) {
   const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
   );
   if (!response.ok) {
      throw new Error("Failed to fetch products");
   }
   const data = await response.json();
   return data.products;
}

export async function getProductById(id: number) {
   try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) return null;
      return await response.json();
   } catch (error) {
      console.error("Error fetching product:", error);
      return null;
   }
}

export async function getProductsBySearch(searchQuery: string) {
   try {
      const response = await fetch(
         `https://dummyjson.com/products/search?q=${searchQuery}`
      );
      const result = await response.json();
      console.log("API Response:", result);
      return result;
   } catch (error) {
      console.error("API fetch error:", error);
      return null;
   }
}
