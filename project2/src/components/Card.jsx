function Card({children})
{
    return(
        <div className="card shadow product-card h-100">
            <div className="card-body">
                {children}
            </div>
        </div>

    )
}

export default Card;