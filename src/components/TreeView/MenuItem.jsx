import { useCallback, useState } from "react"

const MenuItem = ({ data }) => {
    const [showChildren, setShowChildren] = useState(false);

    const handleShowChildren = useCallback(() => {
        setShowChildren(!showChildren);
    }, [showChildren])

    return (
        <>
            {data && (<div onClick={handleShowChildren}>
                <a href={data?.to} className="menu-item">{data?.label}</a>
                {data?.children && data?.children?.length > 0 && <span>{showChildren ? '-' : '+'}</span>}
            </div>
            )}
            {showChildren && data?.children && data?.children?.length > 0 && <ul className="subMenu">
                {data?.children?.map((item, index) => (
                    <li key={index} className="menu-children">
                        <MenuItem data={item} />
                    </li>
                ))}
            </ul>}
        </>
    )
}

export default MenuItem