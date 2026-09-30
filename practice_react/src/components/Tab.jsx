export function Tab({children,buttons})
{
    
    return(
        <>
        <menu>
            {buttons}
        </menu>
        {children}
        </>
    );
}


// export function Tab({children,buttons, buttonscontainer})
// {
//     const Buttoncontainer = buttonscontainer;
//     return(
//         <>
//         <buttoncontainer>
//             {buttons}
//         </buttoncontainer>
//         {children}
//         </>
//     );
// }