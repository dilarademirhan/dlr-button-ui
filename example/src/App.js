import React from 'react'

import { Button } from 'dlr-button-ui'
import 'dlr-button-ui/dist/index.css'

const App = () => {
  return (
    <>
      <Button type='.primary'/>
      <Button type='.default'/>
      <Button type='.dashed'/>
      <Button type='.text'/>
      <Button type='.link'/>
    </>
    );
}

export default App
