function Test(props) {
    console.log(props.data)
    return (
        <>
            <p>Test Page 및 Backend Cors 테스트 {process.env.API_HOST}</p>
        </>
    )
}

export async function getStaticProps() {

    const res = await fetch(`${process.env.LOCAL_HOST}/api/v1/test`);
    const result = await res.json()

    return {
        props : {
            data : result
        }
    }
}


export default Test;