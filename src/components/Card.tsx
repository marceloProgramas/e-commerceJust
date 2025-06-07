import * as S from "./Card"

export default ({Item,price,url}:{Item:String,price:number,url:string}) => {
    function click(){
        console.log("site");
    }
    return(
        <>
        <S.Card onClick={click}>
        <S.Img src={url}/>
        <S.Title>{Item}</S.Title>
        <S.Price>{price}</S.Price>
        </S.Card>
        </>
    )
}