import React from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";

const Pagination = ({ pages }) => {

    const { pathname, search } = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const { limit, total, currentPage, next, prev, hasNext, hasPrev } = pages;
    const totalPages = Math.ceil(total / limit);

    const formatUrl = (page) => {
        return `${pathname}?keyword=${searchParams.get("keyword")}&page=${page}`;
    }

    const renderPagesHTML = (dealta = 2) => {
        const pagesHtml = [];
        const left = currentPage - 2;
        const right = currentPage + 2;
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                i === currentPage ||
                (i >= left && i <= right)
            ) {
                pagesHtml.push(i);
            }
        }
        return pagesHtml;
    }

    return (
        <ul className="pagination">
            {
                currentPage > 1
                    ? <li className="page-item"><Link className="page-link" to={formatUrl(prev)}>Trang trước</Link></li>
                    : null
            }

            {
                renderPagesHTML().map((page, index)=>
                    <li className={`page-item ${page===currentPage && 'active'}`}><Link className="page-link" to={formatUrl(page)}>{page}</Link></li>
                )
            }

            {
                currentPage < totalPages
                    ? <li className="page-item"><Link className="page-link" to={formatUrl(next)}>Trang sau</Link></li>
                    : null
            }
        </ul>
    )
}
export default Pagination;