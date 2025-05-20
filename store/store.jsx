import { authSlice } from "@/features/auth/authSlice";
import { chalanSlice } from "@/features/chalan/chalanSlice";
import { customersSlice } from "@/features/customers/customerSlice";
import { dailySlice } from "@/features/daily/dailySlice";
import { dyeingSlice } from "@/features/dyeing/dyeingSlice";
import { graySlice } from "@/features/gray/graySlice";
import { productSlice } from "@/features/products/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [graySlice.reducerPath]: graySlice.reducer,
    [dyeingSlice.reducerPath]: dyeingSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    [chalanSlice.reducerPath]: chalanSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [customersSlice.reducerPath]: customersSlice.reducer,
    [dailySlice.reducerPath]: dailySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      //   rtkQueryGlobalLogger,
      graySlice.middleware,
      dyeingSlice.middleware,
      productSlice.middleware,
      chalanSlice.middleware,
      authSlice.middleware,
      customersSlice.middleware,
      dailySlice.middleware
    ),
  devTools: true,
  //   devTools: import.meta.env.VITE_NODE_ENV === "development",
});
