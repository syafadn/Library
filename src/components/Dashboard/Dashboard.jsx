import { gql, useQuery } from "@apollo/client";

const CountMember = gql`
query CountMember {
    member_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`

const CountBook = gql`
query CountBook {
    book_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`

const Dashboard = () => {

    const { data: memberData, loading: memberLoading } = useQuery(CountMember);
    const { data: bookData, loading: bookLoading } = useQuery(CountBook);

    if (memberLoading || bookLoading) {
        return <p>Loading...</p>;
    }

    const memberCount = memberData?.member_aggregate?.aggregate?.count || 0;
    const bookCount = bookData?.book_aggregate?.aggregate?.count || 0;

    return(
        <>
            <br/>
            <h1>Dashboard</h1><br/>
            <div className="d-flex">
                <div className="books card m-3" style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="./src/assets/icon/book.png" className="img-fluid rounded-start" width="60"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Books</h5>
                                <p className="card-text"> {bookCount} </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="members card m-3" style={{ maxWidth: 540 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="./src/assets/icon/member.png" className="img-fluid rounded-start" width="80"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Members</h5>
                                <p className="card-text">
                                {memberCount}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard