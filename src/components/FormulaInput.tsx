"use client"

import { TextInput } from "@/common/ui";
import { useAutocomplete } from "@/store";
import { Combobox } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineCheck } from "react-icons/ai";

function FormulaInput() {
    const { query, setQuery, selectedCategory, setSelectedCategory } = useAutocomplete();

    return (
        <div>
            <Combobox value={selectedCategory} >
                <Combobox.Input className={"border"} onChange={(event) => setQuery(event.target.value)} />
                <Combobox.Options>
                        <Combobox.Option value={""} as={Fragment}>
                            {({ active, selected }) => (
                                <li
                                    className={`${
                                        active ? "bg-blue-500 text-white" : "bg-white text-black"
                                    }`}>
                                    {selected && <AiOutlineCheck />}
                                    {"Option"}
                                </li>
                            )}
                        </Combobox.Option>
                </Combobox.Options>
            </Combobox>
        </div>
    );
}

export default FormulaInput;