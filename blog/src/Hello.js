import './Hello.css'
function Hello(props) {
    return (

        <>
            <div>
                <h2> {props.message} 전달받음</h2>
            </div>
            <div>
                <h1>안녕</h1>
                <div className="gray-div">리액트 기본문법 1</div>
                <div>리액트 기본문법 2</div>
            </div>
        </>
    );
}

export default Hello;