import React from 'react'
import Like from './Like'
import Comment from './Comment'

function Post() {    
  return (
    <div>
        <Like name={"Like 1"}></Like>
        <Comment name={"Comment 1"}></Comment>
        <Like name={"Like 2"}></Like>
        <Comment name={"Comment 2"}></Comment>
        
    </div>
  )
}

export default Post