import type { ReactElement } from 'react'
import Layout from '../../src/layouts/Layout'
import type { NextPageWithLayout } from '../_app'
import { Header } from "../../src/components/Header"
import Table from '../../src/components/certificates/Table'
import Filter from '../../src/components/certificates/Filter'
import { useRouter } from 'next/router'

const CertificateSingle: NextPageWithLayout = () => {
    const router = useRouter();
    return (
        <>
            <Header title={`User №${router.query?.id || 0}`}/>
        </>
    );
}

CertificateSingle.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default CertificateSingle
