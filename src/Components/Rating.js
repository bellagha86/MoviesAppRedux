import React from 'react'
;
export default function Rating({rating}) {
let star=[]
for (let i = 0; i < 5; i++) {
  if (i < rating) {
   star.push(<label key={i} 
   className='star active'>
<input type="radio" name="rate" />
</label>)
  } else
  star.push(<label key={i} 
  className='star'>
<input type="radio" name="rate" />
</label>)
}
    return (
        <div>
            {star}
        </div>
    )
    }
