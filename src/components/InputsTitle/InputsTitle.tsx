"use client";

import { IconButton } from "@/common/ui";
import { MdAdd } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { useInputsCount } from "@/store";

function InputsTitle() {
    const {count, inc} = useInputsCount()

    return (
        <div className="flex justify-between items-center p-4 border-r border-b">
            <div className="flex gap-1 items-center">
                <AiOutlineDownload className="h-6 w-6"/>
                <h4>Inputs ({count})</h4>
            </div>
            <IconButton size="big" colorVariant="secondary" onClick={inc}>
                <MdAdd />
            </IconButton>
        </div>
    );
}

export default InputsTitle;
