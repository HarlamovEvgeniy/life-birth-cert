import type { ReactElement } from 'react'
import Layout from '../../src/layouts/Layout'
import type { NextPageWithLayout } from '../_app'
import { Header } from "../../src/components/Header"

const CreateCertificate: NextPageWithLayout = () => {
  return (
    <>
        <Header title='New Child'/>
    </>
  );
}

CreateCertificate.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default CreateCertificate
