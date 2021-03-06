import React from 'react'

import {
  Slide,
  Heading,
  Text,
  Appear
} from 'spectacle'

export default (
  <Slide bgColor="secondary">
    <Appear order="1">        
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Menawan
      </Heading>
    </Appear>
    <Appear order="2">
      <Text margin="0" textColor="primary" size={3} fit bold>
        Situs web tapi rasa aplikasi native, bukan hybrid, tanpa playstore
      </Text>
    </Appear>
  </Slide>
)