import { create } from "zustand";

import { Product } from "@/types";

interface CartProps {
    items: Product[]
    addItem: (data: Product) => void
    removeItem: (id: string) => void
    removeAll: () => void
}

const useCart = create();

export default useCart;