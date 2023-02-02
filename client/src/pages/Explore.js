import React from 'react'
import RowProducts from '../components/explore/RowProducts'
import Layout from '../components/Layout'
import PageTitle from '../components/typography/PageTitle'
const Explore = () => {
    return (
        <Layout>
            <div className="bg-white">
                <PageTitle>
                    <div className='text-center text-3xl'>
                        Explore
                    </div>
                </PageTitle>
                <RowProducts title={'Products Around You'} />
                <RowProducts title={'Latest Arrival'} />
                <RowProducts title={'Recommended for You '} />
            </div>
        </Layout>
    )
}

export default Explore