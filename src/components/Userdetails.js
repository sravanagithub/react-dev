export default function Userdetails(props){
    return(
        <>
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-wrap gap-4">
                        {props.users.map((user)=>{
                            return(
                                <div className="card p-5">
                                <div><span className="fw-bold title">id:</span>{user.id}</div>
                                <img style={{ backgroundSize:"contain",height:"100%", width:"100%"}} src={user.avatar} />
  
          <div ><span className="fw-bold title">Email:</span>{user.email}</div>
          <div  ><span className="fw-bold title">FirstName:</span>{user.first_name}</div>
          <div ><span className="fw-bold title">LastName:</span>{user.last_name}</div>
                                </div>
                            )
                        })}
                       
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}