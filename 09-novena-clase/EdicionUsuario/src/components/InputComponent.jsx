import React from 'react'

const InputComponent = (props) => {

    const { title, type, mode, valueOld, valueNew, newUserHandler } = props;

    let titleTunned = title.split('')
    titleTunned[0] = titleTunned[0].toUpperCase()
    titleTunned = titleTunned.join('')

  return (
    <>
    <span className='span-title'>{titleTunned}</span>
          {mode === "CREATE" || mode === "MODIFY" ? (
            <input
            required
              type={type}
              value={valueNew}
              onChange={(e) => newUserHandler(title, e.target.value)}
            />
          ) : (
            <span>{valueOld}</span>
          )}</>
  )
}

export default InputComponent