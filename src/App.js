import React from 'react'
import { Root, Head, Routes, addPrefetchExcludes } from 'react-static'

import { Router, Location, navigate } from '@reach/router'
import Dynamic from 'containers/Dynamic'

// App layout wrapper
import Preloader from './layout/Preloader'
import Layout from './layout/Layout'

import { Tabs } from 'dnb-ui-lib/components'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Head>
        <html lang="en" />
      </Head>
      <Layout>
        <Location>
          {({ location: { pathname } }) => {
            console.log('locaiton', pathname)
            return (
              <Tabs
                data={[
                  { title: 'Home', key: 'home' },
                  { title: 'Form #1', key: 'form-demo-01' },
                  { title: 'Form #2', key: 'form-demo-02' },
                  { title: 'Dynamic', key: 'dynamic' }
                ]}
                selected_key={pathname.replace(/^\//, '')}
                on_change={({ key }) =>
                  key === 'home' ? navigate('/') : navigate(key)
                }
                section_style="mint-green"
              >
                <React.Suspense fallback={<Preloader />}>
                  <Router>
                    <Dynamic path="dynamic" />
                    <Routes path="*" />
                  </Router>
                </React.Suspense>
              </Tabs>
            )
          }}
        </Location>
      </Layout>
    </Root>
  )
}

export default App
