import { ChevronDownIcon, MoonIcon, PlusIcon } from '@heroicons/react/20/solid'
import React from 'react';

const sizes = {
  compact: 'button-compact',
  comfortable: 'button-comfortable',
  spacious: 'button-spacious',
}

const types = {
  filled: 'button-filled',
  outlined: 'button-outlined',
}

const styles = {
  primary: 'button-primary',
  primaryOutlined: 'button-primary-outlined',
}


export default function button({ style, size, children, type}) {
  let styleClasses = styles[style]
  let sizeClasses = sizes[size]
  let typeClasses = types[type]

  return (
    <button type="button" className={`btn ${sizeClasses} ${typeClasses}  ${styleClasses}`}>
      {children}
    </button>
  )
}