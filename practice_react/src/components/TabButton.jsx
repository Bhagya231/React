// export default function TabButton({children,onSelect,className})
// {
    
//     return (
//         <div className="d-flex">
//             <button className={className} onClick={onSelect}>{children}</button>
//         </div>
//     )
// }


export default function TabButton({children,className,...props})
{
    
    return (
        <div className="d-flex">
            <button className={className} {...props}>{children}</button>
        </div>
    )
}
