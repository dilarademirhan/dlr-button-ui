import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type }) => {
  let style;
  let text  = type.substring(1) + ' Button';
  if (type == '.primary') {
    style = styles.primary;
  } else if (type == '.dashed') {
    style = styles.dashed;
  } else if (type == '.text') {
    style = styles.text;
  } else if (type == '.link') {
    style = styles.link;
  } else {
    style = '';
  }
  return <button className={ `${ styles.btn } ${ style }`}> { text } </button>
}
