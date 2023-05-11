import { useEffect } from "react"
import { gql, useQuery, useMutation } from "@apollo/client"
import { Link, useNavigate } from "react-router-dom"
import "../Books/books.css"

export const GetBook = gql`
    query book {
        book {
        id
        tittle
        writter
        publication_year
        stock
        description
        image
        }
    }
`

const DeleteBook = gql `
mutation deletebook($id: String!) {
  delete_book_by_pk(id: $id) {
    id
    tittle
        writter
        publication_year
        stock
        description
        image
  }
}
`

const Book = () => {
    const { data } = useQuery(GetBook)
    const [deletebookbyId] = useMutation(DeleteBook)

    const navigate = useNavigate()

    return(
        <>
            <br/>
            <h1>Books</h1><br/>
            <div className="row">
                {
                    !data? 
                    <p style={{textAlign: "center"}}>Loading...</p>:
                    data?.book.map((item) => {
                        return(
                            <div className="col-4" key={item.id}>
                                    <div className="row w-100 mx-0-auto col-4">
                                        <div className="kartu m-3" style={{ width: "18rem" }}>
                                            <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.tittle}</h5>
                                                <label className="card-text">{item.writter},</label>
                                                <label className="card-text">{item.publication_year}</label>
                                                <br/><br/>
                                                <Link to={"/edit"} state={{item: item}} className="btn btn-primary me-4" >
                                                    Edit
                                                </Link>
                                                <a href="#" className="btn btn-danger ms-4"
                                                onClick={() => {[
                                                    deletebookbyId({
                                                        variables:{id:item.id}
                                                    }), window.location.reload(), navigate("/books")]
                                                }}>
                                                    Delete
                                                </a><br/><br/>
                                                <Link to={"/detail"} state={{item: item}} className="btn btn-primary me-4" >
                                                    Detail View
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Book