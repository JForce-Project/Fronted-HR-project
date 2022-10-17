import { Box, Image } from "@chakra-ui/react"
import { Button } from 'elementz';

import React from 'react'
import { Link } from "react-router-dom"

function Cards({item}) {

  return (

    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">

      <Link to="#/">
        <Image src="https://productimages.hepsiburada.net/s/213/375/110000191455912.jpg" alt="envanter" />
        <Box p="6">
          <Box d="plex" alignItems="baseline"> 12/12/2021 </Box>
          <Box mt="1px" fontWeight="semibold" as="h4" lineHeight="tight"> {item?.marka}</Box>
          <Box> {item?.statu}</Box>
        </Box>
      </Link>
      
      <Button warning gradient >Asign</Button>


    </Box>



  )
}

export default Cards
