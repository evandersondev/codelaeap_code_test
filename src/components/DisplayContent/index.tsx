import { Fragment } from 'react'

interface DisplayTextProps {
  text: string
}

export function DisplayContent({ text }: DisplayTextProps) {
  return (
    <p>
      {text.split('\n').map((line, index) => (
        <Fragment key={index}>
          {line}
          <br />
        </Fragment>
      ))}
    </p>
  )
}
