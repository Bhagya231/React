export default function Input({label, textarea, ref , ...props})
{
    const classes ="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-gray-500";
    return(
        <p className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">{label}</label>
            {textarea ? <textarea ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes}  {...props}/>}
        </p>
    )
}