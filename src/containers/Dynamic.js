import React from 'react'
import Layout from '../layout/Layout'
import { Head } from 'react-static'

export default () => (
  <Layout>
    <Head>
      <title>Dynamic page ...</title>
    </Head>
    This is a dynamic page! It will not be statically exported, but is
    available at runtime
  </Layout>
)
