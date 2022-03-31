import './Hello.css'
function Hello() {
    return (

        <>
            <div>
                <h1>안녕</h1>
                <div>리액트 기본문법 1</div>
                <div>리액트 기본문법 2</div>
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