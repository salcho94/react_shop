const MainList = (props) => {
        const list = props.shoes.map((data,index) => {
            return(
                    <div className="col-md-4">
                        <img src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`} width="80%" />
                        <h4>{data.title}</h4>
                        <p>{data.content}</p>
                        <p>{data.price}</p>
                    </div>
            )
        })
        return(
            <>
                {list}
            </>
        )
}
export default MainList;