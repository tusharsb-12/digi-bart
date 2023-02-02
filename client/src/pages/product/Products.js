import React from 'react'
import Layout from '../../components/Layout'
import Filter from '../../components/product/Filter'
import {
    SearchIcon,
} from '../../assets/icons'
import { Input } from '@windmill/react-ui'

const Products = () => {
    return (
        <Layout>
            <div className='my-4'>
                {/* <!-- Search input --> */}
                <div className="flex justify-center flex-1 lg:mr-32 my-4">
                    <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                        <div className="absolute inset-y-0 flex items-center pl-2">
                            <SearchIcon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <Input
                            className="h-[3rem] pl-8 text-gray-700"
                            placeholder="Search for projects"
                            aria-label="Search"
                        />
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-[27%]'>
                        <Filter />
                    </div>
                    <div className='w-[73%]'>
                        <div>
                            <p className='text-left text-xl'>Products </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Products