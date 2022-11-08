import type { ReactElement } from 'react'
import Layout from '../../src/layouts/Layout'
import type { NextPageWithLayout } from '../_app'
import { Header } from "../../src/components/Header"
import Table from '../../src/components/certificates/Table'
import Filter from '../../src/components/certificates/Filter'

const CertificateList: NextPageWithLayout = () => {
  return (
    <>
        <Header title='Live Birth Certificates'/>
        <Filter/>
        <Table/>
    </>
  );
}

CertificateList.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default CertificateList
