import { create } from "zustand";

type Count = {
    count: number;
    inc: () => void;
};
type InputRename = {
    titleValue: string;
    setTitleValue: (v: string) => void;
    isRename: boolean;
    setIsRename: () => void;
};

type Autocomplete = {
    query: string;
    setQuery: (v: string) => void;
    selectedCategory: string;
    setSelectedCategory: (v: any) => void;
};

export const useInputsCount = create<Count>()((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const useInputTitleRename = create<InputRename>()((set) => ({
    titleValue: "",
    setTitleValue: (value) => set(() => ({ titleValue: value })),
    isRename: false,
    setIsRename: () => set((state) => ({ isRename: !state.isRename })),
}));

export const useAutocomplete = create<Autocomplete>()((set) => ({
    query: "",
    setQuery: (value) => set((state) => ({ query: value })),
    selectedCategory: "",
    setSelectedCategory: (value) => set((state) => ({ selectedCategory: value })),
}));
