import styled from "styled-components";

export const TotalDiv = styled.div`
    /* width: 500px; */
    /* height: 35px; */

    margin: 10px 0px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

export const CommentWriter = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 35px;

    margin-right: 10px;
`;

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin: 0px 0px;
`;

export const Comment = styled.p`
    /* width: 500px; */

    margin-top: 5px;
    margin-bottom: 0px;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    color: #191919;

    margin: 0px 0px;
`;

export const CommentStrong = styled.strong`
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;

    color: #191919;
    
`;

export const CommentTimeDiv = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;

    color: #7F7F7F;
    
`;