import { create } from "zustand";
import { cardData } from "../models/Data";
import { dataLength } from "../components/MainBoard/MainBoard";

type StoreType = {
  clickNum: number;
  addClickNum: () => void;
  cardStateList: boolean[];
  clickCard: (index: number) => void;
};

const useStore = create<StoreType>((set) => ({
  clickNum: 0,
  addClickNum: () => set((state) => ({ clickNum: state.clickNum + 1 })),
  cardStateList: new Array(dataLength).fill(false),
  clickCard: (index) =>
    set((state) => {
      const newList = [...state.cardStateList];
      newList[index] = !newList[index];
      return { cardStateList: newList };
    }),
}));

export default useStore;
