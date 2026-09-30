export default function Button({children,...props})
{
    return(

        <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700" {...props}>{children}</button>
    );
}