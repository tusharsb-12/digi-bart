import React, { useState, useEffect } from 'react';
import SectionTitle from '../typography/SectionTitle';
import { Link } from 'react-router-dom';
import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableRow,
    TableFooter,
    TableContainer,
    Badge,
    Avatar,
    Button,
    Pagination,
} from '@windmill/react-ui';
import { DropdownIcon, EditIcon, TrashIcon } from '../../assets/icons';

import response from './tableData';
import { myOffers, myTrades } from '../../api/trade';
// make a copy of the data, for the second table
// const response2 = response.concat([])

const ProductTable = ({
    title,
    tableCols = ['My Product', 'In Exchange of'],
    enableActions = false,
    demoView = true,
    redirectLink = '',
}) => {
    const [responses, setResponses] = useState([]);
    // setup pages control for every table
    const [pageTable2, setPageTable2] = useState(1);
    // setup data for every table
    const [dataTable2, setDataTable2] = useState([]);
    // pagination setup
    const resultsPerPage = demoView ? 3 : 10;
    const totalResults = response.length;

    // pagination change control
    function onPageChangeTable2(p) {
        setPageTable2(p);
    }

    useEffect(() => {
        (async () => {
            const data1 = await myOffers();
            const data2 = await myTrades();

            console.log(data1);
            console.log(data2);
        })();
    }, []);

    // on page change, load new sliced data
    // here you would make another server request for new data
    useEffect(() => {
        setDataTable2(
            responses.slice(
                (pageTable2 - 1) * resultsPerPage,
                pageTable2 * resultsPerPage
            )
        );
    }, [pageTable2, responses]);

    useEffect(() => {
        setResponses(response);
        setPageTable2(1);
    }, []);

    return (
        <>
            <SectionTitle>{title}</SectionTitle>
            <TableContainer className="mb-8">
                <Table>
                    <TableHeader>
                        <tr>
                            {tableCols.map((col, idx) => {
                                return <TableCell key={idx}>{col}</TableCell>;
                            })}
                            {enableActions && <TableCell>Actions</TableCell>}
                        </tr>
                    </TableHeader>
                    <TableBody>
                        {dataTable2.map((product, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <div className="flex items-center text-sm">
                                        <Avatar
                                            className="hidden mr-3 md:block"
                                            src={product.myProduct.image[0]}
                                            alt="User avatar"
                                        />
                                        <div>
                                            <p className="font-semibold">
                                                {product.myProduct.name}
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                {product.myProduct.description}
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center text-sm">
                                        <Avatar
                                            className="hidden mr-3 md:block"
                                            src={product.inExchange.image[0]}
                                            alt="User avatar"
                                        />
                                        <div>
                                            <p className="font-semibold">
                                                {product.inExchange.name}
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                {product.inExchange.description}
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>
                                {/* <TableCell>
                                    <span className="text-sm"> {product.offers}</span>
                                </TableCell> */}
                                {enableActions && (
                                    <TableCell>
                                        <div className="flex items-center space-x-4">
                                            <Button
                                                layout="link"
                                                size="icon"
                                                aria-label="Edit"
                                            >
                                                <EditIcon
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                />
                                            </Button>
                                            <Button
                                                layout="link"
                                                size="icon"
                                                aria-label="Delete"
                                            >
                                                <TrashIcon
                                                    className="w-5 h-5"
                                                    aria-hidden="true"
                                                />
                                            </Button>
                                        </div>
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {demoView ? (
                    <TableFooter>
                        <Link to={redirectLink}>
                            <div className="flex justify-center ">
                                <div className="flex flex-wrap  content-center">
                                    <span>View All</span>
                                    <DropdownIcon className="w-8 h-8 mt-[-2px]" />
                                </div>
                            </div>
                        </Link>
                    </TableFooter>
                ) : (
                    <TableFooter>
                        <Pagination
                            totalResults={totalResults}
                            resultsPerPage={resultsPerPage}
                            onChange={onPageChangeTable2}
                            label="Table navigation"
                        />
                    </TableFooter>
                )}
            </TableContainer>
        </>
    );
};

export default ProductTable;
