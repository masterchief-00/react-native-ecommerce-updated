import React from 'react'
import { Center,Text } from 'native-base'

export default function Message({children,bg,color,size}) {
  return (
    <Center bg={bg} p={3} rounded={8}>
        <Text color={color} fontSize={size}>
            {children}
        </Text>
    </Center>
  )
}