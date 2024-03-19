import React from 'react';
import { useLocation } from 'react-router-dom';

const Board = () => {
    const location = useLocation();
    const { state } = location;
    
    // Access the props passed from the previous component
    const { contentList, createdAt, feedCommentCount, feedLoginId, feedText, id } = state;

    // Now you can use these props in your component
    // For example:
    console.log('Content List:', contentList);
    console.log('Created At:', createdAt);
    console.log('Feed Comment Count:', feedCommentCount);
    console.log('Feed Login Id:', feedLoginId);
    console.log('Feed Text:', feedText);
    console.log('ID:', id);
    console.log('씨발 뭐야');

    return (
        <div>
            <h1>Board</h1>
            {/* Render the content using the received props */}
        </div>
    );
}

export default Board;