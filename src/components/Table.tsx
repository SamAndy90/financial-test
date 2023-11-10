interface TableProps {
    children: React.ReactNode;
}

function Table({ children }: TableProps) {
    return <div className="flex rounded-sm bg-white border border-gray-300 h-96 ">{children}</div>;
}

export default Table;
