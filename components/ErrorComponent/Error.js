export const Error=()=>{

    return(
        <>
        <div style={{
           display:"flex",
           flexDirection:'column',
           alignItems:"center",
           justifyContent:"center",
           height:'90vh',
           
            
        }}>
            <h3 style={{
                fontWeight:'500',
                fontSize:'2em',
                marginBlock:'10px',
                color:'lightpink'
            }}>OOPs!</h3>
            <p style={{
                fontWeight:'100',
                fontSize:'2em',
                
            }}>Something went wrong </p>
        </div>
        </>
    )
}