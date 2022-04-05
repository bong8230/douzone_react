import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let MyBox = styled.div`
    padding : 20px;
    `;
let MyTitle = styled.h3`
    font-size : 25px;
    color : $ { props=>props.color};
`

function Detail(props) {

    const history = useHistory();
    let { id } = useParams();
    let search = props.shirt.find((item) => {
        if (item.id == id) return true;
    });
    return (
        <>
            <div className='container'>
                <MyBox>
                    <MyTitle color={'red'}> ㅎㅇ</MyTitle>
                </MyBox>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={`https://raw.githubusercontent.com/ai-edu-pro/busan/main/t${search.id + 1}.jpg`} alt={`티셔츠` + (search.id + 1)} width="100%" />
                    </div>
                </div>

                <div>
                    <h4 >{search.title}</h4>
                    <h6>{search.content}</h6>
                    <p>{search.price}</p>
                    <button className='btn btn-danger'>주문하기</button>
                    <button onClick={() => { history.goBack() }} className='btn btn-danger'>뒤로가기</button>
                </div>
            </div>

        </>
    );
}

export default Detail;