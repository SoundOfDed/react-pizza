import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';

const Home = () => {
    const isSearch = useRef(false)
    const dispatch = useDispatch()
    const { searchInput } = useContext(SearchContext);

    const { categoryId, sort, currentPage } = useSelector(state => state.filterSlice)
    const sortType = sort.sortProperty

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPizzas = () => {
        setIsLoading(true)

        axios.get(
            `https://651ef7de44a3a8aa476944af.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''
            }&sortBy=${sortType.replace('-', '')}&order=${sortType.includes('-') ? 'asc' : 'desc'}${searchInput ? `&search=${searchInput}` : ''}&page=${currentPage}&limit=4`
        )
            .then(response => {
                setItems(response.data);
                setIsLoading(false);
            })
    }

    const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onPageChange = (number) => {
        dispatch(setCurrentPage(number))
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            fetchPizzas();
        }

        isSearch.current = false;

    }, [categoryId, sortType, searchInput, currentPage]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
            <Pagination currentPage={currentPage} onPageChange={onPageChange} />
        </div>

    );
}

export default Home;
