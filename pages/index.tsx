import type {GetServerSideProps, GetStaticProps, GetStaticPropsContext, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
        Empty
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (context: GetStaticPropsContext) => {
  return {
    redirect: {
      destination: '/api/redirect',
      permanent: false
    }
  }
}

export default Home
