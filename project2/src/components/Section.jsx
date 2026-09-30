function Section({ as: Component = "section",title,children})
{
    return(
        <Component className="container my-4">
            <h2 className="section-title">{title}</h2>
            {children}
        </Component>
    )
}


export default Section;