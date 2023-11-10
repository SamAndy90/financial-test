import Input from "../Input/Input";
import {AiOutlinePercentage } from "react-icons/ai"
import {AiOutlineDollar} from "react-icons/ai"
import {FiHash} from "react-icons/fi"



function InputsList() {
    return (
        <div className="flex flex-col gap-2 p-4">
            <Input/>
            <Input/>
            <Input/>
        </div>
    )
}

export default InputsList;


const inputs = [
    {
        id: 1,
        category: "percentage",
        icon: AiOutlinePercentage
    },
    {
        id: 1,
        category: "currency",
        icon: AiOutlineDollar
    },
    {
        id: 1,
        category: "number",
        icon: FiHash
    },
]