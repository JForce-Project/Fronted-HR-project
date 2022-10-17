import React, { useEffect, useState } from 'react'
import { Grid } from "@chakra-ui/react"

import Cards from "../../components/Cards/Cards"
import * as axios from "../../api"
import { useQuery } from 'react-query'

function Envanterler() {

  const [data, setData] = useState(null);
  // useEffect(() => {
  //   if (!data) {
  //     axios.EnvanterlerList().then((res) => setData(res.data))
  //   }
  // }, [data])

  return (
    <div>

      <Grid templateColumns='repeat(3, 1fr)' gap={4}>

        {
          data?.map((item, key) => <Cards key={key} item={item} />)
        }

      </Grid>
    </div>
  )
}
export default Envanterler
