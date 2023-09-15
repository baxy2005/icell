import { ChevronDownIcon, MoonIcon, PlusIcon } from '@heroicons/react/20/solid'
import React from 'react';

const sizes = {
  compact: 'chip-compact',
  comfortable: 'chip-comfortable',
}

const types = {
  filled: 'chip-filled',
  outlined: 'chip-outlined',
}

const styles = {
  primary: 'chip-primary',
  primaryOutlined: 'chip-primary-outlined',
  secondaryOutlined: 'chip-secondary-outlined',
}


export default function chip({ style, size, children, type}) {
  let styleClasses = styles[style]
  let sizeClasses = sizes[size]
  let typeClasses = types[type]

  return (
    <span className={`chip ${sizeClasses} ${typeClasses}  ${styleClasses}`}>
      {children}
    </span>
  )
}