import { Link, useLocation } from "react-router-dom"
import "../Detail/detail.css"

const Detail = () => {
    const item = useLocation()
    console.log(item)
    
    return(
        <>
            <br/>
            <h1>Book Detail</h1>
                        <section>
                            <div className="det" key={item.state.item.id}>
                                <div className="container flex">
                                    <div className="left">
                                        <Link to="/books">
                                            <img src="./src/assets/icon/back.png" width="20px" className="back"/>
                                        </Link>
                                        <div className="main_image">
                                            <img src={item.state.item.image} alt="" width="300px" />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <h3>{item.state.item.tittle}</h3>
                                        <h4>{item.state.item.writter}</h4>
                                        <h4>Tahun Terbit: {item.state.item.publication_year}</h4>
                                        <h4>Stock: {item.state.item.stock}</h4>
                                        <br />
                                        <h4>Description:</h4>
                                        <p>
                                            {item.state.item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                
        </>
    )
}

export default Detail