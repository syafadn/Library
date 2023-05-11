import { useEffect } from "react"
import { gql, useQuery } from "@apollo/client"

export const GetMember = gql`
        query member {
            member {
                id
                name
                nim
                phone_number
                email
                departement
            }
        }
    `

const Member = () => {
    const { data } = useQuery(GetMember)

    useEffect(() => {
        console.log('data gql: ', data);
    })

    return(
        <>
            <br/>
            <h1>Members</h1><br/>
            {
                <div className="col-9 pl-5 pt-2">
                    <table className="table table-striped" id="myTable">
                        <tbody>
                            <tr>
                                <td>
                                    <strong>No</strong>
                                </td>
                                <td>
                                    <strong>Name</strong>
                                </td>  
                                <td>
                                    <strong>NIM</strong>
                                </td>
                                <td>
                                    <strong>Phone Number</strong>
                                </td>
                                <td>
                                    <strong>Email</strong>
                                </td>
                                <td>
                                    <strong>Departement</strong>
                                </td>
                            </tr>

                            {
                                !data? 
                                <p style={{textAlign: "center"}}>Loading...</p>:
                                data?.member.map((item) => {
                                    return(
                                        <tr key={item.id}>
                                            <td>
                                                {item.id}
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.nim}
                                            </td>
                                            <td>
                                                {item.phone_number}
                                            </td>
                                            <td>
                                                {item.email}
                                            </td>
                                            <td>
                                                {item.departement}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

export default Member