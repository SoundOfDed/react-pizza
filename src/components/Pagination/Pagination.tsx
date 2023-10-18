import classes from './Pagination.module.scss'
import ReactPaginate from 'react-paginate';
import { FC } from 'react';

type PaginationProps = {
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({currentPage, onPageChange}) => {
    return (
        <div className={classes.root}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e) => onPageChange(e.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                forcePage={currentPage - 1}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default Pagination;
