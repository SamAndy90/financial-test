"use client";

import { IconButton, TextInput } from "@/common/ui";
import { useInputTitleRename } from "@/store";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

function Input() {
    const { isRename, setIsRename, titleValue, setTitleValue } = useInputTitleRename();
    return (
        <div className="border rounded-sm">
            <div className="p-2 bg-gray-100 flex justify-between items-center">
                <div>
                    {isRename && (
                        <div className="cursor-pointer" onClick={setIsRename}>
                            {titleValue}
                        </div>
                    )}
                    {!isRename && (
                        <TextInput
                            value={titleValue}
                            onBlur={setIsRename}
                            onChange={(e) => setTitleValue(e.target.value)}
                            className={{ input: "bg-transparent cursor-pointer" }}
                        />
                    )}
                </div>
                <div className="flex gap-1">
                    <IconButton>
                        <BsFillInfoCircleFill />
                    </IconButton>
                    <IconButton>
                        <BsThreeDots />
                    </IconButton>
                </div>
            </div>
            <div className="p-2">
                <TextInput startAdornment={<AiOutlinePercentage />} endValue="04" />
            </div>
        </div>
    );
}

export default Input;
