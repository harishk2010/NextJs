export default function Docs({params}:{
    params:{
        slug:string[]
    }
}){
    if(params.slug.length==2){
        return <h1>this is route {params.slug[0]} and next {params.slug[1]}</h1>
    }else if(params.slug.length===1){
        return <h1> view docs feature {params.slug[0]}</h1>
    }
    // return <h1>Docs pagess</h1>
    
}