import type { ReactElement } from 'react'
import Layout from '../../src/layouts/Layout'
import type { NextPageWithLayout } from '../_app'
import { Header } from "../../src/components/Header"
import Table from '../../src/components/users/Table'

const Users: NextPageWithLayout = () => {
  return (
    <>
        <Header title='All Users'/>
        <Table/>
    </>
  );
}

Users.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Users
