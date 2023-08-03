/* eslint-disable react/prop-types */

function Button({ count, onClick }) {
  return (
    <button onClick={onClick}>
      count is {count}
    </button>
  )
}

export default Button